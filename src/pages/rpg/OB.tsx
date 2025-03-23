import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type React from "react";
import { useEffect, useState } from "react";
import type { Character } from "../../content/characterList";
import { useApp } from "../../contexts/AppContext";
import { useRPG } from "../../contexts/RPGContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { rollDice } from "../../helpers/dice";
import DiceRollOverlay from "../../components/DiceRollOverlay";

export const obTitle = (
	<span className="flex items-center gap-1 w-max">
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas.calculator} />
		OB
	</span>
);

const OBPage = () => {
	const {
		characters: { faldrin },
	} = useRPG();
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const [movementRate, setMovementRate] = useState<number>(
		(faldrin as Character)?.bmr + (faldrin as Character)?.stats.qu.total,
	);
	const [movement, setMovement] = useState<number>(0);
	const [totalOb, setTotalOb] = useState<number>(
		(faldrin as Character)?.weapons[0]?.bonuses.total ?? 0,
	);
	const [remainingOb, setRemainingOb] = useState<number>(0);

	const [output, setOutput] = useState<React.ReactNode | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: obTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/ob", label: obTitle });
	}, []);

	useEffect(() => {
		setRemainingOb(Math.round(totalOb * (1 - movement / movementRate)));
	}, [movementRate, movement, totalOb]);

	const rollWeapon = () => {
		const rollVals = rollDice();

		const open =
			rollVals.reduce((acc, val) => acc + val.total, 0) + remainingOb;
		const closed = rollVals[0].total + remainingOb;
		setOutput(
			<div>
				<div>Attack</div>
				<div>
					<span>{open}</span> {open !== closed && <span>{closed}</span>}
				</div>
				{rollVals[0].total <= 4 && <span>FUMBLE</span>}
				<div>
					(
					{rollVals.map((roll, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={i}>
							[{roll.dPercentile},{roll.d10}]<strong>{roll.total}</strong>
						</span>
					))}
					<span>
						<strong>
							{remainingOb > 0 && "+"}
							{remainingOb}
						</strong>
					</span>
					)
				</div>
			</div>,
		);
	};

	const rollCrit = () => {
		const rollVals = rollDice();
		console.log(rollVals);

		const open = rollVals.reduce((acc, val) => acc + val.total, 0);
		const closed = rollVals[0].total;
		setOutput((prev) => {
			return (
				<>
					{prev}
					<div>
						<div>Crit</div>
						<div>
							<span>{open}</span> {open !== closed && <span>{closed}</span>}
						</div>
						<div>
							(
							{rollVals.map((roll, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<span key={i}>
									[{roll.dPercentile},{roll.d10}]<strong>{roll.total}</strong>
								</span>
							))}
							)
						</div>
					</div>
				</>
			);
		});
	};

	return (
		<main>
			<div>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Base Movement Rate</label>
				<div>
					<input
						type="range"
						min={0}
						step={5}
						max={150}
						onChange={(e) => {
							setMovementRate(Number.parseInt(e.target.value));
						}}
						value={movementRate}
					/>
					<input
						type="number"
						min={0}
						max={150}
						value={movementRate}
						onChange={(e) => {
							setMovementRate(Number.parseInt(e.target.value));
						}}
						onFocus={(e) => e.target.select()}
						step={5}
					/>
				</div>
			</div>
			<div>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Movement</label>
				<div>
					<input
						type="range"
						min={0}
						step={5}
						max={movementRate}
						onChange={(e) => {
							setMovement(Number.parseInt(e.target.value));
						}}
						value={movement}
					/>
					<input
						type="number"
						min={0}
						max={movementRate}
						step={5}
						onChange={(e) => {
							setMovement(Number.parseInt(e.target.value));
						}}
						onFocus={(e) => e.target.select()}
						value={movement}
					/>
				</div>
			</div>
			<div>
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Total OB</label>
				<div>
					<input
						type="range"
						min={0}
						max={150}
						step={1}
						onChange={(e) => {
							setTotalOb(Number.parseInt(e.target.value));
						}}
						value={totalOb}
					/>
					<input
						type="number"
						min={0}
						value={totalOb}
						onChange={(e) => {
							setTotalOb(Number.parseInt(e.target.value));
						}}
						onFocus={(e) => e.target.select()}
					/>
				</div>
			</div>
			<div>
				{(faldrin as Character).weapons.map((weapon) => (
					<button
						type="button"
						key={weapon.short}
						onClick={() => {
							setTotalOb(weapon.bonuses.total);
						}}
					>
						{weapon.short}
						<br />({weapon.bonuses.total})
					</button>
				))}
			</div>
			<div>
				<span>Remaining OB:</span> <span>{Math.round(remainingOb)}</span>
				<button
					type="button"
					onClick={() => {
						rollWeapon();
					}}
				>
					Roll OB
				</button>
			</div>
			{output && (
				<DiceRollOverlay
					value={output}
					clear={() => setOutput(null)}
					rollCrit={rollCrit}
				/>
			)}
		</main>
	);
};

export default OBPage;

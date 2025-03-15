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
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon
			fixedWidth={true}
			// biome-ignore lint/complexity/useLiteralKeys: <explanation>
			icon={byPrefixAndName.fas["calculator"]}
		/>
		OB Calc
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
	const [movement, setMovement] = useState<number>(15);
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
			<div className="text-center w-full mb-4">
				<div className="mb-4 text-xl font-semibold">Attack</div>
				<div className="flex w-full justify-center text-2xl gap-12 font-bold">
					<span>{open}</span> {open !== closed && <span>{closed}</span>}
				</div>
				{rollVals[0].total <= 4 && (
					<span className="text-red-500 font-black">FUMBLE</span>
				)}
				<div className="text-sm font-mono text-base-content/30 dark:text-base-100/30  flex items-center justify-center gap-2">
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
					<div className="text-center w-full mb-4">
						<div className="mb-4 text-xl font-semibold">Crit</div>
						<div className="flex w-full justify-center text-2xl gap-12 font-bold">
							<span>{open}</span> {open !== closed && <span>{closed}</span>}
						</div>
						<div className="text-sm font-mono text-base-content/30 dark:text-base-100/30 flex items-center justify-center gap-2">
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
		<main className="p-4 flex flex-col h-full gap-4 ">
			<div className="flex items-center justify-center grow flex-col gap-2">
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Base Movement Rate</label>
				<div className="flex gap-2 items-center w-full">
					<input
						type="range"
						min={0}
						step={5}
						max={150}
						onChange={(e) => {
							setMovementRate(Number.parseInt(e.target.value));
						}}
						value={movementRate}
						className="range flex-grow"
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
						className="input input-bordered focus-within:input-primary w-1/4 dark:bg-slate-700"
					/>
				</div>
			</div>
			<div className="flex items-center justify-center grow flex-col gap-2 w-full">
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Movement</label>
				<div className="flex gap-2 items-center w-full">
					<input
						type="range"
						min={0}
						step={5}
						max={movementRate}
						onChange={(e) => {
							setMovement(Number.parseInt(e.target.value));
						}}
						value={movement}
						className="range flex-grow"
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
						className="input input-bordered focus-within:input-primary w-1/4 dark:bg-slate-700"
					/>
				</div>
			</div>
			<div className="flex items-center justify-center grow flex-col gap-2">
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label>Total OB</label>
				<div className="flex gap-2 items-center w-full">
					<input
						type="range"
						min={0}
						max={150}
						step={1}
						onChange={(e) => {
							setTotalOb(Number.parseInt(e.target.value));
						}}
						value={totalOb}
						className="range flex-grow"
					/>
					<input
						type="number"
						min={0}
						value={totalOb}
						onChange={(e) => {
							setTotalOb(Number.parseInt(e.target.value));
						}}
						onFocus={(e) => e.target.select()}
						className="input input-bordered focus-within:input-primary w-1/4 dark:bg-slate-700"
					/>
				</div>
			</div>
			<div className="w-full shrink flex gap-2">
				{(faldrin as Character).weapons.map((weapon) => (
					<button
						type="button"
						key={weapon.short}
						className="btn btn-primary btn-outline flex-1"
						onClick={() => {
							setTotalOb(weapon.bonuses.total);
						}}
					>
						{weapon.short}
						<br />({weapon.bonuses.total})
					</button>
				))}
			</div>
			<div className="flex items-center justify-center grow flex-col gap-2">
				<span>Remaining OB:</span>{" "}
				<span className="text-3xl">{Math.round(remainingOb)}</span>
				<button
					type="button"
					className="btn btn-primary"
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

import type React from "react";
import { useEffect, useState } from "react";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useApp } from "../../contexts/AppContext";
import { useRPG } from "../../contexts/RPGContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import type { Character } from "../../content/characterList";
import classNames from "classnames";
import { rollDice } from "../../helpers/dice";
import DiceRollOverlay from "../../components/DiceRollOverlay";

export const faldrinTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["hammer-war"]}
		/>
		{/* Faldrin Skills */}
	</span>
);

const Faldrin = () => {
	const [output, setOutput] = useState<React.ReactNode | null>(null);
	const {
		characters: { faldrin },
	} = useRPG();
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: faldrinTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/faldrin", label: faldrinTitle });
	}, []);

	type StatKey =
		| "co"
		| "sd"
		| "ag"
		| "me"
		| "re"
		| "st"
		| "qu"
		| "pr"
		| "in"
		| "em";

	const rollStat = (stat: string) => {
		const rollVals = rollDice();
		const statKey = stat.toLowerCase() as StatKey;
		const statVal = (faldrin as Character).stats[statKey].total;

		const open = rollVals.reduce((acc, val) => acc + val.total, 0) + statVal;
		const closed = rollVals[0].total + statVal;
		setOutput(
			<div className="text-center w-full mb-4">
				<div className="mb-4 text-xl font-semibold">{stat.toUpperCase()}</div>
				<div className="flex w-full justify-center text-2xl gap-12 font-bold">
					<span>{open}</span> {open !== closed && <span>{closed}</span>}
				</div>
				{rollVals[0].total <= 4 && (
					<span className="text-red-500 font-black">FUMBLE</span>
				)}
				<div className="text-sm font-mono flex items-center justify-center gap-2">
					(
					{rollVals.map((roll, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={i}>
							[{roll.dPercentile},{roll.d10}]<strong>{roll.total}</strong>
						</span>
					))}
					<span>
						<strong>
							{statVal > 0 && "+"}
							{statVal}
						</strong>
					</span>
					)
				</div>
			</div>,
		);
	};

	const rollSkill = (skillName: string) => {
		const rollVals = rollDice();
		const skillVal =
			((faldrin as Character)?.skills || []).find(
				(skill) => skill.name === skillName,
			)?.total || 0;

		const open = rollVals.reduce((acc, val) => acc + val.total, 0) + skillVal;
		const closed = rollVals[0].total + skillVal;
		setOutput(
			<div className="text-center w-full mb-4">
				<div className="mb-4 text-xl font-semibold">{skillName}</div>
				<div className="flex w-full justify-center text-2xl gap-12 font-bold">
					<span>{open}</span> {open !== closed && <span>{closed}</span>}
				</div>
				{rollVals[0].total <= 4 && (
					<span className="text-red-500 font-black">FUMBLE</span>
				)}
				<div className="text-sm font-mono flex items-center justify-center gap-2 text-base-content/40">
					(
					{rollVals.map((roll, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={i}>
							[{roll.dPercentile},{roll.d10}]<strong>{roll.total}</strong>
						</span>
					))}
					<span>
						<strong>
							{skillVal > 0 && "+"}
							{skillVal}
						</strong>
					</span>
					)
				</div>
			</div>,
		);
	};

	const roll = () => {
		const rollVals = rollDice();
		console.log(rollVals);

		const open = rollVals.reduce((acc, val) => acc + val.total, 0);
		const closed = rollVals[0].total;
		setOutput(
			<div className="text-center w-full mb-4">
				<div className="mb-4 text-xl font-semibold">D100</div>
				<div className="flex w-full justify-center text-2xl gap-12 font-bold">
					<span>{open}</span> {open !== closed && <span>{closed}</span>}
				</div>
				{rollVals[0].total <= 4 && (
					<span className="text-red-500 font-black">FUMBLE</span>
				)}
				<div className="text-sm font-mono flex items-center justify-center gap-2">
					(
					{rollVals.map((roll, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={i}>
							[{roll.dPercentile},{roll.d10}]<strong>{roll.total}</strong>
						</span>
					))}
					)
				</div>
			</div>,
		);
	};

	return (
		<>
			<main className="flex flex-col w-full h-auto">
				<div className="flex flex-col w-full gap-4 p-4">
					<h2 className="text-2xl font-bold">Roll Dice</h2>
					<div>
						<button
							className="btn btn-sm btn-primary btn-block"
							type="button"
							onClick={() => roll()}
						>
							Roll
						</button>
					</div>
					<h2 className="text-2xl font-bold">Roll Stats</h2>
					<div className="grid grid-flow-col grid-cols-5 grid-rows-2 gap-4">
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("CO")}
						>
							CO
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("SD")}
						>
							SD
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("AG")}
						>
							AG
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("ME")}
						>
							ME
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("RE")}
						>
							RE
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("ST")}
						>
							ST
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("QU")}
						>
							QU
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("PR")}
						>
							PR
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("IN")}
						>
							IN
						</button>
						<button
							className="btn btn-sm btn-primary btn-outline"
							type="button"
							onClick={() => rollStat("EM")}
						>
							EM
						</button>
					</div>
					<h2 className="text-2xl font-bold">Roll Skills</h2>
					<div className="grid grid-flow-row grid-cols-2 gap-4 pb-4">
						{((faldrin as Character)?.skills || [])
							.filter((skill) => skill.button)
							.map((skill) => (
								<button
									key={skill.name}
									className={classNames("btn btn-sm btn-primary btn-outline", {
										"col-span-2": skill.name === "General Perception",
									})}
									type="button"
									onClick={() => rollSkill(skill.name)}
								>
									{skill.name}
								</button>
							))}
					</div>
				</div>
				{output && (
					<DiceRollOverlay value={output} clear={() => setOutput(null)} />
				)}
			</main>
		</>
	);
};

export default Faldrin;

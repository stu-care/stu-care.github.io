import type React from "react";
import { useEffect, useState } from "react";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useApp } from "../../contexts/AppContext";
import { useRPG } from "../../contexts/RPGContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import type { Character } from "../../content/characterList";
import { rollDice } from "../../helpers/dice";
import DiceRollOverlay from "../../components/DiceRollOverlay";

export const faldrinTitle = (
	<span className="flex items-center gap-1 w-max">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["hammer-war"]}
		/>
		Faldrin
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
			<div>
				<div>{stat.toUpperCase()}</div>
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
			<div>
				<div>{skillName}</div>
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
			<div>
				<div>D100</div>
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
					)
				</div>
			</div>,
		);
	};

	return (
		<>
			<main>
				<div>
					<h2>Roll Dice</h2>
					<div>
						<button type="button" onClick={() => roll()}>
							Roll
						</button>
					</div>
					<h2>Roll Stats</h2>
					<div>
						<button type="button" onClick={() => rollStat("CO")}>
							CO
						</button>
						<button type="button" onClick={() => rollStat("SD")}>
							SD
						</button>
						<button type="button" onClick={() => rollStat("AG")}>
							AG
						</button>
						<button type="button" onClick={() => rollStat("ME")}>
							ME
						</button>
						<button type="button" onClick={() => rollStat("RE")}>
							RE
						</button>
						<button type="button" onClick={() => rollStat("ST")}>
							ST
						</button>
						<button type="button" onClick={() => rollStat("QU")}>
							QU
						</button>
						<button type="button" onClick={() => rollStat("PR")}>
							PR
						</button>
						<button type="button" onClick={() => rollStat("IN")}>
							IN
						</button>
						<button type="button" onClick={() => rollStat("EM")}>
							EM
						</button>
					</div>
					<h2>Roll Skills</h2>
					<div>
						{((faldrin as Character)?.skills || [])
							.filter((skill) => skill.button)
							.map((skill) => (
								<button
									key={skill.name}
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

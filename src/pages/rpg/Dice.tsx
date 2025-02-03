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

export const diceTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["dice-d10"]} />
		Dice Check
	</span>
);

const Dice = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const [d10, setD10] = useState<{ [key: number]: number }>({});
	const [dPerc, setDPerc] = useState<{ [key: number]: number }>({});
	const [totalRolls, setTotalRolls] = useState<number>(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: diceTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/faldrin", label: diceTitle });

		rollAll();
	}, []);

	const rollAll = () => {
		const tempD10: { [key: number]: number } = {};
		const tempDPerc: { [key: number]: number } = {};
		setTotalRolls(0);

		for (let i = 0; i < 1000000; i++) {
			const rolls = rollDice();

			setTotalRolls((prev) => prev + rolls.length);

			for (const roll of rolls) {
				if (tempD10[roll.d10]) {
					tempD10[roll.d10] += 1;
				} else {
					tempD10[roll.d10] = 1;
				}

				if (tempDPerc[roll.dPercentile]) {
					tempDPerc[roll.dPercentile] += 1;
				} else {
					tempDPerc[roll.dPercentile] = 1;
				}
			}
		}

		setD10(tempD10);
		setDPerc(tempDPerc);
	};

	return (
		<>
			<main className="relative p-4 grid grid-flow-row auto-rows-fr h-full gap-4 ">
				<div className="flex items-center justify-center h-full flex-col gap-2">
					<div className="w-full h-[220px] p-2 grid grid-flow-col items-center gap-1">
						{Object.keys(d10).map((key) => (
							<div
								key={key}
								className={classNames(
									"bg-gradient-to-t from-lima-500 to-lima-600  rounded-md flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500",
								)}
								style={{
									height: `${d10[key as unknown as number] / 20 - 5100}px`,
								}}
							>
								<span className="-rotate-90 dark:text-base-content bottom-12 absolute overflow-hidden">
									{((d10[key as unknown as number] / totalRolls) * 100).toFixed(
										2,
									)}
									%
								</span>

								<span className="-rotate-90 overflow-hidden absolute top-4 text-white/50 text-sm">
									{`${d10[key as unknown as number]}`.slice(0, 3)}k
								</span>

								<span className="font-black dark:text-base-content overflow-hidden absolute bottom-0">
									{key}
								</span>
							</div>
						))}
					</div>
					<h2 className="text-xl font-bold">d10</h2>

					<div className="w-full h-[220px] p-2 grid grid-flow-col items-center gap-1">
						{Object.keys(dPerc).map((key) => (
							<div
								key={key}
								className={classNames(
									"bg-gradient-to-t from-lima-500 to-lima-600 rounded-md flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500",
								)}
								style={{
									height: `${dPerc[key as unknown as number] / 20 - 5100}px`,
								}}
							>
								<span className="-rotate-90 overflow-hidden bottom-12 absolute dark:text-base-content">
									{(
										(dPerc[key as unknown as number] / totalRolls) *
										100
									).toFixed(2)}
									%
								</span>

								<span className="-rotate-90 overflow-hidden absolute top-4 text-white/50 text-sm">
									{`${dPerc[key as unknown as number]}`.slice(0, 3)}k
								</span>

								<span className="font-black dark:text-base-content overflow-hidden absolute bottom-0">
									{key === "0" ? "00" : key}
								</span>
							</div>
						))}
					</div>
					<h2 className="text-xl font-bold">dPercentile</h2>
					<div className="flex grow items-center justify-center w-full">
						<button
							type="button"
							className="btn btn-primary btn-block"
							onClick={rollAll}
						>
							Re Roll
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Dice;

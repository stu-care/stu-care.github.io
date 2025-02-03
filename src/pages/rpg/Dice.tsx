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
		Dice
	</span>
);

const Dice = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const [d10, setD10] = useState<{ [key: number]: number }>({});
	const [dPerc, setDPerc] = useState<{ [key: number]: number }>({});

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

		const tempD10: { [key: number]: number } = {};
		const tempDPerc: { [key: number]: number } = {};

		for (let i = 0; i < 1000000; i++) {
			const rolls = rollDice();

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
	}, []);

	return (
		<>
			<main className="relative flex flex-col w-full h-auto">
				<div className="flex flex-col w-full gap-4 p-4">
					{/* display the outputs of d10 and dPerc as pie charts */}
					<div className="flex flex-col gap-4">
						{/* <div className="flex flex-col">
							{Object.keys(d10).map((key) => (
								<div
                                key={key}
                                className={classNames(
                                    "flex items-center justify-between w-full",
                                    {
                                        "bg-base-300 dark:bg-corduroy-800":
                                        Number.parseInt(key) % 2 === 0,
										},
                                        )}
                                        >
                                        <span className="text-lg font-semibold">{key}</span>
                                        <span className="text-lg ">{d10[key]}</span>
                                        </div>
                                        ))}
                                        </div> */}
						<div className="w-full h-[260px] p-2 grid grid-flow-col items-end gap-1">
							{Object.keys(d10).map((key) => (
								<div
									key={key}
									className={classNames(
										"bg-gradient-to-t from-lima-500 to-lima-600  flex flex-col items-center justify-center overflow-hidden relative",
									)}
									style={{
										height: `${d10[key as unknown as number] / 20 - 5050}px`,
									}}
								>
									<span className="-rotate-90 overflow-hidden">
										{((d10[key as unknown as number] / 1000000) * 100).toFixed(
											2,
										)}
										%
									</span>

									<span className="-rotate-90 overflow-hidden absolute top-6 text-white/50 text-sm">
										{d10[key as unknown as number]}
									</span>

									<span className="font-semibold overflow-hidden absolute bottom-0">
										{key}
									</span>
								</div>
							))}
						</div>
						<h2 className="text-2xl font-bold">d10</h2>
					</div>

					<div className="flex flex-col gap-4">
						{/* <div className="flex flex-col">
							{Object.keys(dPerc).map((key) => (
								<div
                                key={key}
                                className={classNames(
                                    "flex items-center justify-between w-full",
                                    {
                                        "bg-base-300 dark:bg-corduroy-800":
                                        Number.parseInt(key) % 20 === 0,
										},
                                        )}
                                        >
                                        <span className="text-lg font-semibold">{key}</span>
                                        <span className="text-lg">{dPerc[key]}</span>
                                        </div>
                                        ))}
                                        </div> */}
						<div className="w-full h-[260px] p-2 grid grid-flow-col items-end gap-1">
							{Object.keys(dPerc).map((key) => (
								<div
									key={key}
									className={classNames(
										"bg-gradient-to-t from-lima-500 to-lima-600 flex flex-col items-center justify-center overflow-hidden relative",
									)}
									style={{
										height: `${dPerc[key as unknown as number] / 20 - 5050}px`,
									}}
								>
									<span className="-rotate-90 overflow-hidden">
										{(
											(dPerc[key as unknown as number] / 1000000) *
											100
										).toFixed(2)}
										%
									</span>

									<span className="-rotate-90 overflow-hidden absolute top-6 text-white/50 text-sm">
										{dPerc[key as unknown as number]}
									</span>

									<span className="font-semibold overflow-hidden absolute bottom-0">
										{key === "0" ? "00" : key}
									</span>
								</div>
							))}
						</div>
						<h2 className="text-2xl font-bold">dPercentile</h2>
					</div>
				</div>
			</main>
		</>
	);
};

export default Dice;

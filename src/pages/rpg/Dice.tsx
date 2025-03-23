import { useEffect, useState } from "react";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import classNames from "classnames";
import { rollDice } from "../../helpers/dice";

export const diceTitle = (
	<span className="flex items-center gap-1 w-max">
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

		for (let i = 0; i < 100000; i++) {
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
			<main className="w-full">
				<div className="flex flex-col sm:flex-row gap-4">
					<section className="flex-1">
						<h2 className="text-xl mt-4 mb-8">
							d10, <small>({totalRolls} Rolls)</small>
						</h2>
						<div className="text-center w-full mb-4">
							{Object.keys(d10).map((key) => (
								<div key={key}>
									<span className="w-12 inline-block">{key}</span>
									<span className="w-40 inline-block">
										{(
											(d10[key as unknown as number] / totalRolls) *
											100
										).toFixed(2)}
										%
									</span>
									<span>{`${d10[key as unknown as number]}`}</span>
								</div>
							))}
						</div>
					</section>
					<section className="flex-1">
						<h2 className="text-xl mt-4 mb-8">
							dPercentile, <small>({totalRolls} Rolls)</small>
						</h2>
						<div className="text-center w-full mb-4">
							{Object.keys(dPerc).map((key) => (
								<div key={key}>
									<span className="w-12 inline-block">
										{key === "0" ? "00" : key}
									</span>
									<span className="w-40 inline-block">
										{(
											(dPerc[key as unknown as number] / totalRolls) *
											100
										).toFixed(2)}
										%
									</span>
									<span>{`${dPerc[key as unknown as number]}`}</span>
								</div>
							))}
						</div>
					</section>
				</div>
				<div className="w-full text-center">
					<button
						type="button"
						className="btn btn-primary btn-outline"
						onClick={rollAll}
					>
						Re Roll
					</button>
				</div>
			</main>
		</>
	);
};

export default Dice;

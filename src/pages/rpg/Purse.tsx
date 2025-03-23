import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useApp } from "../../contexts/AppContext";
import { useRPG } from "../../contexts/RPGContext";
import {
	type CoinDenominations,
	type Rates,
	currency,
} from "../../helpers/currency";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const purseTitle = (
	<span className="flex items-center gap-1 w-max">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["sack-dollar"]}
		/>
		Purse
	</span>
);

const denominations: CoinDenominations[] = [
	"mp",
	"gp",
	"sp",
	"bp",
	"cp",
	"tp",
	"ip",
];

const valuesInIp: { [key in CoinDenominations]: number } = {
	mp: 10000000,
	gp: 100000,
	sp: 10000,
	bp: 1000,
	cp: 100,
	tp: 10,
	ip: 1,
};

const PursePage = () => {
	const { purse } = useRPG();
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const [total, setTotal] = useState<number>(0);
	const [totalCurrency, setTotalCurrency] = useState<keyof Rates>("gp");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: purseTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/purse", label: purseTitle });
	}, []);

	const handleCurrencyChange = (abbr: CoinDenominations, value: number) => {
		purse.set({ ...purse.values, [abbr]: value || 0 });
	};

	useEffect(() => {
		const totalInGold = Object.entries(purse.values).reduce(
			(total, [abbr, amount]) => {
				return (
					total + currency.convert(amount, abbr as CoinDenominations, "gp")
				);
			},
			0,
		);
		setTotal(
			currency.convert(totalInGold, "gp", totalCurrency as CoinDenominations),
		);
	}, [purse.values, totalCurrency]);

	const handleTransferFromHigherDenomination = (
		currentDenomination: CoinDenominations,
	) => {
		const index = denominations.indexOf(currentDenomination);
		if (index <= 0) {
			return; // No higher denomination exists
		}

		let higherIndex = index - 1;
		let found = false;

		while (higherIndex >= 0) {
			const higherDenomination = denominations[higherIndex];

			if (purse.values[higherDenomination] >= 1) {
				const amountToAdd = currency.convert(
					1,
					higherDenomination,
					currentDenomination,
				);
				purse.set({
					...purse.values,
					[higherDenomination]: purse.values[higherDenomination] - 1,
					[currentDenomination]:
						purse.values[currentDenomination] + amountToAdd,
				});
				found = true;
				break;
			}
			higherIndex--;
		}

		if (!found) {
			return;
		}
	};

	const tidyUp = () => {
		let totalInIp = 0;
		for (const denomination of denominations) {
			totalInIp += purse.values[denomination] * valuesInIp[denomination];
		}

		const newPurse: { [key in CoinDenominations]: number } = {
			mp: 0,
			gp: 0,
			sp: 0,
			bp: 0,
			cp: 0,
			tp: 0,
			ip: 0,
		};

		for (const denomination of denominations) {
			const amount = Math.floor(totalInIp / valuesInIp[denomination]);
			totalInIp -= amount * valuesInIp[denomination];
			newPurse[denomination] = amount;
		}

		purse.set(newPurse);
	};

	return (
		<main>
			<div>
				{denominations.map((abbr, index) => (
					<div key={abbr}>
						<input
							id={abbr}
							type="number"
							value={purse.values[abbr]}
							onChange={(e) =>
								handleCurrencyChange(abbr, Number.parseInt(e.target.value))
							}
							min="0"
							step={1}
						/>
						<label htmlFor={abbr}>{abbr}</label>
						{index > 0 && (
							<button
								type="button"
								onClick={() => handleTransferFromHigherDenomination(abbr)}
							>
								<FontAwesomeIcon
									fixedWidth={true}
									icon={byPrefixAndName.fas.plus}
								/>
							</button>
						)}
					</div>
				))}
			</div>
			<div>
				{total.toLocaleString()} {totalCurrency}
			</div>
			<div>
				<select
					value={totalCurrency}
					onChange={(e) =>
						setTotalCurrency(e.target.value as CoinDenominations)
					}
				>
					{denominations.map((abbr) => (
						<option key={abbr} value={abbr}>
							{abbr} - {currency.abbreviations[abbr]}
						</option>
					))}
				</select>
			</div>
			<div>
				<button type="button" onClick={tidyUp}>
					Tidy Up
				</button>
			</div>
		</main>
	);
};

export default PursePage;

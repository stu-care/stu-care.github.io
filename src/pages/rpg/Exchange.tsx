import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { type FormEventHandler, useEffect, useState } from "react";
import { useApp } from "../../contexts/AppContext";
import { type Rates, currency } from "../../helpers/currency";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const exchangeTitle = (
	<span className="flex items-center gap-1 w-max">
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas.coins} />
		Exchange
	</span>
);

const ExchangePage = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [amountValue, setAmountValue] = useState<number>(0);
	const [fromCurrency, setFromCurrency] = useState<keyof Rates | "-1">("-1");
	const [toCurrency, setToCurrency] = useState<keyof Rates | "-1">("-1");
	const [result, setResult] = useState<string>("");

	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: exchangeTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/exchange", label: exchangeTitle });
	}, []);

	const handleChange = (value: string) => {
		setInputValue(value);

		// Split the input value by spaces
		const parts = value.trim().split(/\s+/);

		// Extract the amount and currency parts
		const amount = parts[0];
		let from = "";
		let to = "";

		setAmountValue(Number.parseFloat(amount));

		// Check if the first part contains the amount and currency together (e.g., "100cp")
		if (/^\d+(\.\d+)?[a-zA-Z]+$/.test(amount)) {
			from = amount.slice(-2);

			if (parts.length >= 2) {
				if (parts[1] === "to") {
					to = parts[2];
				} else {
					to = parts[1];
				}
			}
		} else if (parts.length > 1) {
			from = parts[1];

			if (parts.length >= 3) {
				if (parts[2] === "to") {
					to = parts[3];
				} else {
					to = parts[2];
				}
			}
		}

		// Validate and set the fromCurrency if it's valid
		if (Object.keys(currency.abbreviations).includes(from)) {
			setFromCurrency(from as keyof Rates);
		}

		// Validate and set the toCurrency if it's valid
		if (Object.keys(currency.abbreviations).includes(to)) {
			setToCurrency(to as keyof Rates);
		}
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		handleConvert();
	};

	const handleConvert = () => {
		try {
			const conversionResult = currency.convert(
				amountValue,
				fromCurrency as keyof Rates,
				toCurrency as keyof Rates,
			);

			if (Number.isNaN(conversionResult)) {
				setResult("");
				return;
			}

			setResult(`${conversionResult.toLocaleString()} ${toCurrency}`);
		} catch (error) {
			setResult("");
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		handleConvert();
	}, [fromCurrency, toCurrency, inputValue]);

	return (
		<main>
			<div>
				<div>Currency</div>
				<div>Rate</div>
				{Object.entries(currency.rates).map(([abbreviation, rate]) => (
					<React.Fragment key={abbreviation}>
						<div>
							{currency.abbreviations[abbreviation as keyof Rates]} (
							{abbreviation})
						</div>
						<div>
							{/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
							{rate["bp"].toLocaleString()} bp
						</div>
					</React.Fragment>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Enter value (e.g., 10sp)"
				/>
				<div>
					<select
						value={fromCurrency}
						onChange={(e) => setFromCurrency(e.target.value as keyof Rates)}
					>
						<option value="-1" disabled>
							Select From
						</option>
						{currency.abbreviations &&
							Object.entries(currency.abbreviations).map(([abbr, name]) => (
								<option key={abbr} value={abbr}>
									{name.split(" ")[0]} ({abbr})
								</option>
							))}
						{/* <option value="mp">Mithril (mp)</option>
                        <option value="gp">Gold (gp)</option>
                        <option value="sp">Silver (sp)</option>
                        <option value="bp">Bronze (bp)</option>
                        <option value="cp">Copper (cp)</option>
                        <option value="tp">Tin (tp)</option>
                        <option value="ip">Iron (ip)</option> */}
					</select>
					<span>to</span>
					<select
						value={toCurrency}
						onChange={(e) => setToCurrency(e.target.value as keyof Rates)}
					>
						<option value="-1" disabled>
							Select To
						</option>
						{currency.abbreviations &&
							Object.entries(currency.abbreviations).map(([abbr, name]) => (
								<option key={abbr} value={abbr}>
									{name.split(" ")[0]} ({abbr})
								</option>
							))}
						{/* <option value="mp">Mithril (mp)</option>
                        <option value="gp">Gold (gp)</option>
                        <option value="sp">Silver (sp)</option>
                        <option value="bp">Bronze (bp)</option>
                        <option value="cp">Copper (cp)</option>
                        <option value="tp">Tin (tp)</option>
                        <option value="ip">Iron (ip)</option> */}
					</select>
				</div>
				<button type="submit">Convert</button>
			</form>
			<div>{result}</div>
		</main>
	);
};

export default ExchangePage;

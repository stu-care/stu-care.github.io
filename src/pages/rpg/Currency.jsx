import React, { useEffect, useState } from "react";
import { currency } from "../../helpers/currency";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";

export const currencyTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["coins"]}
        />
        Currency
    </span>
);

const CurrencyPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [amountValue, setAmountValue] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("-1");
    const [toCurrency, setToCurrency] = useState("-1");
    const [result, setResult] = useState("");

    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: currencyTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add("/home", homeTitle);
        breadcrumbs.add("/rpg", rpgTitle);
        breadcrumbs.add("/rpg/currency", currencyTitle);
    }, []);

    const handleChange = (value) => {
        setInputValue(value);

        // Split the input value by spaces
        const parts = value.trim().split(/\s+/);

        // Extract the amount and currency parts
        const amount = parts[0];
        let from = "";
        let to = "";

        setAmountValue(parseFloat(amount));

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
            setFromCurrency(from);
        }

        // Validate and set the toCurrency if it's valid
        if (Object.keys(currency.abbreviations).includes(to)) {
            setToCurrency(to);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleConvert();
    };

    const handleConvert = () => {
        try {
            const conversionResult = currency.convert(
                amountValue,
                fromCurrency,
                toCurrency
            );

            if (isNaN(conversionResult)) {
                setResult("");
                return;
            }

            setResult(`${conversionResult.toLocaleString()} ${toCurrency}`);
        } catch (error) {
            setResult("");
        }
    };

    useEffect(() => {
        handleConvert();
    }, [fromCurrency, toCurrency, inputValue]);

    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4 font-[Grenze]">
            <div className="grid grid-cols-2 *:py-1 *:px-2 border border-corduroy-200 border-b-0">
                <div className="text-lg border-b border-b-corduroy-200 bg-corduroy-200">
                    Currency
                </div>
                <div className="text-lg border-b border-b-corduroy-200 bg-corduroy-200">
                    Rate
                </div>
                {Object.entries(currency.rates).map(([abbreviation, rate]) => (
                    <React.Fragment key={abbreviation}>
                        <div className="border-r border-r-corduroy-200 border-b border-b-corduroy-200">
                            {currency.abbreviations[abbreviation]} (
                            {abbreviation})
                        </div>
                        <div className="border-b border-b-corduroy-200">
                            {rate["bp"].toLocaleString()} bp
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <form
                className="relative grid grid-flow-row auto-rows-auto gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Enter value (e.g., 10sp)"
                    className="input w-full focus-within:input-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                    autoFocus={true}
                />
                <div className="flex items-center justify-between gap-4">
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="select flex-grow focus-within:select-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                    >
                        <option value="-1" disabled>
                            Select From
                        </option>
                        <option value="mp">Mithril (mp)</option>
                        <option value="gp">Gold (gp)</option>
                        <option value="sp">Silver (sp)</option>
                        <option value="bp">Bronze (bp)</option>
                        <option value="cp">Copper (cp)</option>
                        <option value="tp">Tin (tp)</option>
                        <option value="ip">Iron (ip)</option>
                    </select>
                    <span className="p-2">to</span>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="select flex-grow focus-within:select-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                    >
                        <option value="-1" disabled>
                            Select To
                        </option>
                        <option value="mp">Mithril (mp)</option>
                        <option value="gp">Gold (gp)</option>
                        <option value="sp">Silver (sp)</option>
                        <option value="bp">Bronze (bp)</option>
                        <option value="cp">Copper (cp)</option>
                        <option value="tp">Tin (tp)</option>
                        <option value="ip">Iron (ip)</option>
                    </select>
                </div>
                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Convert
                </button>
            </form>
            <div className="flex items-center justify-center py-8 text-3xl">
                {result}
            </div>
        </main>
    );
};

export default CurrencyPage;

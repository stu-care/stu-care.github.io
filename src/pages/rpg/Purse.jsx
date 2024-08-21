import React, { useEffect, useState } from "react";
import { currency } from "../../helpers/currency";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { useRPG } from "../../contexts/RPGContext";

export const purseTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["sack-dollar"]}
        />
        Purse
    </span>
);

const PursePage = () => {
    const { purse } = useRPG();
    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    const [total, setTotal] = useState(0);
    const [totalCurrency, setTotalCurrency] = useState("gp");

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: purseTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add("/home", homeTitle);
        breadcrumbs.add("/rpg", rpgTitle);
        breadcrumbs.add("/rpg/purse", purseTitle);
    }, []);

    const handleCurrencyChange = (abbr, value) => {
        console.log(abbr, value);
        purse.set({ ...purse.values, [abbr]: parseInt(value) || 0 });
    };

    useEffect(() => {
        console.log(purse.values, totalCurrency);
        const totalInGold = Object.entries(purse.values).reduce(
            (total, [abbr, amount]) => {
                return total + currency.convert(amount, abbr, "gp");
            },
            0
        );
        setTotal(currency.convert(totalInGold, "gp", totalCurrency));
    }, [purse, totalCurrency]);

    return (
        <main className="relative p-4 flex flex-col h-full font-[Grenze]">
            <div className="grid grid-flow-row auto-rows-auto gap-4">
                {Object.entries(currency.abbreviations).map(([abbr, name]) => (
                    <div key={abbr} className="flex flex-row">
                        <input
                            id={abbr}
                            type="number"
                            value={purse.values[abbr]}
                            onChange={(e) =>
                                handleCurrencyChange(abbr, e.target.value)
                            }
                            className="flex-grow input w-full focus-within:input-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                            min="0"
                            step={1}
                        />
                        <label
                            htmlFor={abbr}
                            className="flex bg-corduroy-200 dark:text-base-content w-12 items-center justify-center"
                        >
                            {abbr}
                        </label>
                    </div>
                ))}
            </div>
            <div className="flex flex-grow items-center justify-center text-3xl">
                {total.toLocaleString()} {totalCurrency}
            </div>
            <div className="">
                <select
                    value={totalCurrency}
                    onChange={(e) => setTotalCurrency(e.target.value)}
                    className="select select-sm w-full focus-within:select-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                >
                    {Object.entries(currency.abbreviations).map(
                        ([abbr, name]) => (
                            <option key={abbr} value={abbr}>
                                {abbr} - {name}
                            </option>
                        )
                    )}
                </select>
            </div>
        </main>
    );
};

export default PursePage;

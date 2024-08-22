import React, { useEffect, useState } from "react";
import { currency, Rates } from "../../helpers/currency";
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

    const [total, setTotal] = useState<number>(0);
    const [totalCurrency, setTotalCurrency] = useState<keyof Rates>("gp");

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

    const handleCurrencyChange = (abbr: string, value: number) => {
        console.log(abbr, value);
        purse.set({ ...purse.values, [abbr]: value || 0 });
    };

    useEffect(() => {
        console.log(purse.values, totalCurrency);
        const totalInGold = Object.entries(purse.values).reduce(
            (total, [abbr, amount]) => {
                return (
                    total + currency.convert(amount, abbr as keyof Rates, "gp")
                );
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
                            value={purse.values[abbr as keyof Rates]}
                            onChange={(e) =>
                                handleCurrencyChange(
                                    abbr,
                                    parseInt(e.target.value)
                                )
                            }
                            className="flex-grow input w-full input-bordered focus-within:input-primary"
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
                    onChange={(e) =>
                        setTotalCurrency(e.target.value as keyof Rates)
                    }
                    className="select w-full select-bordered focus-within:select-primary"
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

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
        purse.set({ ...purse.values, [abbr]: parseInt(value) || 0 });
    };

    const calculateTotal = () => {
        const totalInGold = Object.entries(purse.values).reduce(
            (total, [abbr, amount]) => {
                return total + currency.convert(amount, abbr, "gp");
            },
            0
        );
        return currency.convert(totalInGold, "gp", totalCurrency);
    };

    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4 font-[Grenze]">
            {Object.entries(currency.abbreviations).map(([abbr, name]) => (
                <div key={abbr} className="flex items-center gap-2">
                    <label htmlFor={abbr} className="w-32">
                        {name}:
                    </label>
                    <input
                        id={abbr}
                        type="number"
                        value={purse.values[abbr]}
                        onChange={(e) =>
                            handleCurrencyChange(abbr, e.target.value)
                        }
                        className="border rounded px-2 py-1 w-24"
                        min="0"
                    />
                </div>
            ))}

            <div className="mt-4 flex items-center gap-2">
                <strong>Total value in: </strong>
                <select
                    value={totalCurrency}
                    onChange={(e) => setTotalCurrency(e.target.value)}
                    className="border rounded px-2 py-1"
                >
                    {Object.entries(currency.abbreviations).map(
                        ([abbr, name]) => (
                            <option key={abbr} value={abbr}>
                                {name}
                            </option>
                        )
                    )}
                </select>
            </div>
            <div>
                <strong>Total: </strong>
                {calculateTotal().toFixed(2)} {totalCurrency}
            </div>
        </main>
    );
};

export default PursePage;

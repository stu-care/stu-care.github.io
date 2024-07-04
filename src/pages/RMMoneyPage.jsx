import React, { useEffect, useState } from "react";
import { useGame } from "../contexts/GameContext";
import { Button } from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

const RMMoneyPage = () => {
    const { currency } = useGame();
    const [inputValue, setInputValue] = useState("");
    const [amountValue, setAmountValue] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("-1");
    const [toCurrency, setToCurrency] = useState("-1");
    const [result, setResult] = useState("");

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
            setResult(`${conversionResult.toLocaleString()} ${toCurrency}`);
        } catch (error) {
            setResult("");
        }
    };

    useEffect(() => {
        handleConvert();
    }, [fromCurrency, toCurrency, inputValue]);

    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4">
            <h2>Currency Converter</h2>
            <div className="grid grid-cols-2 *:py-1 *:px-2 border border-slate-500 rounded">
                <div className="font-gg text-lg border-b border-b-slate-500 bg-slate-500">
                    Currency
                </div>
                <div className="font-gg text-lg border-b border-b-slate-500 bg-slate-500">
                    Rate
                </div>
                {Object.entries(currency.rates).map(([abbreviation, rate]) => (
                    <React.Fragment key={abbreviation}>
                        <div className="border-r border-r-slate-500 border-b border-b-slate-600">
                            {currency.abbreviations[abbreviation]} (
                            {abbreviation})
                        </div>
                        <div className="border-b border-b-slate-600">
                            {rate.toLocaleString()} bp
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <form
                className="relative grid grid-flow-row auto-rows-auto gap-4"
                onSubmit={handleSubmit}
            >
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Enter value (e.g., 10sp)"
                    classNames=""
                />
                <div className="flex items-center justify-between gap-4">
                    <Select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        classNames="flex-grow"
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
                    </Select>
                    <span className="p-2">to</span>
                    <Select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        classNames="flex-grow"
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
                    </Select>
                </div>
                <Button type="submit" onClick={handleSubmit}>
                    Convert
                </Button>
            </form>

            {result && (
                <div className="flex items-center justify-center font-g text-3xl h-full grow">
                    {result}
                </div>
            )}
        </main>
    );
};

export default RMMoneyPage;

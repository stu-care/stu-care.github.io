export type CoinDenominations = "mp" | "gp" | "sp" | "bp" | "cp" | "tp" | "ip";

export type Currency = {
    rates: Rates,
    abbreviations: { [key in CoinDenominations]: string },
    parse: (value: string) => [number, keyof Rates],
    convert: (amount: number, from: keyof Rates, to: keyof Rates) => number,
}

export type Rates = {
    [key in CoinDenominations]: { [key in CoinDenominations]: number }
}

export const currency: Currency = {
    rates: {
        mp: { mp: 1, gp: 100, sp: 1000, bp: 10000, cp: 100000, tp: 1000000, ip: 10000000 },
        gp: { mp: 0.01, gp: 1, sp: 10, bp: 100, cp: 1000, tp: 10000, ip: 100000 },
        sp: { mp: 0.001, gp: 0.1, sp: 1, bp: 10, cp: 100, tp: 1000, ip: 10000 },
        bp: { mp: 0.0001, gp: 0.01, sp: 0.1, bp: 1, cp: 10, tp: 100, ip: 1000 },
        cp: { mp: 0.00001, gp: 0.001, sp: 0.01, bp: 0.1, cp: 1, tp: 10, ip: 100 },
        tp: { mp: 0.000001, gp: 0.0001, sp: 0.001, bp: 0.01, cp: 0.1, tp: 1, ip: 10 },
        ip: { mp: 0.0000001, gp: 0.00001, sp: 0.0001, bp: 0.001, cp: 0.01, tp: 0.1, ip: 1 },
    },
    abbreviations: {
        mp: "Mithril Piece",
        gp: "Gold Piece",
        sp: "Silver Piece",
        bp: "Bronze Piece",
        cp: "Copper Piece",
        tp: "Tin Piece",
        ip: "Iron Piece",
    },
    parse: function (value: string): [number, keyof Rates] {
        const amount = parseFloat(value);
        const abbr: keyof Rates = value.replace(`${amount}`, "").trim() as keyof Rates;

        if (isNaN(amount) || !this.rates[abbr]) {
            throw new Error("Invalid value abbreviation");
        }

        return [amount, abbr];
    },
    convert: function (amount: number, from: keyof Rates, to: keyof Rates) {
        if (!this.rates[from] || !this.rates[to]) {
            throw new Error("Invalid currency abbreviation");
        }

        const convertedAmount = amount * this.rates[from][to];

        return convertedAmount;
    },
};

export const initCurrency = () => {
    String.prototype.to = function (denomination: keyof Rates) {
        const [amount, abbr] = currency.parse(this as string);
        const convertedAmount = currency.convert(amount, abbr, denomination);
        return `${convertedAmount}${denomination}`;
    };
}
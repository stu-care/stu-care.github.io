import type React from "react";
import { createContext, useContext, useState } from "react";
import { type Characters, characterList } from "../content/characterList";
import type { CoinDenominations } from "../helpers/currency";
import useLocalStorage from "../hooks/useLocalStorage";

export type Purse = {
	[key in CoinDenominations]: number;
};

export interface IRPGContext {
	characters: Characters;
	reset: () => void;
	purse: {
		values: Purse;
		set: (values: Purse) => void;
		clear: () => void;
	};
}
export interface IRPGProvider {
	children: React.ReactNode;
}

export const defaultContext: IRPGContext = {
	characters: {},
	reset: () => {},
	purse: {
		values: {
			mp: 3,
			gp: 41,
			sp: 5,
			bp: 7,
			cp: 4,
			tp: 0,
			ip: 0,
		},
		set: () => {},
		clear: () => {},
	},
};

const RPGContext = createContext<IRPGContext>(defaultContext);

export const useRPG = () => useContext(RPGContext);

export const RPGProvider = ({ children }: IRPGProvider) => {
	const [characters, setCharacters, clearCharacters] =
		useLocalStorage<Characters>("rpg:characters", characterList);

	const [purse, setPurse, clearPurse] = useLocalStorage<Purse>("rpg:purse", {
		mp: 3,
		gp: 41,
		sp: 5,
		bp: 7,
		cp: 4,
		tp: 0,
		ip: 0,
	});

	const reset = () => {
		clearCharacters();
		clearPurse();
	};

	const value = {
		characters,
		reset,
		purse: {
			values: purse,
			set: setPurse,
			clear: clearPurse,
		},
	};

	return <RPGContext.Provider value={value}>{children}</RPGContext.Provider>;
};

import React, { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { characterList, Characters } from "../content/characterList";
import { CoinDenominations } from "../helpers/currency";

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
            mp: 0,
            gp: 0,
            sp: 0,
            bp: 0,
            cp: 0,
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
        mp: 0,
        gp: 0,
        sp: 0,
        bp: 0,
        cp: 0,
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

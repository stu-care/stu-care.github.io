import React, { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { characterList } from "../content/characterList";

const RPGContext = createContext();

export const useRPG = () => useContext(RPGContext);

export const RPGProvider = ({ children }) => {
    const [characters, setCharacters, clearCharacters] = useLocalStorage(
        "rpg:characters",
        characterList
    );

    const [purse, setPurse, clearPurse] = useLocalStorage("rpg:purse", {
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

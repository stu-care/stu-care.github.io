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
    const value = {
        characters,
    };

    return <RPGContext.Provider value={value}>{children}</RPGContext.Provider>;
};

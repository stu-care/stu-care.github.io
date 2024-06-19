import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import faldrinImgUrl from "../assets/faldrin.webp";
import elvenImgUrl from "../assets/elven.webp";

export const GameContext = createContext(undefined);

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGameContext must be used within an GameProvider");
    }
    return context;
};

const characterList = [
    {
        img: {
            src: faldrinImgUrl,
            type: "image/webp",
            alt: "Faldrin Hugmyndir",
        },
        character: {
            name: "Faldrin Hugmyndir",
            race: "Dwarf",
            profession: "Fighter",
        },
        stats: {
            co: {
                temp: 96,
                pot: 96,
                mod: 15,
                race: 15,
                misc: 15,
                total: 45,
                dp: 9,
            },
            sd: {
                temp: 82,
                pot: 82,
                mod: 5,
                race: 5,
                misc: 0,
                total: 10,
                dp: 7,
            },
            ag: {
                temp: 72,
                pot: 72,
                mod: 0,
                race: -5,
                misc: 5,
                total: 0,
                dp: 6,
            },
            me: {
                temp: 87,
                pot: 97,
                mod: 5,
                race: 0,
                misc: 0,
                total: 4,
                dp: 8,
            },
            re: {
                temp: 50,
                pot: 75,
                mod: 0,
                race: 0,
                misc: 0,
                total: 0,
                dp: 5,
            },
            st: { temp: 100, pot: 100, mod: 25, race: 5, misc: 10, total: 40 },
            qu: { temp: 95, pot: 95, mod: 15, race: -5, misc: 0, total: 10 },
            pr: { temp: 87, pot: 89, mod: 5, race: -10, misc: 0, total: -5 },
            in: { temp: 74, pot: 47, mod: 0, race: 0, misc: 0, total: 0 },
            em: { temp: 51, pot: 51, mod: 0, race: -10, misc: 0, total: -10 },
            ap: { temp: 16 },
        },
    },
    {
        img: {
            src: elvenImgUrl,
            type: "image/webp",
            alt: "Player 2",
        },
        character: {
            name: "Someone Else",
            race: "Elf",
            profession: "Ranger",
        },
        stats: {
            co: {
                temp: 96,
                pot: 96,
                mod: 15,
                race: 15,
                misc: 15,
                total: 45,
                dp: 9,
            },
            sd: {
                temp: 82,
                pot: 82,
                mod: 5,
                race: 5,
                misc: 0,
                total: 10,
                dp: 9,
            },
            ag: {
                temp: 72,
                pot: 72,
                mod: 0,
                race: -5,
                misc: 5,
                total: 0,
                dp: 9,
            },
            me: {
                temp: 87,
                pot: 97,
                mod: 5,
                race: 0,
                misc: 0,
                total: 4,
                dp: 9,
            },
            re: {
                temp: 50,
                pot: 75,
                mod: 0,
                race: 0,
                misc: 0,
                total: 0,
                dp: 9,
            },
            st: { temp: 100, pot: 100, mod: 25, race: 5, misc: 10, total: 40 },
            qu: { temp: 95, pot: 95, mod: 15, race: -5, misc: 0, total: 10 },
            pr: { temp: 87, pot: 89, mod: 5, race: -10, misc: 0, total: -5 },
            in: { temp: 74, pot: 47, mod: 0, race: 0, misc: 0, total: 0 },
            em: { temp: 51, pot: 51, mod: 0, race: -10, misc: 0, total: -10 },
            ap: { temp: 16 },
        },
    },
];

const scenario = {
    title: "The Battle for Rhakann",
    description: "lorem ipsum...",
    characters: characterList,
};

export const GameProvider = ({ children }) => {
    const [characters, setCharacters, clearCharacters] = useLocalStorage(
        "characters",
        characterList.map(({ character }) => character.name)
    );

    const [selectedCharacter, setSelectedCharacter, clearSelectedCharacter] =
        useLocalStorage("selectedCharacter", null);

    const selectCharacter = (characterName) => {
        setSelectedCharacter(
            characterList.find(
                ({ character }) => character.name === characterName
            )
        );
    };

    useEffect(() => {
        console.log("selectedCharacter:", selectedCharacter);
    }, [selectedCharacter]);

    return (
        <GameContext.Provider
            value={{
                characters,
                selectedCharacter,
                selectCharacter,
                scenario,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

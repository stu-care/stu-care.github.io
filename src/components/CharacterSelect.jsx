import React from "react";
import cx from "classnames";
import { useGame } from "../contexts/GameContext";
import { useApp } from "../contexts/AppContext";

const CharacterSelect = ({ classnames }) => {
    const { characters, selectedCharacter, selectCharacter } = useGame();
    const { menu } = useApp();

    const handleCharacterChange = (event) => {
        selectCharacter(event.target.value);
        menu.close();
    };

    return (
        <select
            value={selectedCharacter?.character.name || -1}
            onChange={handleCharacterChange}
            className={cx([classnames])}
        >
            <option disabled={true} value="-1">
                Select Character...
            </option>
            {characters.map((character, index) => (
                <option key={index} value={character}>
                    {character}
                </option>
            ))}
        </select>
    );
};

export default CharacterSelect;

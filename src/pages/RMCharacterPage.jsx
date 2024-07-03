import React from "react";
import { useGame } from "../contexts/GameContext";
import { renderModifier } from "../helpers/format";
import Markdown from "marked-react";

const RMCharacterPage = () => {
    const { selectedCharacter } = useGame();

    const { character, img, stats } = selectedCharacter ?? {};

    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4">
            {!selectedCharacter && (
                <p>Select a character from the home screen of the menu.</p>
            )}
            {selectedCharacter && (
                <section className="grid gap-4">
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="squircle w-auto aspect-square object-cover"
                    />
                    <h2 className="text-center">{character.name}</h2>
                    <hr className="border-slate-700" />
                    <div className="flex justify-between items-center px-4 text-lg">
                        <span className="font-semibold">{character.race}</span>
                        <span className="font-extralight">
                            {character.profession}
                        </span>
                    </div>
                    <hr className="border-slate-700" />
                    <div className="grid grid-flow-row auto-rows-fr font-medium text-center">
                        <h3>Stats</h3>
                        <div className="grid grid-flow-col auto-cols-fr gap-2">
                            <div>Stat</div>
                            <div>Temp</div>
                            <div>Pot</div>
                            <div>Mod</div>
                            <div>Race</div>
                            <div>Misc</div>
                            <div>Total</div>
                            <div>Dv Pts</div>
                        </div>
                        {Object.entries(stats).map(([key, value], index) => (
                            <div className="grid grid-flow-col auto-cols-fr gap-2 font-extralight text-center">
                                <div className="font-semibold">
                                    {key == "sd"
                                        ? key.toUpperCase()
                                        : key.charAt(0).toUpperCase() +
                                          key.slice(1)}
                                </div>
                                <div>{value.temp}</div>
                                <div>{value.pot}</div>
                                <div>{renderModifier(value.mod)}</div>
                                <div>{renderModifier(value.race)}</div>
                                <div>{renderModifier(value.misc)}</div>
                                <div>
                                    {renderModifier(
                                        value.mod + value.race + value.misc
                                    )}
                                </div>
                                <div>{renderModifier(value.dp)}</div>
                            </div>
                        ))}
                    </div>
                    <hr className="border-slate-700" />
                    <Markdown>{character.description}</Markdown>
                </section>
            )}
        </main>
    );
};

export default RMCharacterPage;

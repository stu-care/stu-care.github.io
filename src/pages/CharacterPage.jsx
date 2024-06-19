import React from "react";
import cx from "classnames";
import CharacterSelect from "../components/CharacterSelect";
import { useGame } from "../contexts/GameContext";
import "./RolemasterLandingPage.css";
import { renderModifier } from "../helpers/format";

const CharacterPage = () => {
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
                    <h2 className="text-2xl text-center leading-none font-semibold">
                        {character.name}
                    </h2>
                    <hr className="border-slate-700" />
                    <div className="flex justify-between items-center px-4 text-lg">
                        <span className="font-semibold">{character.race}</span>
                        <span className="font-extralight">
                            {character.profession}
                        </span>
                    </div>
                    <hr className="border-slate-700" />
                    <p>{character.description}</p>
                    <hr className="border-slate-700" />
                    <div className="grid grid-flow-row auto-rows-fr font-medium text-center">
                        <h4 className="text-xl">Stats</h4>
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
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis, ipsa iusto laudantium, iure aperiam quis
                        cumque eius corrupti repellat provident nihil architecto
                        quam natus id nemo voluptatibus! Doloremque, natus
                        quisquam!
                    </p>
                </section>
            )}
        </main>
    );
};

export default CharacterPage;

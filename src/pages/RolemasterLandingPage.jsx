import React from "react";
import cx from "classnames";
import CharacterSelect from "../components/CharacterSelect";
import { useGame } from "../contexts/GameContext";
import "./RolemasterLandingPage.css";
import { renderModifier } from "../helpers/format";
import Markdown from "marked-react";

const RolemasterLandingPage = () => {
    const { selectedCharacter, selectCharacter, scenario } = useGame();

    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4">
            <section className="grid gap-4">
                <h2 className="text-xl  font-semibold mb-2">
                    {scenario.title}
                </h2>
            </section>
            <hr className="border-slate-700" />
            <section className="grid gap-4">
                <h3 className="">Characters</h3>
                <div className="grid grid-flow-row auto-rows-fr gap-4">
                    {scenario.characters.map(
                        ({ img, character, stats }, index) => (
                            <div
                                key={index}
                                class="character-card gap-2"
                                onClick={() => selectCharacter(character.name)}
                            >
                                <div class="picture">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        type={img.type}
                                        className={cx([
                                            "w-28 h-28 object-cover transition-all duration-300 ease-in-out squircle hover:saturate-100",
                                            {
                                                "saturate-0":
                                                    character.name !==
                                                    selectedCharacter?.character
                                                        .name,
                                            },
                                        ])}
                                    />
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <h3>{character.name}</h3>
                                    </div>
                                    <div class="race flex flex-col items-end">
                                        <span className="font-light">
                                            {character.race}
                                        </span>
                                        <span className="text-sm font-light text-slate-400">
                                            {character.profession}
                                        </span>
                                    </div>
                                    <div class="stats text-xs self-end text-center">
                                        <div className="grid grid-flow-col auto-cols-fr font-semibold text-slate-50">
                                            <div title="Constitution">Co</div>
                                            <div title="Self Discipline">
                                                SD
                                            </div>
                                            <div title="Agility">Ag</div>
                                            <div title="Memory">Me</div>
                                            <div title="Reasoning">Re</div>
                                            <div title="Strength">St</div>
                                            <div title="Quickness">Qu</div>
                                            <div title="Presence">Pr</div>
                                            <div title="Intuition">In</div>
                                            <div title="Empathy">Em</div>
                                            <div title="Appearance">Ap</div>
                                        </div>
                                        <div className="grid grid-flow-col auto-cols-fr font-extralight">
                                            <div>{stats.co.temp}</div>
                                            <div>{stats.sd.temp}</div>
                                            <div>{stats.ag.temp}</div>
                                            <div>{stats.me.temp}</div>
                                            <div>{stats.re.temp}</div>
                                            <div>{stats.st.temp}</div>
                                            <div>{stats.qu.temp}</div>
                                            <div>{stats.pr.temp}</div>
                                            <div>{stats.in.temp}</div>
                                            <div>{stats.em.temp}</div>
                                            <div>{stats.ap.temp}</div>
                                        </div>
                                        <div className="grid grid-flow-col text-[0.66rem] auto-cols-fr font-extralight">
                                            <div>
                                                {renderModifier(stats.co.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.sd.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.ag.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.me.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.re.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.st.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.qu.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.pr.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.in.total)}
                                            </div>
                                            <div>
                                                {renderModifier(stats.em.total)}
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>
            <hr className="border-slate-700" />

            <section className="grid gap-4">
                <Markdown>{scenario.description}</Markdown>
            </section>
        </main>
    );
};

export default RolemasterLandingPage;

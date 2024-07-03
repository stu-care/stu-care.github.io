import React from "react";
import cx from "classnames";
import CharacterSelect from "../components/CharacterSelect";
import { useGame } from "../contexts/GameContext";
import "./RolemasterLandingPage.css";

const InfoPage = () => {
    const { selectedCharacter, selectCharacter, scenario } = useGame();

    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4">
            <h2>Useful Terms</h2>
            <div className="grid grid-flow-row auto-rows-auto px-2 gap-4">
                <h3>Stats</h3>
                <div className="grid grid-flow-row auto-rows-auto gap-4 px-2">
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Constitution
                            <small className="font-['Lato'] text-sm">
                                (Co)
                            </small>
                        </h4>
                        <p>
                            General health and well-being, resistance to
                            disease, and the ability to absorb more damage are
                            all reflected in a character's Constitution.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                health, stamina, endurance, physical resistance,
                                physique, damage resistance, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />

                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Self Discipline
                            <small className="font-['Lato'] text-sm">
                                (SD)
                            </small>
                        </h4>
                        <p>
                            The control of mind over body, the ability to push
                            harder in pursuit of some goal, or to draw upon the
                            inner reserves of strength inherent in any
                            individual.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                will, alignment, faith, mental strength orpower,
                                concentra- tion, selfcontrol, determination,
                                zeal, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Agility{" "}
                            <small className="font-['Lato'] text-sm">
                                (Ag)
                            </small>
                        </h4>
                        <p>
                            Manual Dexterity and litheness are the prime
                            components of this characteristic.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                dexterity, deftness, manual skill, adroitness,
                                maneuverability, stealth, dodging ability,
                                litheness, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Memory{" "}
                            <small className="font-['Lato'] text-sm">
                                (Me)
                            </small>
                        </h4>
                        <p>
                            The ability to retain what has previously been
                            encountered and learned. Note, in many instances it
                            may be necessary for the character to rely on the
                            player's memory, since that tends to be used
                            whenever it is advantageous anyway. Memory provides
                            a good basis for determining how much is retained of
                            the pre-adult period that the Gamemaster doesn't
                            have time to devise and describe in absolute detail
                            to each player.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                intelligence, wisdom, information capacity,
                                mental capacity, recall, retention, recognition,
                                etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Reasoning
                            <small className="font-['Lato'] text-sm">
                                (Re)
                            </small>
                        </h4>
                        <p>
                            Similar to intelligence: the ability to absorb,
                            comprehend, and categorize data for future use. It
                            also reflects the ability to take available
                            information and draw logical conclusions.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                intelligence, learning ability, study ability,
                                analysis rating, mental quickness, logic,
                                deductive capacity, wit, judgement, I.Q., etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Strength{" "}
                            <small className="font-['Lato'] text-sm">
                                (St)
                            </small>
                        </h4>
                        <p>
                            Not brute musculature, but the ability to use
                            existing muscles to their greatest advantage, thus
                            racial and sexual adjustments should be kept to a
                            minimum (if used at all).
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                power, might,force, stamina, endurance,
                                conditioning, physique, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Quickness
                            <small className="font-['Lato'] text-sm">
                                (Qu)
                            </small>
                        </h4>
                        <p>
                            Essentially a measure of reflexes and conscious
                            reaction time, this stat is often lumped with
                            several others as dexterity.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                agility, dexterity, speed, reaction ability,
                                readiness, dodging ability, litheness, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Presence{" "}
                            <small className="font-['Lato'] text-sm">
                                (Pr)
                            </small>
                        </h4>
                        <p>
                            Control of one's own mind, Courage, Bearing, Self
                            Esteem, Charisma, Outward Appearance and the ability
                            to use these to affect and control others are the
                            principal elements of a character's presence.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                appearance, level-headedness, panic resistance,
                                morale, psychic ability, selfcontrol, vanity,
                                perceived power, mental discipline, bardic
                                voice, charisma, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Intuition
                            <small className="font-['Lato'] text-sm">
                                (In)
                            </small>
                        </h4>
                        <p>
                            A combination of luck, genius, precognition, ESP,
                            and the favor of the gods is embodied in this stat.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                wisdom, luck, talent, reactive ability (mental),
                                guessing ability, psychic ability, insight,
                                clairvoyance, inspiration, perception,
                                pre-sentiment, etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Empathy
                            <small className="font-['Lato'] text-sm">
                                (Em)
                            </small>
                        </h4>
                        <p>
                            The relationship of the character to the
                            all-pervading force that is common to all things
                            natural and is the basis of most things
                            supernatural.
                        </p>
                        <p>
                            Also referred to as:{" "}
                            <em>
                                emotional capacity, judgement, alignment,
                                wisdom, mana, magical prowess, bardic voice,
                                etc.
                            </em>
                        </p>
                    </div>
                    <hr className="border-slate-700" />
                    <div>
                        <h4 className="flex gap-2 items-baseline justify-between">
                            Appearance
                            <small className="font-['Lato'] text-sm">
                                (Ap)
                            </small>
                        </h4>
                        <p>
                            A value (01-00) which gives a general idea of the
                            character's exterior look (e.g., an 01 or 02
                            Appearance would indicate a really ugly person,
                            while a 99 or 00 would indicate a very handsome
                            character). Appearance can be determined either by
                            rolling 1-100 (not open-ended) or by rolling 1-100
                            and adding the charac- ter's Presence bonus (with a
                            maximum result of 100 and a minimum result of 20
                            less than the character's Presence stat). Appearance
                            can rise or drop during play due to circumstances
                            (e.g., scars, diseases, increases in Presence,
                            etc.). This is a very subjective rating and the
                            Gamemaster should treat it as a general guideline
                            during play.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default InfoPage;

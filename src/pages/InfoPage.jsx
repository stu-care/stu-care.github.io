import React from "react";
import cx from "classnames";
import CharacterSelect from "../components/CharacterSelect";
import { useGame } from "../contexts/GameContext";
import "./RolemasterLandingPage.css";

const InfoPage = () => {
    const { selectedCharacter, selectCharacter, scenario } = useGame();

    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4">
            <h2 className="text-xl bg-slate-800 sticky shadow shadow-slate-800 h-8 top-0 pt-2 font-semibold mb-2 z-[5]">
                Useful Terms
            </h2>
            <h3 className="text-lg bg-slate-800 sticky shadow shadow-slate-800 top-8 h-8 font-semibold mb-2 z-[4]">
                Stats
            </h3>
            <div className="grid grid-flow-row auto-rows-auto gap-4 ">
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Constitution <span>(CO)</span>
                    </h4>
                    <p className="z-[2]">
                        General health and well-being, resistance to disease,
                        and the ability to absorb more damage are all reflected
                        in a character's Constitution.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            health, stamina, endurance, physical resistance,
                            physique, damage resistance, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Self Discipline <span>(SD)</span>
                    </h4>
                    <p className="z-[2]">
                        The control of mind over body, the ability to push
                        harder in pursuit of some goal, or to draw upon the
                        inner reserves of strength inherent in any individual.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            will, alignment, faith, mental strength orpower,
                            concentra- tion, selfcontrol, determination, zeal,
                            etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Agility <span>(AG)</span>
                    </h4>
                    <p className="z-[2]">
                        Manual Dexterity and litheness are the prime components
                        of this characteristic.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            dexterity, deftness, manual skill, adroitness,
                            maneuverability, stealth, dodging ability,
                            litheness, etc.
                        </em>
                    </p>
                </div>

                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Memory <span>(ME)</span>
                    </h4>
                    <p className="z-[2]">
                        The ability to retain what has previously been
                        encountered and learned. Note, in many instances it may
                        be necessary for the character to rely on the player's
                        memory, since that tends to be used whenever it is
                        advantageous anyway. Memory provides a good basis for
                        determining how much is retained of the pre-adult period
                        that the Gamemaster doesn't have time to devise and
                        describe in absolute detail to each player.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            intelligence, wisdom, information capacity, mental
                            capacity, recall, retention, recognition, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Reasoning <span>(RE)</span>
                    </h4>
                    <p className="z-[2]">
                        Similar to intelligence: the ability to absorb,
                        comprehend, and categorize data for future use. It also
                        reflects the ability to take available information and
                        draw logical conclusions.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            intelligence, learning ability, study ability,
                            analysis rating, mental quickness, logic, deductive
                            capacity, wit, judgement, I.Q., etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Strength <span>(ST)</span>
                    </h4>
                    <p className="z-[2]">
                        Not brute musculature, but the ability to use existing
                        muscles to their greatest advantage, thus racial and
                        sexual adjustments should be kept to a minimum (if used
                        at all).
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            power, might,force, stamina, endurance,
                            conditioning, physique, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Quickness <span>(QU)</span>
                    </h4>
                    <p className="z-[2]">
                        Essentially a measure of reflexes and conscious reaction
                        time, this stat is often lumped with several others as
                        dexterity.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            agility, dexterity, speed, reaction ability,
                            readiness, dodging ability, litheness, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Presence <span>(PR)</span>
                    </h4>
                    <p className="z-[2]">
                        Control of one's own mind, Courage, Bearing, Self
                        Esteem, Charisma, Outward Appearance and the ability to
                        use these to affect and control others are the principal
                        elements of a character's presence.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            appearance, level-headedness, panic resistance,
                            morale, psychic ability, selfcontrol, vanity,
                            perceived power, mental discipline, bardic voice,
                            charisma, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Intuition <span>(IN)</span>
                    </h4>
                    <p className="z-[2]">
                        A combination of luck, genius, precognition, ESP, and
                        the favor of the gods is embodied in this stat.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            wisdom, luck, talent, reactive ability (mental),
                            guessing ability, psychic ability, insight,
                            clairvoyance, inspiration, perception,
                            pre-sentiment, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Empathy <span>(EM)</span>
                    </h4>
                    <p className="z-[2]">
                        The relationship of the character to the all-pervading
                        force that is common to all things natural and is the
                        basis of most things supernatural.
                    </p>
                    <p className="z-[2]">
                        Also referred to as:
                        <em>
                            emotional capacity, judgement, alignment, wisdom,
                            mana, magical prowess, bardic voice, etc.
                        </em>
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold bg-slate-800 sticky shadow shadow-slate-800 h-8 top-16 z-[3]">
                        Appearance <span>(AP)</span>
                    </h4>
                    <p className="z-[2]">
                        A value (01-00) which gives a general idea of the
                        character's exterior look (e.g., an 01 or 02 Appearance
                        would indicate a really ugly person, while a 99 or 00
                        would indicate a very handsome character). Appearance
                        can be determined either by rolling 1-100 (not
                        open-ended) or by rolling 1-100 and adding the charac-
                        ter's Presence bonus (with a maximum result of 100 and a
                        minimum result of 20 less than the character's Presence
                        stat). Appearance can rise or drop during play due to
                        circumstances (e.g., scars, diseases, increases in
                        Presence, etc.). This is a very subjective rating and
                        the Gamemaster should treat it as a general guideline
                        during play.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default InfoPage;

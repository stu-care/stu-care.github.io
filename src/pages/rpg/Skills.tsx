import React, { ChangeEventHandler, useEffect, useState } from "react";
import Markdown from "marked-react";
import { Skill, skillsList } from "../../content/skillList";
import { useApp } from "../../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { useRPG } from "../../contexts/RPGContext";
import { Character } from "../../content/characterList";

export const skillsTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["bolt"]} />
        Skills
    </span>
);

const SkillsPage = () => {
    const [filterValue, setFilterValue] = useState<string>("");
    const {
        characters: { faldrin },
    } = useRPG();

    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: skillsTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add({ url: "/home", label: homeTitle });
        breadcrumbs.add({ url: "/rpg", label: rpgTitle });
        breadcrumbs.add({ url: "/rpg/skills", label: skillsTitle });
    }, []);

    const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setFilterValue(e.target.value);
    };

    const calculateSkillModifier = (skill: Skill) => {
        if (skill.stats) {
            const values = skill.stats.map((statGroup) => {
                let statValue = 0;

                statGroup.forEach((stat) => {
                    statValue += (faldrin as Character).stats[
                        stat.toLowerCase() as keyof Character["stats"]
                    ]?.total;
                });
                return Math.round(statValue / statGroup.length);
            });
            return values.map((value, index) => {
                return (
                    value &&
                    !isNaN(value) && (
                        <span key={index}>
                            {value >= 0 ? "+" : ""}
                            {value}
                        </span>
                    )
                );
            });
        }
    };

    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4 font-[Grenze]">
            <div className="grid grid-flow-row gap-1">
                <label className="uppercase">Filter</label>
                <input
                    type="text"
                    className="input w-full input-bordered focus-within:input-primary"
                    value={filterValue}
                    onChange={handleFilterChange}
                    autoFocus={true}
                    placeholder="Skill Name (e.g. Fauna Lore)"
                />
            </div>
            {skillsList
                .filter(
                    (skill) =>
                        skill.name
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        skill.type
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        skill.description
                            .toLowerCase()
                            .includes(filterValue.toLowerCase())
                )
                .map((skill, index) => {
                    return (
                        <div key={index} className="grid gap-4 max-w-full">
                            <div className="border-2 border-corduroy-200 dark:border-corduroy-700">
                                <div className="p-2 bg-corduroy-200 dark:bg-corduroy-700">
                                    <h3 className="flex gap-2 items-baseline justify-between">
                                        <span className="flex gap-4 items-baseline">
                                            {skill.name}
                                        </span>
                                        <span className="text-base">
                                            {skill.stats && (
                                                <span>
                                                    {skill.stats
                                                        ?.map((stat) =>
                                                            stat.join("/")
                                                        )
                                                        .join(" or ")}
                                                </span>
                                            )}
                                        </span>
                                    </h3>
                                </div>
                                <div className="p-2 grid grid-flow-row auto-rows-auto gap-4 text-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="font-light text-xs">
                                            <div>{skill.type}</div>
                                        </div>
                                        <div className="flex justify-end items-start gap-4">
                                            {calculateSkillModifier(skill)}
                                        </div>
                                    </div>
                                    <div className="tracking-wide grid grid-flow-row auto-rows-auto gap-2">
                                        <Markdown>{skill.description}</Markdown>
                                    </div>
                                    <div className="flex justify-start items-baseline gap-2 text-left text-xs text-corduroy-300">
                                        {skill.ref ?? "-"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </main>
    );
};

export default SkillsPage;

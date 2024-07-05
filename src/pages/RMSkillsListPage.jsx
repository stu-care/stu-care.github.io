import React, { useState } from "react";
import { useGame } from "../contexts/GameContext";
import Input from "../components/Input";
import Markdown from "marked-react";

const RNSkillsListPage = () => {
    const [filterValue, setFilterValue] = useState("");

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const { skillsList } = useGame();
    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4">
            <h2>Skills List</h2>
            <div className="grid grid-flow-row gap-1">
                <label className="uppercase font-g text-sm text-slate-400">
                    Filter
                </label>
                <Input
                    value={filterValue}
                    onChange={handleFilterChange}
                    placeholder="Skill Name (e.g. Fauna Lore)"
                />
            </div>
            {skillsList
                .filter((skill) =>
                    skill.name.toLowerCase().includes(filterValue.toLowerCase())
                )
                .map((skill, index) => {
                    return (
                        <div key={index} className="grid gap-4 max-w-full">
                            <div className="rounded-lg border-2 border-slate-500">
                                <div className="p-2 bg-slate-500">
                                    <h3 className="flex gap-2 items-baseline justify-between">
                                        <span className="flex gap-4 items-baseline">
                                            {skill.name}
                                        </span>
                                        <span className="font-g text-base">
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
                                    <div className="flex justify-end items-start">
                                        <div className="font-g font-light">
                                            <div>{skill.type}</div>
                                        </div>
                                    </div>
                                    <div className="tracking-wide grid grid-flow-row auto-rows-auto gap-2">
                                        <Markdown>{skill.description}</Markdown>
                                    </div>
                                    <div className="flex justify-start items-baseline gap-2 text-left text-xs text-slate-500">
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

export default RNSkillsListPage;

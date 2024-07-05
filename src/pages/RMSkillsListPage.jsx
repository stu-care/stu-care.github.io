import React, { useState } from "react";
import { useGame } from "../contexts/GameContext";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import Select from "../components/Select";

const RNSkillsListPage = () => {
    const [filterValue, setFilterValue] = useState("");
    const [type, setType] = useState("");

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
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
                    placeholder="Filter (e.g. 'eC6' or 'Ingest')"
                />
            </div>
            <div className="grid grid-flow-row gap-1">
                <label className="uppercase font-g text-sm text-slate-400">
                    Type
                </label>
                <Select onChange={handleTypeChange}>
                    <option value="">All</option>
                    <option value="herb">Herb</option>
                    <option value="poison">Poision</option>
                </Select>
            </div>
            {skillsList.map((skill, index) => {
                return (
                    <div key={index} className="grid gap-4">
                        {JSON.stringify(skill, undefined, 2)}
                    </div>
                );
            })}
        </main>
    );
};

export default RNSkillsListPage;

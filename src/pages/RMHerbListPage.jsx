import React, { useState } from "react";
import { useGame } from "../contexts/GameContext";
import Input from "../components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import Select from "../components/Select";

// {
//     finding: "mC4",
//     herb: "FurryOak Acorn",
//     formPrep: "Nut/Ingest",
//     cost: "3bp",
//     effect: "1 days nutrition",
//     af: 0,
//     lvl: 1,
//     environment: "Coniferous Forest (C) (Nåleskov)",
//     temperate: "Mild Temperate (m) (Syd/mellem europa)",
//     type: "herb",
// },

const RMHerbListPage = () => {
    const [filterValue, setFilterValue] = useState("");
    const [type, setType] = useState("");

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const { herbList, currency } = useGame();
    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4">
            <h2>Herb List</h2>
            <div className="grid grid-flow-row gap-2">
                <label>Filter</label>
                <Input
                    value={filterValue}
                    onChange={handleFilterChange}
                    placeholder="Filter (e.g. 'eC6' or 'Ingest')"
                />
            </div>
            <div className="grid grid-flow-row gap-2">
                <label>Type</label>
                <Select onChange={handleTypeChange}>
                    <option value="">All</option>
                    <option value="herb">Herb</option>
                    <option value="poison">Poision</option>
                </Select>
            </div>
            {herbList
                .filter((herb) => (type ? herb.type === type : true))
                .filter((herb) => {
                    if (!filterValue) return true;
                    return (
                        herb.herb
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        herb.finding
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        herb.formPrep
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        herb.effect
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        herb.environment
                            .toLowerCase()
                            .includes(filterValue.toLowerCase()) ||
                        herb.temperate
                            .toLowerCase()
                            .includes(filterValue.toLowerCase())
                    );
                })
                .map((herb, index) => {
                    return (
                        <div key={index} className="grid gap-4">
                            <div className="rounded-lg border-2 border-slate-500">
                                <div className="p-2 bg-slate-500">
                                    <h3 className="flex gap-4 items-baseline justify-between">
                                        <span className="flex gap-4 items-baseline">
                                            {herb.type === "herb" ? (
                                                <FontAwesomeIcon
                                                    icon={
                                                        byPrefixAndName.fas[
                                                            "seedling"
                                                        ]
                                                    }
                                                    fixedWidth={true}
                                                    className="text-base"
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={
                                                        byPrefixAndName.fas[
                                                            "flask-round-poison"
                                                        ]
                                                    }
                                                    fixedWidth={true}
                                                    className="text-base"
                                                />
                                            )}
                                            {herb.herb}
                                        </span>
                                        <span className="font-g text-base">
                                            {herb.finding}
                                        </span>
                                    </h3>
                                </div>
                                <div className="p-2 grid grid-flow-row auto-rows-auto gap-4 text-sm">
                                    <div className="flex justify-between items-start">
                                        <div className="font-g">
                                            <div>{herb.temperate}</div>
                                            <div>{herb.environment}</div>
                                        </div>
                                        <div>{herb.formPrep}</div>
                                    </div>
                                    <div className="text-center">
                                        {herb.effect}
                                    </div>
                                    <div className="grid grid-flow-col auto-cols-fr text-center">
                                        <div>
                                            <div className="font-bold font-g">
                                                AF
                                            </div>
                                            <div>{herb.af ?? "-"}</div>
                                        </div>
                                        <div>
                                            <div className="font-bold font-g">
                                                Lvl
                                            </div>
                                            <div>{herb.lvl ?? "-"}</div>
                                        </div>
                                        <div>
                                            <div className="font-bold font-g">
                                                Cost
                                            </div>
                                            <div>
                                                {herb.cost} (
                                                {`${herb.cost}`.to("bp")})
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </main>
    );
};

export default RMHerbListPage;

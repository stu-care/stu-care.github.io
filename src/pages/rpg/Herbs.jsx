import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { useApp } from "../../contexts/AppContext";
import { rpgTitle } from "../RPG";
import { homeTitle } from "../Home";
import { herbList } from "../../content/herbList";

export const herbsTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["seedling"]}
        />
        Herbs
    </span>
);

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

const HerbsPage = () => {
    const [filterValue, setFilterValue] = useState("");
    const [type, setType] = useState("");

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: herbsTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add("/home", homeTitle);
        breadcrumbs.add("/rpg", rpgTitle);
        breadcrumbs.add("/rpg/herbs", herbsTitle);
    }, []);

    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4 font-[Grenze]">
            <div className="grid grid-flow-row gap-1">
                <label className="uppercase text-corduroy-400 text-sm">
                    Filter
                </label>
                <input
                    value={filterValue}
                    onChange={handleFilterChange}
                    placeholder="Filter (e.g. 'eC6' or 'Ingest')"
                    className="input w-full focus-within:input-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                    autoFocus={true}
                />
            </div>
            <div className="grid grid-flow-row gap-1">
                <label className="uppercase text-corduroy-400 text-sm">
                    Type
                </label>
                <select
                    onChange={handleTypeChange}
                    className="select w-full focus-within:select-primary border-l-4 text-base-content border-l-base-300 focus-within:border-l-primary"
                >
                    <option value="">All</option>
                    <option value="herb">Herb</option>
                    <option value="poison">Poision</option>
                </select>
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
                        <div key={index} className="grid gap-4 max-w-full">
                            <div className="border-2 border-corduroy-200">
                                <div className="p-2 bg-corduroy-200">
                                    <h3 className="flex gap-2 items-baseline justify-between">
                                        <span className="flex gap-4 items-baseline">
                                            {herb.type === "herb" ? (
                                                <FontAwesomeIcon
                                                    icon={
                                                        byPrefixAndName.fas[
                                                            "seedling"
                                                        ]
                                                    }
                                                    fixedWidth={true}
                                                    className="text-base text-corduroy-400"
                                                />
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={
                                                        byPrefixAndName.fas[
                                                            "flask-round-poison"
                                                        ]
                                                    }
                                                    fixedWidth={true}
                                                    className="text-base text-corduroy-400"
                                                />
                                            )}
                                            {herb.herb}
                                        </span>
                                        <span className="text-base">
                                            {herb.finding}
                                        </span>
                                    </h3>
                                </div>
                                <div className="p-2 grid grid-flow-row auto-rows-auto gap-4 text-sm group ">
                                    <div className="flex justify-between items-start">
                                        <div className="font-light text-xs text-base-content">
                                            <div>{herb.temperate}</div>
                                            <div>{herb.environment}</div>
                                        </div>
                                        <div className="text-base-content">
                                            {herb.formPrep}
                                        </div>
                                    </div>
                                    <div className="text-center p-4 tracking-wide text-base-content/0 group-hover:text-base-content transition-colors duration-300">
                                        {herb.effect}
                                    </div>
                                    <div className="grid grid-flow-col auto-cols-fr text-center">
                                        <div>
                                            <div className="font-bold">AF</div>
                                            <div className=" text-base-content/0 group-hover:text-base-content transition-colors duration-300">
                                                {herb.af ?? "-"}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Lvl</div>
                                            <div className=" text-base-content/0 group-hover:text-base-content transition-colors duration-300">
                                                {herb.lvl ?? "-"}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Cost
                                            </div>
                                            <div className=" text-base-content/0 hover:text-base-content transition-colors duration-300">
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

export default HerbsPage;

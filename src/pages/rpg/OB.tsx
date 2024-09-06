import React, { useEffect, useState } from "react";
import { Currency } from "../../helpers/currency";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { useRPG } from "../../contexts/RPGContext";
import { Character } from "../../content/characterList";

export const obTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["calculator"]}
        />
        OB Calc
    </span>
);

const OBPage = () => {
    const {
        characters: { faldrin },
    } = useRPG();
    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    const [movementRate, setMovementRate] = useState<number>(
        (faldrin as Character)?.bmr + (faldrin as Character)?.stats.qu.total
    );
    const [movement, setMovement] = useState<number>(0);
    const [totalOb, setTotalOb] = useState<number>(
        (faldrin as Character)?.weapons[0]?.bonuses.total ?? 0
    );
    const [remainingOb, setRemainingOb] = useState<number>(0);

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: obTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add({ url: "/home", label: homeTitle });
        breadcrumbs.add({ url: "/rpg", label: rpgTitle });
        breadcrumbs.add({ url: "/rpg/ob", label: obTitle });
    }, []);

    useEffect(() => {
        setRemainingOb(totalOb * (1 - movement / movementRate));
    }, [movementRate, movement, totalOb]);

    return (
        <main className="relative p-4 grid grid-flow-row auto-rows-fr h-full gap-4 font-[Grenze]">
            <div className="flex items-center justify-center h-full flex-col gap-2">
                <label>Base Movement Rate</label>
                <input
                    type="number"
                    min={0}
                    max={100}
                    value={movementRate}
                    onChange={(e) => {
                        setMovementRate(parseInt(e.target.value));
                    }}
                    step={5}
                    className="input w-full input-bordered focus-within:input-primary"
                />
            </div>
            <div className="flex items-center justify-center h-full flex-col gap-2 w-full">
                <label>Movement</label>
                <div className="flex gap-2 items-center w-full">
                    <input
                        type="range"
                        min={0}
                        step={5}
                        max={movementRate}
                        onChange={(e) => {
                            setMovement(parseInt(e.target.value));
                        }}
                        value={movement}
                        className="range flex-grow"
                    />
                    <input
                        type="number"
                        min={0}
                        max={movementRate}
                        step={5}
                        onChange={(e) => {
                            setMovement(parseInt(e.target.value));
                        }}
                        value={movement}
                        className="input input-bordered focus-within:input-primary"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center h-full flex-col gap-2">
                <label>Total OB</label>
                <input
                    type="number"
                    min={0}
                    value={totalOb}
                    onChange={(e) => {
                        setTotalOb(parseInt(e.target.value));
                    }}
                    className="input w-full input-bordered focus-within:input-primary"
                />
                <div className="w-full flex gap-2">
                    {(faldrin as Character).weapons.map((weapon, index) => (
                        <button
                            className="btn btn-primary btn-outline flex-1"
                            onClick={() => {
                                setTotalOb(weapon.bonuses.total);
                            }}
                        >
                            {weapon.short} ({weapon.bonuses.total})
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center h-full flex-col gap-2">
                <span>Remaining OB:</span>{" "}
                <span className="text-3xl">{Math.round(remainingOb)}</span>
            </div>
        </main>
    );
};

export default OBPage;

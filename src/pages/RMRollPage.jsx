import React, { useState } from "react";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import RollsChart from "../components/RollsChart";
import { useGame } from "../contexts/GameContext";

const RMRollPage = () => {
    const { rollsHistory, setRollsHistory } = useGame();
    const [hasRolled, setHasRolled] = useState(false);
    const [rollResults, setRollResults] = useState(
        rollsHistory[rollsHistory.length - 1] ?? null
    );

    const roll = () => {
        const results = [
            Math.floor(Math.random() * 10) * 10,
            Math.floor(Math.random() * 10),
        ];
        setRollsHistory([...rollsHistory, results]);
        setRollResults(results);
        setHasRolled(true);
    };

    return (
        <main className="relative flex flex-col items-center justify-around h-full p-4 gap-4">
            {hasRolled || rollResults ? (
                <>
                    <div className="flex justify-around items-center gap-4">
                        <div className="relative">
                            <FontAwesomeIcon
                                className="text-slate-950"
                                icon={byPrefixAndName.fad["dice-d10"]}
                                fixedWidth={true}
                                size="8x"
                            />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold rounded-full tracking-wider text-slate-950 bg-slate-700 flex items-center justify-center h-20 w-16">
                                {rollResults[0].toString().padStart(2, "0")}
                            </span>
                        </div>

                        <div className="relative">
                            <FontAwesomeIcon
                                className="text-slate-400"
                                icon={byPrefixAndName.fad["dice-d10"]}
                                fixedWidth={true}
                                size="8x"
                            />
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold rounded-full bg-slate-700 text-slate-400  flex items-center justify-center h-20 w-16">
                                {rollResults[1]}
                            </span>
                        </div>
                    </div>
                    <Button onClick={roll} size="xl" colour={"primary"}>
                        Roll
                    </Button>
                    <RollsChart />
                    <div className=" w-full text-center grid grid-cols-10">
                        {rollsHistory
                            .slice(-10)
                            .reverse()
                            .map((result, index) => (
                                <span
                                    key={index}
                                    className="first:text-slate-400 first:bg-slate-950 bg-slate-800  text-slate-500 h-8 w-8 select-none flex items-center justify-center first:font-bold rounded-full"
                                >
                                    {result.reduce((a, b) => a + b)}
                                </span>
                            ))}
                    </div>
                </>
            ) : (
                <Button onClick={roll} size="xl" colour={"primary"}>
                    Roll
                </Button>
            )}
        </main>
    );
};

export default RMRollPage;

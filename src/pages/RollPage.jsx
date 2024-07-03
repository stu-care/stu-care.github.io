import React from "react";
import { Button } from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";

const RollPage = () => {
    const [hasRolled, setHasRolled] = React.useState(false);
    const [rollResults, setRollResults] = React.useState([0, 0]);

    const [history, setHistory] = React.useState([]);

    const roll = () => {
        console.log("Rolling...");
        const results = [
            Math.floor(Math.random() * 10) * 10,
            Math.floor(Math.random() * 10),
        ];
        setHistory((prev) => [...prev, results.reduce((a, b) => a + b)]);
        setRollResults(results);
        setHasRolled(true);
    };

    return (
        <main className="relative flex flex-col items-center justify-around h-full p-4 gap-4">
            {hasRolled ? (
                <>
                    <div className="relative">
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["dice-d10"]}
                            fixedWidth={true}
                            size="8x"
                        />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl pb-3 rounded-full leading-none bg-slate-800 flex items-center justify-center h-20 w-20 border-slate-200 border-4">
                            {rollResults[0]}
                        </span>
                    </div>

                    <div className="relative">
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["dice-d10"]}
                            fixedWidth={true}
                            size="8x"
                        />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl pb-3 rounded-full bg-slate-800  flex items-center justify-center h-20 w-20 border-slate-200 border-4">
                            {rollResults[1]}
                        </span>
                    </div>
                    <Button
                        onClick={roll}
                        size="xl"
                        pill={true}
                        colour={"secondary"}
                    >
                        ReRoll
                    </Button>
                    <div className=" w-full text-center grid grid-flow-col auto-cols-fr">
                        {history
                            .slice(-10)
                            .reverse()
                            .map((result, index) => (
                                <span key={index}>{result}</span>
                            ))}
                    </div>
                </>
            ) : (
                <Button
                    onClick={roll}
                    size="xl"
                    pill={true}
                    colour={"secondary"}
                >
                    Roll
                </Button>
            )}
        </main>
    );
};

export default RollPage;

import React, { useEffect, useState } from "react";
import { ResponsiveContainer, BarChart, Bar } from "recharts";
import { useGame } from "../contexts/GameContext";

const RollsChart = () => {
    const { rollsHistory } = useGame();

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            {
                name: "0",
                tens: rollsHistory.filter((roll) => roll[0] === 0).length,
                units: rollsHistory.filter((roll) => roll[1] === 0).length,
            },
            {
                name: "1",
                tens: rollsHistory.filter((roll) => roll[0] === 10).length,
                units: rollsHistory.filter((roll) => roll[1] === 1).length,
            },
            {
                name: "2",
                tens: rollsHistory.filter((roll) => roll[0] === 20).length,
                units: rollsHistory.filter((roll) => roll[1] === 2).length,
            },
            {
                name: "3",
                tens: rollsHistory.filter((roll) => roll[0] === 30).length,
                units: rollsHistory.filter((roll) => roll[1] === 3).length,
            },
            {
                name: "4",
                tens: rollsHistory.filter((roll) => roll[0] === 40).length,
                units: rollsHistory.filter((roll) => roll[1] === 4).length,
            },
            {
                name: "5",
                tens: rollsHistory.filter((roll) => roll[0] === 50).length,
                units: rollsHistory.filter((roll) => roll[1] === 5).length,
            },
            {
                name: "6",
                tens: rollsHistory.filter((roll) => roll[0] === 60).length,
                units: rollsHistory.filter((roll) => roll[1] === 6).length,
            },
            {
                name: "7",
                tens: rollsHistory.filter((roll) => roll[0] === 70).length,
                units: rollsHistory.filter((roll) => roll[1] === 7).length,
            },
            {
                name: "8",
                tens: rollsHistory.filter((roll) => roll[0] === 80).length,
                units: rollsHistory.filter((roll) => roll[1] === 8).length,
            },
            {
                name: "9",
                tens: rollsHistory.filter((roll) => roll[0] === 90).length,
                units: rollsHistory.filter((roll) => roll[1] === 9).length,
            },
        ]);
    }, [rollsHistory]);

    return (
        <>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart width={400} height={100} data={data}>
                    <Bar dataKey="tens" className="fill-slate-950" />
                    <Bar dataKey="units" className="fill-slate-500" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default RollsChart;

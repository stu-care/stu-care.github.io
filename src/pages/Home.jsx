import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const HomePage = () => {
    const {
        display: { setDisplay },
    } = useApp();

    useEffect(() => {
        setDisplay({ showHeader: true, title: "home", showFooter: true });
    }, []);

    return (
        <main className="p-4 h-full w-full flex items-center justify-center select-none">
            Something goes here
        </main>
    );
};

export default HomePage;

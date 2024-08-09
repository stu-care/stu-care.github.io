import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const {
        display: { setDisplay },
    } = useApp();

    useEffect(() => {
        setDisplay({ showHeader: false, showFooter: false });
    }, []);

    return (
        <main className="p-4 h-full w-full flex items-center justify-center select-none">
            <div className="flex flex-col">
                <span>i am</span>
                <Link
                    to="/entry"
                    className="text-4xl transition-colors duration-200 hover:text-primary"
                >
                    stu
                    <span className="text-primary">.care</span>
                </Link>
                <span className="self-end">a developer</span>
            </div>
        </main>
    );
};

export default LandingPage;

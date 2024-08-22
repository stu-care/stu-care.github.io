import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const LandingPage = () => {
    const navigate = useNavigate();
    const {
        display: { setDisplay },
    } = useApp();

    const [user, setUser, clearUser] = useLocalStorage("app.user", {
        email: null,
    });

    useEffect(() => {
        setDisplay({ showHeader: false, showFooter: false });
    }, []);

    useEffect(() => {
        if (user.email) {
            navigate("/entry");
        }
    }, [user]);

    return (
        <>
            <main className="p-4 h-full w-full flex items-center justify-center select-none">
                <div className="flex flex-col">
                    <span>i am</span>
                    <Link
                        to="/entry"
                        className="text-4xl transition-colors duration-500 ease-in-out hover:text-primary"
                    >
                        stu
                        <span className="text-primary">.care</span>
                    </Link>
                    <span className="self-end">a developer</span>
                </div>
            </main>
        </>
    );
};

export default LandingPage;

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { useApp } from "../contexts/AppContext";
import { useGame } from "../contexts/GameContext";

const Header = () => {
    const { menu } = useApp();

    return (
        <header className="relative flex items-center justify-between gap-4 p-4 bg-slate-900 shadow shadow-black z-50">
            <div className="flex-1 text-slate-200 hover:text-slate-300">
                <h1 className="text-2xl tracking-wide leading-none">
                    <Link
                        to="/rm"
                        className="flex items-center gap-2"
                        onClick={() => menu.close()}
                    >
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["dice-d10"]}
                            fixedWidth={true}
                        />
                        Rolemaster
                    </Link>
                </h1>
            </div>
            <div
                className="leading-none font-['Grenze_Gotisch']"
                onClick={() => localStorage.clear()}
            >
                stu<span className="text-slate-600">.care</span>
            </div>
        </header>
    );
};

export default Header;

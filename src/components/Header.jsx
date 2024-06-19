import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { useApp } from "../contexts/AppContext";

const Header = () => {
    const { menu } = useApp();

    return (
        <header className="relative flex items-baseline justify-between gap-4 p-4 bg-slate-900 shadow shadow-black z-50">
            <div className="flex-1 text-xl tracking-wide leading-none text-slate-200 hover:text-slate-300">
                <Link
                    to="/rolemaster"
                    className="flex items-baseline gap-2"
                    onClick={() => menu.close()}
                >
                    <FontAwesomeIcon
                        icon={byPrefixAndName.fas["dice-d10"]}
                        fixedWidth={true}
                    />
                    Rolemaster
                </Link>
            </div>
            <div className="leading-none" onClick={() => localStorage.clear()}>
                stu<span className="text-slate-600">.care</span>
            </div>
        </header>
    );
};

export default Header;

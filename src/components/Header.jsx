import React from "react";
import { useApp } from "../contexts/AppContext";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { useRPG } from "../contexts/RPGContext";

const Header = () => {
    const {
        display: { showHeader, title, breadcrumbs },
    } = useApp();

    const { reset } = useRPG();

    if (!showHeader) {
        return <></>;
    }

    return (
        <>
            <header className="p-4 pt-5 bg-gradient-to-br from-lima-400 to-lima-500 select-none z-20 flex items-center justify-between">
                <h1 className="text-base-content">{title}</h1>
                <button onClick={reset}>
                    <FontAwesomeIcon icon={byPrefixAndName.fas["trash-alt"]} />
                </button>
            </header>
            <Menu />
        </>
    );
};

export default Header;

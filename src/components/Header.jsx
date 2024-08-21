import React from "react";
import { useApp } from "../contexts/AppContext";
import Menu from "./Menu";

const Header = () => {
    const {
        display: { showHeader, title, breadcrumbs },
    } = useApp();

    if (!showHeader) {
        return <></>;
    }

    return (
        <>
            <header className="p-4 pt-5 bg-gradient-to-br from-lima-400 to-lima-500 select-none z-20">
                <h1 className="text-base-content">{title}</h1>
            </header>
            <Menu />
        </>
    );
};

export default Header;

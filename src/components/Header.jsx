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
            <header className="p-4 pt-5 bg-gradient-to-br from-seagull-400 to-seagull-500 select-none">
                <h1 className="mix-blend-screen text-base-100">{title}</h1>
            </header>
            <Menu />
        </>
    );
};

export default Header;

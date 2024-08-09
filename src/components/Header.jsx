import React from "react";
import { useApp } from "../contexts/AppContext";

const Header = () => {
    const {
        display: { showHeader, title },
    } = useApp();

    console.log(title, showHeader);

    if (!showHeader) {
        return <></>;
    }

    return <header className="p-4">{title}</header>;
};

export default Header;

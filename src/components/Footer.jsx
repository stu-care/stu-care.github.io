import React from "react";
import { useApp } from "../contexts/AppContext";

const Footer = () => {
    const {
        display: { showFooter },
    } = useApp();

    if (!showFooter) {
        return <></>;
    }

    return (
        <footer className="p-4 mt-auto text-center text-xs text-slate-300 dark:text-slate-700">
            &copy; {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;

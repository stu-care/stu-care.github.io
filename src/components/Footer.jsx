import React from "react";
import { useApp } from "../contexts/AppContext";
import Breadcrumbs from "./Breadcrumbs";

const Footer = () => {
    const {
        display: { showFooter },
    } = useApp();

    if (!showFooter) {
        return <></>;
    }

    return (
        <>
            <footer className="p-2 mt-auto text-center text-xs text-neutral dark:text-lemongrass-900">
                &copy; {new Date().getFullYear()}
            </footer>
            <Breadcrumbs />
        </>
    );
};

export default Footer;

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
        <div className=" px-4 py-2 flex border-t border-t-neutral dark:border-t-corduroy-900 items-center justify-between">
            <Breadcrumbs />
            <footer className="p-2 mt-auto text-center text-xs text-neutral dark:text-corduroy-900">
                &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
};

export default Footer;

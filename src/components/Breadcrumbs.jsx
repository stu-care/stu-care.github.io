import React from "react";
import { useApp } from "../contexts/AppContext";
import { NavLink } from "react-router-dom";
import { navLink } from "./Menu";

const Breadcrumbs = () => {
    const {
        display: { breadcrumbs },
    } = useApp();

    return (
        <nav className="p-4 breadcrumbs text-sm overflow-hidden border-t border-t-neutral dark:border-t-corduroy-900">
            <ul className="select-none justify-center">
                {breadcrumbs.list.map((breadcrumb, index) => (
                    <li key={index}>
                        <NavLink className={navLink} to={breadcrumb.url}>
                            {breadcrumb.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;

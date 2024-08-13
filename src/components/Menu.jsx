import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { rpgTitle } from "../pages/RPG";
import { homeTitle } from "../pages/Home";
import { mapsTitle } from "../pages/rpg/Maps";

export const navLink = ({ isActive }) =>
    isActive ? "link-primary" : "link-secondary dark:link-neutral";

const Menu = () => {
    const checkboxRef = useRef(null);

    const closeDrawer = () => {
        checkboxRef.current.checked = false;
    };

    return (
        <div className="drawer">
            <input
                id="nav-drawer"
                type="checkbox"
                className="drawer-toggle"
                ref={checkboxRef}
            />
            <nav className="drawer-content p-4 bg-corduroy-300 dark:bg-corduroy-500 text-base-100 select-none transition-colors duration-300 cursor-pointer hover:bg-corduroy-400 dark:hover:bg-corduroy-600">
                <label
                    htmlFor="nav-drawer"
                    aria-label="open sidebar"
                    className="flex justify-between items-center cursor-pointer"
                >
                    <div className="flex-1">Menu</div>
                    <div className="flex-none ">
                        <FontAwesomeIcon icon={byPrefixAndName.fas["plus"]} />
                    </div>
                </label>
            </nav>
            <div className="drawer-side absolute">
                <label
                    htmlFor="nav-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 min-h-full w-5/6 py-5 dark:bg-corduroy-800 bg-gradient-to-br from-base-100 to-base-300 z-50">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink
                            to={"/home"}
                            className={navLink}
                            onClick={closeDrawer}
                        >
                            {homeTitle}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/rpg"}
                            className={navLink}
                            onClick={closeDrawer}
                        >
                            {rpgTitle}
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink
                                    to={"/rpg/maps"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {mapsTitle}
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;

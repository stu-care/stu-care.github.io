import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { rpgTitle } from "../pages/RPG";
import { homeTitle } from "../pages/Home";

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
            <nav className="drawer-content p-4 bg-mystic-300 dark:bg-mystic-500 text-base-100 select-none transition-colors duration-300 cursor-pointer hover:bg-mystic-400 dark:hover:bg-mystic-600">
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
                <ul className="menu bg-base-200 min-h-full w-5/6 p-4 dark:bg-mystic-800">
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
                                <a>Sidebar item 2a</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;

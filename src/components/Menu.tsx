import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { rpgTitle } from "../pages/RPG";
import { homeTitle } from "../pages/Home";
import { skillsTitle } from "../pages/rpg/Skills";
import { herbsTitle } from "../pages/rpg/Herbs";
import { exchangeTitle } from "../pages/rpg/Exchange";
import { purseTitle } from "../pages/rpg/Purse";
import { obTitle } from "../pages/rpg/OB";
import { keyInfoTitle } from "../pages/rpg/KeyInfo";
import { timelineTitle } from "../pages/rpg/Timeline";

export const navLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? "link-primary" : "link-secondary dark:link-neutral";

const Menu = () => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const closeDrawer = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
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
            <div className="drawer-side absolute z-20 ">
                <label
                    htmlFor="nav-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-5/6 py-5 bg-gradient-to-br from-base-100 to-base-300 dark:from-corduroy-800 dark:to-corduroy-900 z-30">
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
                                    to={"/rpg/info"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {keyInfoTitle}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/rpg/timeline"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {timelineTitle}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/rpg/skills"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {skillsTitle}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/rpg/herbs"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {herbsTitle}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/rpg/exchange"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {exchangeTitle}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/rpg/purse"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {purseTitle}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/rpg/ob"}
                                    className={navLink}
                                    onClick={closeDrawer}
                                >
                                    {obTitle}
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

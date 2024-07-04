import { NavLink } from "react-router-dom";
import cx from "classnames";

import { useApp } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import CharacterSelect from "./CharacterSelect";
import { useGame } from "../contexts/GameContext";

const Menu = () => {
    const { menu } = useApp();
    const { selectedCharacter } = useGame();

    return (
        <>
            <div
                className="relative flex justify-between items-center p-4 select-none cursor-pointer bg-slate-600 shadow shadow-black z-10 font-['Grenze_Gotisch']"
                onClick={menu.toggle}
                role="button"
            >
                <span>Menu</span>
                <span
                    className={cx([
                        "menu-toggle transition-all duration-200 ease-in-out",
                        { "rotate-45 scale-110": menu.isExpanded },
                    ])}
                    aria-label="Toggle Menu"
                >
                    <FontAwesomeIcon
                        icon={byPrefixAndName.fas["plus"]}
                        fixedWidth={true}
                    />
                </span>
            </div>
            <div className="relative w-full">
                <nav
                    aria-expanded={menu.isExpanded}
                    className={cx([
                        "absolute flex flex-col w-full justify-between items-center bg-slate-400 text-slate-900 backdrop-blur shadow shadow-black z-[9] transition-all duration-200 ease-in-out font-['Grenze_Gotisch']",
                        {
                            "top-0": menu.isExpanded,
                            "-top-[calc(3.25em*9)]": !menu.isExpanded,
                        },
                    ])}
                    role="navigation"
                >
                    <NavLink
                        to="/rm"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Home
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["dice-d10"]}
                            fixedWidth={true}
                        />
                    </NavLink>
                    <NavLink
                        to="/rm/info"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Info
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["book-open-cover"]}
                            fixedWidth={true}
                        />
                    </NavLink>
                    <NavLink
                        to="/rm/maps"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Maps
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["map-location"]}
                            fixedWidth={true}
                        />
                    </NavLink>
                    <NavLink
                        to="/rm/character"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Character
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["person-half-dress"]}
                            fixedWidth={true}
                        />
                    </NavLink>
                    <NavLink
                        to="/rm/roll"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Roll
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["dice"]}
                            fixedWidth={true}
                        />
                    </NavLink>

                    <NavLink
                        to="/rm/currency"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Currency
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["coin"]}
                            fixedWidth={true}
                        />
                    </NavLink>

                    <NavLink
                        to="/rm/herbs"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Herb List
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["seedling"]}
                            fixedWidth={true}
                        />
                    </NavLink>

                    <NavLink
                        to="/rm/debug"
                        className="flex gap-2 p-4 items-center justify-between w-full leading-none"
                        onClick={() => menu.close()}
                    >
                        Debug
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["bug"]}
                            fixedWidth={true}
                        />
                    </NavLink>
                    <div className="flex gap-2 p-4 items-center justify-between w-full leading-none">
                        {selectedCharacter && (
                            <img
                                src={selectedCharacter.img.src}
                                alt="Avatar"
                                className="squircle w-8 h-8 bg-transparent object-cover"
                            />
                        )}
                        <CharacterSelect
                            classnames={
                                "p-0 m-0 bg-transparent flex justify-between grow"
                            }
                        />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Menu;

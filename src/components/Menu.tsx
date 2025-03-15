import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { homeTitle } from "../pages/Home";
import { rpgTitle } from "../pages/RPG";
import { exchangeTitle } from "../pages/rpg/Exchange";
import { herbsTitle } from "../pages/rpg/Herbs";
import { keyInfoTitle } from "../pages/rpg/KeyInfo";
import { obTitle } from "../pages/rpg/OB";
import { purseTitle } from "../pages/rpg/Purse";
import { skillsTitle } from "../pages/rpg/Skills";
import { timelineTitle } from "../pages/rpg/Timeline";
import { faldrinTitle } from "../pages/rpg/Faldrin";
import { diceTitle } from "../pages/rpg/Dice";
import { sheetTitle } from "../pages/rpg/Sheet";

export const navLink = ({ isActive }: { isActive: boolean }) =>
	isActive ? "link-primary" : "text-base-content";

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
			<nav className="drawer-content select-none transition-colors duration-300 cursor-pointer border-b border-b-primary/20">
				<label
					htmlFor="nav-drawer"
					aria-label="open sidebar"
					className="flex p-4 justify-between items-center cursor-pointer"
				>
					<div className="flex-1">Menu</div>
					<div className="flex-none ">
						{/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
						<FontAwesomeIcon icon={byPrefixAndName.fas["plus"]} />
					</div>
				</label>
			</nav>
			<div className="drawer-side absolute z-20">
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<label
					htmlFor="nav-drawer"
					aria-label="close sidebar"
					className="drawer-overlay !bg-base-100/90"
				></label>
				<ul className="menu min-h-full w-5/6 py-5 z-30">
					{/* Sidebar content here */}
					<li>
						<NavLink to={"/home"} className={navLink} onClick={closeDrawer}>
							{homeTitle}
						</NavLink>
					</li>
					<li>
						<NavLink to={"/rpg"} className={navLink} onClick={closeDrawer}>
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
							<li>
								<NavLink
									to={"/rpg/faldrin"}
									className={navLink}
									onClick={closeDrawer}
								>
									{faldrinTitle}
								</NavLink>
							</li>

							<li>
								<NavLink
									to={"/rpg/sheet"}
									className={navLink}
									onClick={closeDrawer}
								>
									{sheetTitle}
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/rpg/dice"}
									className={navLink}
									onClick={closeDrawer}
								>
									{diceTitle}
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

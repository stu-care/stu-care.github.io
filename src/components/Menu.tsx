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
import { dndLandingTitle } from "../pages/dnd/DnDLandingPage";

export const navLink = ({ isActive }: { isActive: boolean }) =>
	isActive ? "tab tab-active text-base-content" : "tab";

const Menu = () => {
	return (
		<nav className="bg-base-100/70 backdrop-blur-sm rounded-lg shadow-xl overflow-auto grid grid-flow-col auto-cols-max overflow-x-auto p-1 sm:p-2 min-h-12">
			<NavLink to={"/rpg"} role="tab" end={true} className={navLink}>
				{rpgTitle}
			</NavLink>
			<NavLink to={"/rpg/timeline"} role="tab" className={navLink}>
				{timelineTitle}
			</NavLink>
			<NavLink to={"/rpg/ob"} role="tab" className={navLink}>
				{obTitle}
			</NavLink>
			<NavLink to={"/rpg/purse"} role="tab" className={navLink}>
				{purseTitle}
			</NavLink>
			<NavLink to={"/rpg/faldrin"} role="tab" className={navLink}>
				{faldrinTitle}
			</NavLink>
			<NavLink to={"/rpg/sheet"} role="tab" className={navLink}>
				{sheetTitle}
			</NavLink>
			<NavLink to={"/rpg/info"} className={navLink}>
				{keyInfoTitle}
			</NavLink>
			<NavLink to={"/rpg/skills"} role="tab" className={navLink}>
				{skillsTitle}
			</NavLink>
			<NavLink to={"/rpg/herbs"} role="tab" className={navLink}>
				{herbsTitle}
			</NavLink>
			<NavLink to={"/rpg/exchange"} role="tab" className={navLink}>
				{exchangeTitle}
			</NavLink>
			<NavLink to={"/rpg/dice"} role="tab" className={navLink}>
				{diceTitle}
			</NavLink>
			<NavLink to={"/dnd"} role="tab" end={true} className={navLink}>
				{dndLandingTitle}
			</NavLink>
		</nav>
	);
};

export default Menu;

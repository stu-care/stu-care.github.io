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
import { useApp } from "../contexts/AppContext";

export const navLink = ({ isActive }: { isActive: boolean }) =>
	isActive
		? "inline-block bg-primary text-base-100 px-2"
		: "link link-primary hover:no-underline hover:bg-primary hover:text-base-100 inline-block";

const Menu = () => {
	const {
		display: { showMenu },
	} = useApp();

	if (!showMenu) {
		return <></>;
	}

	return (
		<nav className="min-h-max pb-2 mb-2 border-b-2 border-b-primary max-w-full overflow-auto">
			<ul className="flex gap-4">
				<li>
					<NavLink to={"/home"} className={navLink}>
						{homeTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg"} className={navLink}>
						{rpgTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/info"} className={navLink}>
						{keyInfoTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/timeline"} className={navLink}>
						{timelineTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/skills"} className={navLink}>
						{skillsTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/herbs"} className={navLink}>
						{herbsTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/exchange"} className={navLink}>
						{exchangeTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/purse"} className={navLink}>
						{purseTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/ob"} className={navLink}>
						{obTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/faldrin"} className={navLink}>
						{faldrinTitle}
					</NavLink>
				</li>

				<li>
					<NavLink to={"/rpg/sheet"} className={navLink}>
						{sheetTitle}
					</NavLink>
				</li>
				<li>
					<NavLink to={"/rpg/dice"} className={navLink}>
						{diceTitle}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

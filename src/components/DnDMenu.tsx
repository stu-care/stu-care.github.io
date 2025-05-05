import { NavLink } from "react-router-dom";
import { dndLandingTitle } from "../pages/dnd/DnDLandingPage";
import { dndCheatSheetTitle } from "../pages/dnd/DnDCheatSheetPage";

export const navLink = ({ isActive }: { isActive: boolean }) =>
	isActive ? "tab tab-active text-base-content" : "tab";

const DnDMenu = () => {
	return (
		<nav className="bg-base-100/70 backdrop-blur-sm rounded-lg shadow-xl overflow-auto grid grid-flow-col auto-cols-max overflow-x-auto p-1 sm:p-2 min-h-12">
			<NavLink to={"/dnd/"} role="tab" end={true} className={navLink}>
				{dndLandingTitle}
			</NavLink>
			<NavLink to={"/dnd/cs"} role="tab" className={navLink}>
				{dndCheatSheetTitle}
			</NavLink>
		</nav>
	);
};

export default DnDMenu;

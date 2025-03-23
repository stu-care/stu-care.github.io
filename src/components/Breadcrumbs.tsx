import { NavLink } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { navLink } from "./Menu";

const Breadcrumbs = () => {
	const {
		display: { breadcrumbs },
	} = useApp();

	return (
		<nav className="breadcrumbs min-h-max pb-0 pt-2 mt-2 border-t border-t-primary max-w-full overflow-auto text-xs">
			<ul className="flex gap-4">
				{breadcrumbs.list.map((breadcrumb, index) => (
					<li key={breadcrumb.url}>
						<NavLink className={navLink} to={breadcrumb.url} end>
							{breadcrumb.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Breadcrumbs;

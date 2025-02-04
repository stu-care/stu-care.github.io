import { NavLink } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { navLink } from "./Menu";

const Breadcrumbs = () => {
	const {
		display: { breadcrumbs },
	} = useApp();

	return (
		<nav className="breadcrumbs text-sm overflow-hidden">
			<ul className="select-none justify-center">
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

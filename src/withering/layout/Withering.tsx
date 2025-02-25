import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useWithering } from "../contexts/WitheringContext";

const Withering = () => {
	const {
		breadcrumbs: { list: breadcrumbs },
	} = useWithering();

	return (
		<div className="p-16 flex flex-col justify-start gap-16 bg-stone-200 h-[100dvh] w-full overflow-hidden font-mono">
			<header className="bg-stone-300 p-8 rounded-xl shadow-inner shadow-stone-800/30 text-center breadcrumbs">
				<ul>
					{breadcrumbs.map(({ path, label }) => (
						<li
							key={path}
							className="last:font-bold [:not(:last-child)]:text-stone-800/50"
						>
							<NavLink to={path}>{label}</NavLink>
						</li>
					))}
				</ul>
			</header>
			<div className="flex flex-row flex-grow gap-16 overflow-hidden">
				<nav className="bg-stone-300 p-8 rounded-xl shadow-inner shadow-stone-800/30">
					Menu Space
				</nav>
				<main className="bg-stone-300 p-8 rounded-xl shadow-inner shadow-stone-800/30 flex-grow overflow-auto">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default Withering;

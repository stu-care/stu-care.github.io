import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { useRPG } from "../contexts/RPGContext";
import Menu from "./Menu";

const Header = () => {
	const {
		display: { showHeader, title, breadcrumbs },
	} = useApp();

	const [resetComplete, setResetComplete] = useState<boolean>(false);

	const { reset } = useRPG();

	const resetHandler = () => {
		reset();
		setResetComplete(true);
	};

	if (!showHeader) {
		return <></>;
	}

	return (
		<>
			<header className="p-4 pt-5 bg-gradient-to-br from-lima-400 to-lima-500 select-none z-20 flex items-center justify-between">
				<h1 className="text-base-content">{title}</h1>
				{!resetComplete && (
					<button onClick={resetHandler}>
						<FontAwesomeIcon
							className="hover:text-lima-800 transition-colors duration-300"
							icon={byPrefixAndName.fas["trash-alt"]}
						/>
					</button>
				)}
			</header>
			<Menu />
		</>
	);
};

export default Header;

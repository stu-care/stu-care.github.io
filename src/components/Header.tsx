import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
			<header className="p-4 pt-5 select-none z-20 flex items-center justify-between bg-primary/90 text-primary-content">
				<h1 className="">{title}</h1>
				{!resetComplete && (
					<button onClick={resetHandler} type="button">
						<FontAwesomeIcon
							className="transition-colors duration-300"
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

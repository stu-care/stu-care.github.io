import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { useRPG } from "../contexts/RPGContext";

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
		<header className="min-h-max w-full flex justify-between items-end pb-2 mb-2 border-b-2 border-b-primary min-h-[50px]">
			<h1 className="font-bold bg-primary text-base-100 px-2 text-xl">
				{title}
			</h1>
			{!resetComplete && (
				<button
					onClick={resetHandler}
					className="btn btn-outline btn-primary"
					type="button"
				>
					<FontAwesomeIcon
						fixedWidth={true}
						icon={byPrefixAndName.fas["trash-alt"]}
					/>
				</button>
			)}
		</header>
	);
};

export default Header;

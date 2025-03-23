import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";

export const homeTitle = (
	<span className="flex items-center gap-1">
		{/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["house"]} />
		Home
	</span>
);

const HomePage = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({ showHeader: true, title: homeTitle, showFooter: true });
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
	}, []);

	return <main />;
};

export default HomePage;

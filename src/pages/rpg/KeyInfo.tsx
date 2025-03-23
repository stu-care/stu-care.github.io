import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { useEffect } from "react";
import { keyInfo } from "../../content/keyInfo";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const keyInfoTitle = (
	<span className="flex items-center gap-1 w-max">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["user-beard-bolt"]}
		/>
		Key Info
	</span>
);

const KeyInfoPage = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: keyInfoTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/info", label: keyInfoTitle });
	}, []);

	return (
		<main className="grid sm:grid-cols-2 md:grid-cols-3 auto-rows-auto grid-flow-row gap-2">
			{keyInfo.map((item, index) => {
				return (
					<div className="border-1 border-primary " key={item.name}>
						<div className="p-2 bg-primary text-base-100 font-bold">
							<h3 className="" id={`${index}`}>
								{item.name}
							</h3>
						</div>
						{item.description && (
							<div className="p-2">
								<Markdown>{item.description}</Markdown>
							</div>
						)}
					</div>
				);
			})}
		</main>
	);
};

export default KeyInfoPage;

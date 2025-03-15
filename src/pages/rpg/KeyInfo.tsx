import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { useEffect } from "react";
import { keyInfo } from "../../content/keyInfo";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const keyInfoTitle = (
	<span className="leading-none flex items-baseline gap-2">
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
		<main className="grid grid-flow-row auto-rows-auto p-4 gap-4 ">
			{keyInfo.map((item, index) => {
				return (
					<div
						className="border-2 border-slate-300 overflow-hidden dark:border-slate-700 rounded"
						key={item.name}
					>
						{/* {item.img && (
							<img
								className={cx(["w-full"])}
								src={item.img.src}
								alt={item.img.alt}
							/>
						)} */}
						<div className="p-2 bg-slate-300 dark:bg-slate-700">
							<h3
								id={`${index}`}
								className="flex gap-2 items-baseline justify-between"
							>
								{item.name}
							</h3>
						</div>
						{item.description && (
							<div className="p-2 grid grid-flow-row auto-rows-auto gap-4 text-sm group ">
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

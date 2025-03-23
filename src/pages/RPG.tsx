import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { useEffect } from "react";
import type { Character } from "../content/characterList";
import { useApp } from "../contexts/AppContext";
import { useRPG } from "../contexts/RPGContext";
import { homeTitle } from "./Home";

export const rpgTitle = (
	<span className="flex items-center gap-1">
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["dice-d20"]} />
		RPG
	</span>
);

const RPGPage = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const {
		characters: { faldrin },
	} = useRPG();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: rpgTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
	}, []);

	return (
		<main>
			{/* <img src={faldrin.img.src} alt={faldrin.img.alt} /> */}
			<div>
				<h2>{faldrin.character.name}</h2>
				<div />
			</div>
			<div>
				<span>{faldrin.character.race}</span>
				<span>{faldrin.character.profession}</span>
			</div>
			<div>
				{Object.keys((faldrin as Character).stats).map((stat) => (
					<div key={stat}>{stat}</div>
				))}
				<div>ap</div>
				{Object.keys((faldrin as Character).stats).map((stat) => (
					<div key={stat}>
						{
							(faldrin as Character).stats[stat as keyof Character["stats"]]
								.temp
						}
					</div>
				))}
				<div>{(faldrin as Character).ap}</div>
				{Object.keys((faldrin as Character).stats).map((stat) => (
					<div key={stat}>
						{(faldrin as Character).stats[stat as keyof Character["stats"]]
							?.total > 0
							? "+"
							: ""}
						{
							(faldrin as Character).stats[stat as keyof Character["stats"]]
								.total
						}
					</div>
				))}
			</div>
			<Markdown>{faldrin.character.description}</Markdown>
		</main>
	);
};

export default RPGPage;

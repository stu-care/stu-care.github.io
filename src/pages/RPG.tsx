import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { useEffect } from "react";
import type { Character } from "../content/characterList";
import { useApp } from "../contexts/AppContext";
import { useRPG } from "../contexts/RPGContext";
import { homeTitle } from "./Home";

export const rpgTitle = (
	<span className="leading-none flex items-baseline gap-2">
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
		<main className="p-4 h-full w-full grid auto-rows-auto grid-flow-row gap-4 select-none">
			<img
				src={faldrin.img.src}
				alt={faldrin.img.alt}
				className="w-full max-h-96 object-cover rounded"
			/>
			<div className="flex gap-4 flex-row text-primary">
				<h2>{faldrin.character.name}</h2>
				<div className="border-b-4 grow -translate-y-[calc(50%-2px)] border-primary" />
			</div>
			<div className="flex items-center justify-between font-light">
				<span>{faldrin.character.race}</span>
				<span>{faldrin.character.profession}</span>
			</div>
			<div className="grid grid-cols-11 rounded p-2 mb-8 text-sm text-center">
				{Object.keys((faldrin as Character).stats).map((stat) => (
					<div className="font-bold uppercase text-primary" key={stat}>
						{stat}
					</div>
				))}
				<div className="font-bold uppercase text-primary">ap</div>
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

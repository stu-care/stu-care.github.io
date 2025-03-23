import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { type ChangeEventHandler, useEffect, useState } from "react";
import type { Character } from "../../content/characterList";
import { type Skill, skillsList } from "../../content/skillList";
import { useApp } from "../../contexts/AppContext";
import { useRPG } from "../../contexts/RPGContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";

export const skillsTitle = (
	<span className="flex items-center gap-1 w-max">
		{/* biome-ignore lint/complexity/useLiteralKeys: <explanation> */}
		<FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["bolt"]} />
		Skills
	</span>
);

const SkillsPage = () => {
	const [filterValue, setFilterValue] = useState<string>("");
	const {
		characters: { faldrin },
	} = useRPG();

	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: skillsTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/skills", label: skillsTitle });
	}, []);

	const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterValue(e.target.value);
	};

	const calculateSkillModifier = (skill: Skill) => {
		if (skill.stats) {
			const values = skill.stats.map((statGroup) => {
				let statValue = 0;

				for (const stat of statGroup) {
					statValue += (faldrin as Character).stats[
						stat.toLowerCase() as keyof Character["stats"]
					]?.total;
				}
				return Math.round(statValue / statGroup.length);
			});
			return values.map((value, index) => {
				return (
					value &&
					!Number.isNaN(value) && (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<span key={index}>
							{value >= 0 ? "+" : ""}
							{value}
						</span>
					)
				);
			});
		}
	};

	return (
		<main>
			<div>
				<label htmlFor="#filter">Filter</label>
				<input
					id="filter"
					type="text"
					name="filter"
					value={filterValue}
					onChange={handleFilterChange}
					placeholder="Skill Name (e.g. Fauna Lore)"
				/>
			</div>
			{skillsList
				.filter(
					(skill) =>
						skill.name.toLowerCase().includes(filterValue.toLowerCase()) ||
						skill.type.toLowerCase().includes(filterValue.toLowerCase()) ||
						skill.description.toLowerCase().includes(filterValue.toLowerCase()),
				)
				.map((skill) => {
					return (
						<div key={skill.name}>
							<div>
								<div>
									<h3>
										<span>{skill.name}</span>
										<span>
											{skill.stats && (
												<span>
													{skill.stats
														?.map((stat) => stat.join("/"))
														.join(" or ")}
												</span>
											)}
										</span>
									</h3>
								</div>
								<div>
									<div>
										<div>
											<div>{skill.type}</div>
										</div>
										<div>{calculateSkillModifier(skill)}</div>
									</div>
									<div>
										<Markdown>{skill.description}</Markdown>
									</div>
									<div>{skill.ref ?? "-"}</div>
								</div>
							</div>
						</div>
					);
				})}
		</main>
	);
};

export default SkillsPage;

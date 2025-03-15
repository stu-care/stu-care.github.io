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
	<span className="leading-none flex items-baseline gap-2">
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
		<main className="grid grid-flow-row auto-rows-auto p-4 gap-4 ">
			<div className="grid grid-flow-row gap-1">
				<label className="uppercase" htmlFor="filter">
					Filter
				</label>
				<input
					type="text"
					name="filter"
					className="input w-full input-bordered focus-within:input-primary dark:bg-slate-700"
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
						<div key={skill.name} className="grid gap-4 max-w-full">
							<div className="border-2 border-slate-300 rounded overflow-hidden dark:border-slate-700">
								<div className="p-2 bg-slate-300 dark:bg-slate-700">
									<h3 className="flex gap-2 items-baseline justify-between">
										<span className="flex gap-4 items-baseline">
											{skill.name}
										</span>
										<span className="text-base">
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
								<div className="p-2 grid grid-flow-row auto-rows-auto gap-4 text-sm">
									<div className="flex items-center justify-between">
										<div className="font-light text-xs">
											<div>{skill.type}</div>
										</div>
										<div className="flex justify-end items-start gap-4">
											{calculateSkillModifier(skill)}
										</div>
									</div>
									<div className="tracking-wide grid grid-flow-row auto-rows-auto gap-2">
										<Markdown>{skill.description}</Markdown>
									</div>
									<div className="flex justify-start items-baseline gap-2 text-left text-xs text-slate-400">
										{skill.ref ?? "-"}
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</main>
	);
};

export default SkillsPage;

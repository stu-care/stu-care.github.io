import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ChangeEvent, Fragment, useEffect } from "react";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { useRPG } from "../../contexts/RPGContext";
import type {
	Character,
	Characters,
	StatKeys,
} from "../../content/characterList";
import PropertyUpdaterRow from "../../components/PropertyUpdaterRow";

export const sheetTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["file-spreadsheet"]}
		/>
		{/* Character Sheet */}
	</span>
);

const SheetPage = () => {
	const {
		display: { setDisplay, breadcrumbs },
	} = useApp();

	const { characters, updateCharacters } = useRPG();

	useEffect(() => {
		console.log(characters.faldrin);
	}, [characters]);

	const faldrin = characters.faldrin as Character;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({
			showHeader: true,
			title: sheetTitle,
			showFooter: true,
		});
		breadcrumbs.clear();
		breadcrumbs.add({ url: "/home", label: homeTitle });
		breadcrumbs.add({ url: "/rpg", label: rpgTitle });
		breadcrumbs.add({ url: "/rpg/sheet", label: sheetTitle });
	}, []);

	const updateProperty = (
		value: number,
		matcher: (character: Character, value: number) => Character,
	) => {
		const updateFaldrin = matcher(faldrin, value);

		const updatedCharacterList: Characters = {
			...characters,
			faldrin: updateFaldrin,
		};
		updateCharacters(updatedCharacterList);
	};

	const calculateDp = (value: number): number => {
		const thresholds = [4, 14, 24, 39, 59, 74, 84, 94, 99, 101];
		for (let i = 0; i < thresholds.length; i++) {
			if (value <= thresholds[i]) {
				return i + 1;
			}
		}
		return thresholds.length + 1;
	};

	const calculateMod = (value: number): number => {
		const thesholds = [1, 2, 4, 9, 24, 74, 89, 94, 97, 99, 100, 101];

		for (let i = 0; i < thesholds.length; i++) {
			if (value <= thesholds[i]) {
				return (i - 5) * 5;
			}
		}

		return (thesholds.length - 5) * 5;
	};

	const calculateSkillRank = (value: number): number => {
		if (value === 0) {
			return -25;
		}
		const values = [
			-25, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 52, 54, 56, 68, 60, 62, 64,
			66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
		];
		if (value <= 30) {
			return values[value];
		}
		return values[30] + (value - 30) / 2;
	};

	return (
		<main className="grid grid-flow-row auto-rows-auto p-4 gap-4 relative">
			<h2>{faldrin.character.name}</h2>

			<h3>Level</h3>
			<PropertyUpdaterRow
				label="Level"
				value={faldrin.level}
				updater={(value) =>
					updateProperty(value, (character, value) => {
						return {
							...character,
							level: value,
						};
					})
				}
			/>

			<h3>HP</h3>
			<PropertyUpdaterRow
				label="Base HP"
				value={faldrin.hp.base}
				updater={(value) =>
					updateProperty(value, (character, value) => {
						return {
							...character,
							hp: {
								...character.hp,
								base: value,
								total: Math.min(
									value +
										Math.round(character.stats.co.temp / 10) +
										Math.ceil(
											(character.stats.co.total / 100) *
												(value + Math.round(character.stats.co.temp / 10)),
										),
									character.hp.maxBase + character.stats.co.total,
								),
							},
						};
					})
				}
			/>
			<PropertyUpdaterRow
				label="Base HP Modifier"
				value={Math.round(faldrin.stats.co.temp / 10)}
			/>
			<PropertyUpdaterRow label="Total HP" value={faldrin.hp.total} />

			<h3>Movement</h3>
			<PropertyUpdaterRow
				label="Base Movement"
				value={faldrin.bmr}
				updater={(value) => {
					updateProperty(value, (character, value) => {
						return { ...character, bmr: value };
					});
				}}
			/>
			<PropertyUpdaterRow label="QU Bonus" value={faldrin.stats.qu.total} />
			<PropertyUpdaterRow
				label="Total"
				value={faldrin.bmr + faldrin.stats.qu.total}
			/>

			<h3>Stats</h3>
			{Object.keys(faldrin.stats).map((key) => {
				return (
					<Fragment key={key}>
						<h4>{key.toUpperCase()}</h4>
						<PropertyUpdaterRow
							label={"Temp"}
							value={faldrin.stats[key as keyof typeof faldrin.stats].temp}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									const updatedCharacter = {
										...character,
										hp: {
											...character.hp,
											modifier:
												key === "co"
													? Math.ceil(value / 10)
													: character.hp.modifier,
										},
										stats: {
											...character.stats,
											[key]: {
												...character.stats[key as keyof typeof faldrin.stats],
												temp: value,
												mod: calculateMod(value),
												total:
													calculateMod(value) +
													character.stats[key as keyof typeof faldrin.stats]
														.misc +
													character.stats[key as keyof typeof faldrin.stats]
														.race,
											},
										},
									};

									if (key === "co") {
										updatedCharacter.hp.total = Math.min(
											updatedCharacter.hp.base +
												Math.round(character.stats.co.temp / 10) +
												Math.ceil(
													(updatedCharacter.stats.co.total / 100) *
														(updatedCharacter.hp.base +
															Math.round(character.stats.co.temp / 10)),
												),
											character.hp.maxBase + character.stats.co.total,
										);
									}

									return updatedCharacter;
								});
							}}
						/>
						<PropertyUpdaterRow
							label={"Pot"}
							value={faldrin.stats[key as keyof typeof faldrin.stats].pot}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									return {
										...character,
										stats: {
											...character.stats,
											[key]: {
												...character.stats[key as keyof typeof faldrin.stats],
												pot: value,
											},
										},
									};
								});
							}}
						/>
						<PropertyUpdaterRow
							label={"Mod"}
							value={faldrin.stats[key as keyof typeof faldrin.stats].mod}
						/>
						<PropertyUpdaterRow
							label={"Race"}
							value={faldrin.stats[key as keyof typeof faldrin.stats].race}
						/>
						<PropertyUpdaterRow
							label={"Misc"}
							value={faldrin.stats[key as keyof typeof faldrin.stats].misc}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									const updatedCharacter = {
										...character,
										stats: {
											...character.stats,
											[key]: {
												...character.stats[key as keyof typeof faldrin.stats],
												misc: value,
												total:
													value +
													character.stats[key as keyof typeof faldrin.stats]
														.race +
													character.stats[key as keyof typeof faldrin.stats]
														.mod,
											},
										},
									};

									if (key === "co") {
										updatedCharacter.hp.total = Math.min(
											updatedCharacter.hp.base +
												Math.ceil(
													(updatedCharacter.stats.co.total / 100) *
														updatedCharacter.hp.base,
												),
											character.hp.maxBase + character.stats.co.total,
										);
									}

									return updatedCharacter;
								});
							}}
						/>

						<PropertyUpdaterRow
							label={"Total"}
							value={
								faldrin.stats[key as keyof typeof faldrin.stats].mod +
								faldrin.stats[key as keyof typeof faldrin.stats].race +
								faldrin.stats[key as keyof typeof faldrin.stats].misc
							}
						/>
						{["co", "sd", "ag", "me", "re"].includes(key) && (
							<PropertyUpdaterRow
								label={"DP"}
								value={calculateDp(
									faldrin.stats[key as keyof typeof faldrin.stats].temp,
								)}
							/>
						)}
					</Fragment>
				);
			})}
			<h3>Total DP:</h3>
			<PropertyUpdaterRow
				label="Total DP"
				value={Object.keys(faldrin.stats).reduce((acc, cur) => {
					return (
						acc +
						(["co", "sd", "ag", "me", "re"].includes(cur as StatKeys)
							? calculateDp(faldrin.stats[cur as StatKeys].temp)
							: 0)
					);
				}, 0)}
			/>

			<h3>Weapons</h3>
			{faldrin.weapons.map((weapon, index) => {
				return (
					<Fragment key={weapon.short}>
						<h4>{weapon.type}</h4>
						<PropertyUpdaterRow
							label="Skill Level"
							value={weapon.bonuses.level}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									return {
										...character,
										weapons: character.weapons.map((w, i) => {
											if (weapon.short === w.short) {
												return {
													...w,
													bonuses: {
														...w.bonuses,
														level: value,
														total:
															calculateSkillRank(value) +
															Math.round(
																weapon.bonuses.stats
																	.map((stat) => faldrin.stats[stat].total)
																	.reduce((acc, cur) => acc + cur, 0) /
																	(weapon.bonuses.stats.length || 1),
															) +
															faldrin.level *
																faldrin.levelBonus[weapon.bonuses.category] +
															weapon.bonuses.misc,
													},
												};
											}
											return w;
										}),
									};
								});
							}}
						/>
						<PropertyUpdaterRow
							label="Skill"
							value={calculateSkillRank(weapon.bonuses.level)}
						/>
						<PropertyUpdaterRow
							label="Stat"
							value={Math.round(
								weapon.bonuses.stats
									.map((stat) => faldrin.stats[stat].total)
									.reduce((acc, cur) => acc + cur, 0) /
									(weapon.bonuses.stats.length || 1),
							)}
						/>
						<PropertyUpdaterRow
							label="Level"
							value={
								faldrin.level * faldrin.levelBonus[weapon.bonuses.category]
							}
						/>
						<PropertyUpdaterRow
							label="Misc"
							value={weapon.bonuses.misc}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									return {
										...character,
										weapons: character.weapons.map((w, i) => {
											if (weapon.short === w.short) {
												return {
													...w,
													bonuses: {
														...w.bonuses,
														misc: value,
														total:
															calculateSkillRank(weapon.bonuses.level) +
															Math.round(
																weapon.bonuses.stats
																	.map((stat) => faldrin.stats[stat].total)
																	.reduce((acc, cur) => acc + cur, 0) /
																	(weapon.bonuses.stats.length || 1),
															) +
															faldrin.level *
																faldrin.levelBonus[weapon.bonuses.category] +
															value,
													},
												};
											}
											return w;
										}),
									};
								});
							}}
						/>
						<PropertyUpdaterRow
							label="Total"
							value={
								calculateSkillRank(weapon.bonuses.level) +
								Math.round(
									weapon.bonuses.stats
										.map((stat) => faldrin.stats[stat].total)
										.reduce((acc, cur) => acc + cur, 0) /
										(weapon.bonuses.stats.length || 1),
								) +
								faldrin.level * faldrin.levelBonus[weapon.bonuses.category] +
								weapon.bonuses.misc
							}
						/>
					</Fragment>
				);
			})}
			<h3>Skills</h3>

			{faldrin.skills.map((skill, index) => {
				return (
					<Fragment key={skill.name}>
						<h4 className="flex items-baseline justify-between">
							{skill.name}
							<small>
								[{skill.stats.map((s) => s.toUpperCase()).join(", ")}]
							</small>
						</h4>
						<PropertyUpdaterRow
							label="Skill Level"
							value={skill.level}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									return {
										...character,
										skills: character.skills.map((s, i) => {
											if (skill.name === s.name) {
												return {
													...s,

													level: value,
													total:
														calculateSkillRank(value) +
														Math.round(
															skill.stats
																.map((stat) => faldrin.stats[stat].total)
																.reduce((acc, cur) => acc + cur, 0) /
																(skill.stats.length || 1),
														) +
														faldrin.level *
															(faldrin.levelBonus[skill.category] || 0) +
														skill.misc,
												};
											}
											return s;
										}),
									};
								});
							}}
						/>
						<PropertyUpdaterRow
							label="Skill"
							value={calculateSkillRank(skill.level)}
						/>
						<PropertyUpdaterRow
							label="Stat"
							value={Math.round(
								skill.stats
									.map((stat) => faldrin.stats[stat].total)
									.reduce((acc, cur) => acc + cur, 0) /
									(skill.stats.length || 1),
							)}
						/>
						<PropertyUpdaterRow
							label="Level"
							value={faldrin.level * (faldrin.levelBonus[skill.category] || 0)}
						/>
						<PropertyUpdaterRow
							label="Misc"
							value={skill.misc}
							updater={(value) => {
								updateProperty(value, (character, value) => {
									return {
										...character,
										skills: character.skills.map((s, i) => {
											if (skill.name === s.name) {
												return {
													...s,
													misc: value,
													total:
														calculateSkillRank(skill.level) +
														Math.round(
															skill.stats
																.map((stat) => faldrin.stats[stat].total)
																.reduce((acc, cur) => acc + cur, 0) /
																(skill.stats.length || 1),
														) +
														faldrin.level *
															(faldrin.levelBonus[skill.category] || 0) +
														value,
												};
											}
											return s;
										}),
									};
								});
							}}
						/>
						<PropertyUpdaterRow
							label="Total"
							value={
								calculateSkillRank(skill.level) +
								Math.round(
									skill.stats
										.map((stat) => faldrin.stats[stat].total)
										.reduce((acc, cur) => acc + cur, 0) /
										(skill.stats.length || 1),
								) +
								faldrin.level * (faldrin.levelBonus[skill.category] || 0) +
								skill.misc
							}
						/>
					</Fragment>
				);
			})}
			<div className="w-full overflow-hidden whitespace-pre-wrap break-all">
				<code>
					<pre className="select-all">{JSON.stringify(faldrin)}</pre>
				</code>
			</div>
		</main>
	);
};

export default SheetPage;

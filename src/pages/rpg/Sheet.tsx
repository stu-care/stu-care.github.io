import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "marked-react";
import { Fragment, useEffect } from "react";
import { keyInfo } from "../../content/keyInfo";
import { useApp } from "../../contexts/AppContext";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { useRPG } from "../../contexts/RPGContext";
import type { Character, Characters } from "../../content/characterList";
import useLocalStorage from "../../hooks/useLocalStorage";

export const sheetTitle = (
	<span className="leading-none flex items-baseline gap-2">
		<FontAwesomeIcon
			fixedWidth={true}
			icon={byPrefixAndName.fas["file-spreadsheet"]}
		/>
		Character Sheet
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
		e: React.ChangeEvent<HTMLInputElement>,
		matcher: (character: Character, value: number) => Character,
	) => {
		const updateFaldrin = matcher(
			faldrin,
			Math.floor(Number.parseFloat(e.target.value)),
		);

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
		<main className="grid grid-flow-row auto-rows-auto p-4 gap-4">
			<h2>{faldrin.character.name}</h2>
			<div className="grid grid-cols-1 auto-cols-fr gap-x-4 text-center">
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700 mb-2">
					Level
				</div>
				<div className="grow">
					<input
						className="w-full text-center input input-sm"
						type="number"
						value={faldrin.level}
						onChange={(e) =>
							updateProperty(e, (character, value) => {
								return {
									...character,
									level: value,
								};
							})
						}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 auto-cols-fr gap-x-4 text-center">
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700 mb-2">
					Base HP
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700 mb-2">
					Total HP
				</div>
				<div className="flex justify-stretch items-center gap-2">
					<div className="grow">
						<input
							className="w-full text-center input input-sm"
							type="number"
							value={faldrin.hp.base}
							onChange={(e) =>
								updateProperty(e, (character, value) => {
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
															(value +
																Math.round(character.stats.co.temp / 10)),
													),
												character.hp.maxBase + character.stats.co.total,
											),
										},
									};
								})
							}
						/>
					</div>
					<div>+</div>
					<div className="grow">
						<input
							readOnly={true}
							className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
							type="number"
							value={faldrin.hp.modifier}
						/>
					</div>
				</div>
				<div className="flex justify-stretch gap-2">
					<div className="grow">
						<input
							readOnly={true}
							className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
							type="number"
							value={faldrin.hp.total}
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-8 auto-cols-fr gap-x-1 gap-y-2 items-center">
				<div className="col-span-8 font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Stats
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Stat
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Temp
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Pot
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Mod
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Race
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Misc
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Total
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					DP
				</div>
				{Object.keys(faldrin.stats).map((key) => {
					return (
						<Fragment key={key}>
							<div className="font-bold">{key.toUpperCase()}</div>
							<div className="">
								<input
									className="w-full ps-1 input input-sm"
									type="number"
									value={faldrin.stats[key as keyof typeof faldrin.stats].temp}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
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
														...character.stats[
															key as keyof typeof faldrin.stats
														],
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
							</div>
							<div className="">
								<input
									className="w-full ps-1 input input-sm"
									type="number"
									value={faldrin.stats[key as keyof typeof faldrin.stats].pot}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
											return {
												...character,
												stats: {
													...character.stats,
													[key]: {
														...character.stats[
															key as keyof typeof faldrin.stats
														],
														pot: value,
													},
												},
											};
										});
									}}
								/>
							</div>
							<div className="">
								<input
									readOnly={true}
									className="w-full ps-1 input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={faldrin.stats[key as keyof typeof faldrin.stats].mod}
								/>
							</div>
							<div className="">
								<input
									readOnly={true}
									className="w-full ps-1 input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={faldrin.stats[key as keyof typeof faldrin.stats].race}
								/>
							</div>
							<div className="">
								<input
									className="w-full ps-1 input input-sm"
									type="number"
									value={faldrin.stats[key as keyof typeof faldrin.stats].misc}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
											const updatedCharacter = {
												...character,
												stats: {
													...character.stats,
													[key]: {
														...character.stats[
															key as keyof typeof faldrin.stats
														],
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
							</div>
							<div className="">
								<input
									readOnly={true}
									className="w-full ps-1 input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={
										faldrin.stats[key as keyof typeof faldrin.stats].mod +
										faldrin.stats[key as keyof typeof faldrin.stats].race +
										faldrin.stats[key as keyof typeof faldrin.stats].misc
									}
								/>
							</div>
							{!["co", "sd", "ag", "me", "re"].includes(key) ? (
								<div />
							) : (
								<div className="">
									<input
										readOnly={true}
										className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
										type="number"
										value={calculateDp(
											faldrin.stats[key as keyof typeof faldrin.stats].temp,
										)}
									/>
								</div>
							)}
						</Fragment>
					);
				})}
			</div>
			<div className="grid grid-cols-2 auto-cols-fr gap-x-4 text-center">
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700 mb-2">
					BMR
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700 mb-2">
					Movement
				</div>
				<div className="flex justify-stretch items-center gap-2">
					<div className="grow">
						<input
							className="w-full text-center input input-sm"
							type="number"
							value={faldrin.bmr}
							onChange={(e) => {
								updateProperty(e, (character, value) => {
									return { ...character, bmr: value };
								});
							}}
						/>
					</div>
					<div>+</div>
					<div className="grow">
						<input
							readOnly={true}
							className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
							type="number"
							value={faldrin.stats.qu.total}
						/>
					</div>
				</div>
				<div className="flex justify-stretch gap-2">
					<div className="grow">
						<input
							readOnly={true}
							className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
							type="number"
							value={faldrin.bmr + faldrin.stats.qu.total}
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-7 auto-cols-fr gap-x-1 gap-y-2 items-center">
				<div className="col-span-7 font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Weapons
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Name
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					S Lvl
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Skill
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Stat
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Level
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Misc
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Total
				</div>
				{faldrin.weapons.map((weapon, index) => {
					return (
						<Fragment key={weapon.short}>
							<div className="grow">{weapon.short}</div>
							<div className="grow">
								<input
									className="w-full  ps-1  text-center input input-sm"
									type="number"
									value={weapon.bonuses.level}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
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
																		faldrin.levelBonus[
																			weapon.bonuses.category
																		] +
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
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={calculateSkillRank(weapon.bonuses.level)}
								/>
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={Math.round(
										weapon.bonuses.stats
											.map((stat) => faldrin.stats[stat].total)
											.reduce((acc, cur) => acc + cur, 0) /
											(weapon.bonuses.stats.length || 1),
									)}
								/>
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={
										faldrin.level * faldrin.levelBonus[weapon.bonuses.category]
									}
								/>
							</div>

							<div className="grow">
								<input
									className="w-full  ps-1  text-center input input-sm"
									type="number"
									value={weapon.bonuses.misc}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
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
																		faldrin.levelBonus[
																			weapon.bonuses.category
																		] +
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
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={
										calculateSkillRank(weapon.bonuses.level) +
										Math.round(
											weapon.bonuses.stats
												.map((stat) => faldrin.stats[stat].total)
												.reduce((acc, cur) => acc + cur, 0) /
												(weapon.bonuses.stats.length || 1),
										) +
										faldrin.level *
											faldrin.levelBonus[weapon.bonuses.category] +
										weapon.bonuses.misc
									}
								/>
							</div>
						</Fragment>
					);
				})}
			</div>
			<div className="grid grid-cols-6 auto-cols-fr gap-x-1 gap-y-2 items-center">
				<div className="col-span-6 font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Skills
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					S Lvl
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Skill
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Stat
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Level
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Misc
				</div>
				<div className="font-bold border-b-2 border-b-slate-300 dark:border-b-slate-700">
					Total
				</div>
				{faldrin.skills.map((skill, index) => {
					return (
						<Fragment key={skill.name}>
							<div className="grow col-span-6">{skill.name}</div>
							<div className="grow">
								<input
									className="w-full  ps-1  text-center input input-sm"
									type="number"
									value={skill.level}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
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
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={calculateSkillRank(skill.level)}
								/>
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={Math.round(
										skill.stats
											.map((stat) => faldrin.stats[stat].total)
											.reduce((acc, cur) => acc + cur, 0) /
											(skill.stats.length || 1),
									)}
								/>
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
									value={
										faldrin.level * (faldrin.levelBonus[skill.category] || 0)
									}
								/>
							</div>

							<div className="grow">
								<input
									className="w-full  ps-1  text-center input input-sm"
									type="number"
									value={skill.misc}
									onChange={(e) => {
										updateProperty(e, (character, value) => {
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
							</div>
							<div className="grow">
								<input
									readOnly={true}
									className="w-full text-center input input-sm bg-slate-100 dark:bg-slate-800"
									type="number"
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
							</div>
						</Fragment>
					);
				})}
			</div>
			<div className="w-full overflow-hidden  whitespace-pre-wrap break-all">
				<code>
					<pre className="select-all">{JSON.stringify(faldrin)}</pre>
				</code>
			</div>
		</main>
	);
};

export default SheetPage;

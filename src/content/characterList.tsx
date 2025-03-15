import erjwynImgUrl from "../assets/erjwyn.webp";
import faldrinImgUrl from "../assets/faldrin.webp";
import jascrowImgUrl from "../assets/jascrow.webp";
import rhombusImgUrl from "../assets/rhombus.webp";
import sisuImgUrl from "../assets/sisu.webp";
import trenImgUrl from "../assets/tren.webp";
import { Skill } from "./skillList";

export type StatKeys =
	| "co"
	| "sd"
	| "ag"
	| "me"
	| "re"
	| "st"
	| "qu"
	| "pr"
	| "in"
	| "em";

export type Weapon = {
	type: string;
	short: string;
	specialAbility: string;
	bonuses: {
		total: number;
		level: number;
		stats: StatKeys[];
		misc: number;
		category: string;
	};
};

export type Character = {
	img: { src: string; type: string; alt: string };
	character: {
		player: string;
		name: string;
		race: string;
		profession: string;
		description: string;
		living: boolean;
	};
	bmr: number;
	level: number;
	hp: { base: number; modifier: number; total: number; maxBase: number };
	weapons: Weapon[];
	ap: number;
	skills: {
		name: string;
		total: number;
		button: boolean;
		level: number;
		stats: StatKeys[];
		misc: number;
		category: string;
	}[];
	stats: {
		[key in StatKeys]: {
			temp: number;
			pot: number;
			mod: number;
			race: number;
			misc: number;
			total: number;
			dp?: number;
		};
	};
	primeRequisits: StatKeys[];
	levelBonus: Record<string, number>;
};

export type GenericCharacter = Omit<
	Character,
	| "bmr"
	| "weapons"
	| "stats"
	| "ap"
	| "hp"
	| "primeRequisits"
	| "levelBonus"
	| "level"
	| "skills"
>;

export type Characters = { [key: string]: Character | GenericCharacter };

export const characterList: Characters = {
	faldrin: {
		level: 4,
		img: {
			src: faldrinImgUrl,
			type: "image/webp",
			alt: "Faldrin Hugmyndir",
		},
		character: {
			player: "Stu",
			name: "Faldrin",
			race: "Dwarf",
			profession: "Fighter",
			living: true,
			description:
				"Faldrin is a short but stocky dwarf with a long dark beard and long dark hair. He is a fighter,wields a battle axe and a hammer and wears leather armour stained green.",
		},
		bmr: 35,
		ap: 16,
		hp: { base: 52, modifier: 10, total: 90, maxBase: 120 },
		levelBonus: { com: 3, ath: 2, bd: 3, dead: 1, out: 1 },
		weapons: [
			{
				type: "Battle Axe (Two Handed)",
				short: "Battle Axe",
				specialAbility: "+10 Non-Magic Ability",
				bonuses: {
					stats: ["st", "st", "ag"],
					level: 9,
					misc: 10,
					total: 94,
					category: "com",
				},
			},
			{
				type: "Hammer (One Handed Concussion)",
				short: "Hammer",
				specialAbility: "+10 Non-Magic Ability",
				bonuses: {
					stats: ["st", "st", "ag"],
					level: 8,
					misc: 10,
					total: 89,
					category: "com",
				},
			},
			{
				type: "Light Crossbow (Bow)",
				short: "Crossbow",
				specialAbility: "",
				bonuses: {
					stats: ["st", "st", "ag"],
					level: 1,
					misc: 0,
					total: 44,
					category: "com",
				},
			},
		],
		skills: [
			{
				name: "General Perception",
				total: 35,
				button: true,
				level: 7,
				stats: ["in", "in", "re"],
				misc: 0,
				category: "per",
			},
			{
				name: "Adrenal M Quick draw",
				total: 8,
				button: true,
				level: 1,
				stats: ["pr", "sd"],
				misc: 0,
				category: "conc",
			},
			{
				name: "Adrenal M Speed",
				total: 8,
				button: true,
				level: 1,
				stats: ["pr", "sd"],
				misc: 0,
				category: "conc",
			},
			{
				name: "Adrenal M Strength",
				total: 8,
				button: true,
				level: 1,
				stats: ["pr", "sd"],
				misc: 0,
				category: "conc",
			},
			{
				name: "Body Damage Stabilise",
				total: 5,
				button: true,
				level: 1,
				stats: ["sd", "em"],
				misc: 0,
				category: "conc",
			},
			{
				name: "Stunned Maneuvering",
				total: 27,
				button: true,
				level: 1,
				stats: ["sd"],
				misc: 0,
				category: "com",
			},

			{
				name: "Detect Traps",
				total: 5,
				button: false,
				level: 1,
				stats: ["in"],
				misc: 0,
				category: "per",
			},
			{
				name: "Disarm Trap",
				total: 5,
				button: false,
				level: 1,
				stats: ["in", "ag"],
				misc: 0,
				category: "sub",
			},
			{
				name: "Set Traps",
				total: 5,
				button: false,
				level: 1,
				stats: ["re", "ag"],
				misc: 0,
				category: "sub",
			},

			{
				name: "Armour Evaluation",
				total: 20,
				button: true,
				level: 4,
				stats: ["in", "re"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Metal Evaluation",
				total: 10,
				button: true,
				level: 2,
				stats: ["in", "re"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Stone Evaluation",
				total: 5,
				button: true,
				level: 1,
				stats: ["in", "re"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Weapon Evaluation",
				total: 20,
				button: true,
				level: 4,
				stats: ["in", "re"],
				misc: 0,
				category: "gen",
			},

			{
				name: "Climbing",
				total: 13,
				button: true,
				level: 1,
				stats: ["ag"],
				misc: 0,
				category: "ath",
			},
			{
				name: "Disarm Foe, Armed",
				total: 17,
				button: true,
				level: 1,
				stats: ["ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "Hostile Environments",
				total: 14,
				button: true,
				level: 1,
				stats: ["ag", "sd"],
				misc: 0,
				category: "out",
			},
			{
				name: "Missile Artillery",
				total: 17,
				button: true,
				level: 1,
				stats: ["in", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "Physics",
				total: 10,
				button: true,
				level: 1,
				stats: ["re", "me"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Riding",
				total: 4,
				button: true,
				level: 1,
				stats: ["em", "ag"],
				misc: 0,
				category: "out",
			},
			{
				name: "Rope Mastery",
				total: 10,
				button: true,
				level: 1,
				stats: ["me", "ag"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Siege Engineer",
				total: 5,
				button: true,
				level: 1,
				stats: ["re", "in"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Smithing",
				total: 25,
				button: true,
				level: 1,
				stats: ["st", "ag"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Stalk/Hide",
				total: 10,
				button: true,
				level: 1,
				stats: ["ag", "sd"],
				misc: 0,
				category: "sub",
			},
			{
				name: "Swimming",
				total: 13,
				button: true,
				level: 1,
				stats: ["ag"],
				misc: 0,
				category: "ath",
			},
			{
				name: "Trading",
				total: 0,
				button: true,
				level: 1,
				stats: ["re", "em"],
				misc: 0,
				category: "ling",
			},
			{
				name: "Two Weapon Combo",
				total: 37,
				button: true,
				level: 1,
				stats: ["st"],
				misc: 0,
				category: "com",
			},

			{
				name: "Pick Lock",
				total: -25,
				button: false,
				level: 0,
				stats: ["in", "re", "ag"],
				misc: 0,
				category: "sub",
			},
			{
				name: "Tumbling",
				total: 23,
				button: false,
				level: 2,
				stats: ["ag", "sd"],
				misc: 0,
				category: "ath",
			},
			{
				name: "Tumbling Attack",
				total: 37,
				button: false,
				level: 1,
				stats: ["ag", "st"],
				misc: 0,
				category: "com",
			},
			{
				name: "Tumbling Evasion",
				total: 27,
				button: false,
				level: 2,
				stats: ["ag", "qu"],
				misc: 0,
				category: "com",
			},
			{
				name: "Runes",
				total: -30,
				button: false,
				level: 0,
				stats: ["em", "in"],
				misc: 0,
				category: "mag",
			},
			{
				name: "Ambush",
				total: -21,
				button: false,
				level: 0,
				stats: [],
				misc: 0,
				category: "dead",
			},
			{
				name: "Adrenal M Balance",
				total: -22,
				button: false,
				level: 0,
				stats: ["pr", "sd"],
				misc: 0,
				category: "con",
			},
			{
				name: "Adrenal M Landing",
				total: -22,
				button: false,
				level: 0,
				stats: ["pr", "sd"],
				misc: 0,
				category: "con",
			},
			{
				name: "Adrenal M Leaping",
				total: -22,
				button: false,
				level: 0,
				stats: ["pr", "sd"],
				misc: 0,
				category: "con",
			},
			{
				name: "Adrenal Defence",
				total: -25,
				button: false,
				level: 0,
				stats: [],
				misc: 0,
				category: "con",
			},
			{
				name: "Channeling",
				total: -25,
				button: false,
				level: 0,
				stats: ["in"],
				misc: 0,
				category: "mag",
			},
			{
				name: "Directed Spells",
				total: -25,
				button: false,
				level: 0,
				stats: ["ag"],
				misc: 0,
				category: "mag",
			},
			{
				name: "MA Strikes R1",
				total: 14,
				button: false,
				level: 0,
				stats: ["st", "st", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Strikes R2",
				total: 14,
				button: false,
				level: 0,
				stats: ["st", "st", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Strikes R3",
				total: 14,
				button: false,
				level: 0,
				stats: ["st", "st", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Strikes R4",
				total: 14,
				button: false,
				level: 0,
				stats: ["st", "st", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Sweeps & Th R1",
				total: 0,
				button: false,
				level: 0,
				stats: ["st", "ag", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Sweeps & Th R2",
				total: 0,
				button: false,
				level: 0,
				stats: ["st", "ag", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Sweeps & Th R3",
				total: 0,
				button: false,
				level: 0,
				stats: ["st", "ag", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "MA Sweeps & Th R4",
				total: 0,
				button: false,
				level: 0,
				stats: ["st", "ag", "ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "Animal Handling",
				total: -29,
				button: false,
				level: 0,
				stats: ["em", "pr"],
				misc: 0,
				category: "com",
			},
			{
				name: "Appraisal",
				total: -20,
				button: false,
				level: 0,
				stats: ["re", "me"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Brawling",
				total: -13,
				button: false,
				level: 0,
				stats: ["re", "in"],
				misc: 0,
				category: "com",
			},
			{
				name: "Caving",
				total: -16,
				button: false,
				level: 0,
				stats: ["sd", "re"],
				misc: 0,
				category: "out",
			},
			{
				name: "Cookery",
				total: -25,
				button: false,
				level: 0,
				stats: ["re", "ag"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Crafting",
				total: -20,
				button: false,
				level: 0,
				stats: ["ag", "sd"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Disarm Foe, Unarmed",
				total: -13,
				button: false,
				level: 0,
				stats: ["ag"],
				misc: 0,
				category: "com",
			},
			{
				name: "Engineering",
				total: -20,
				button: false,
				level: 0,
				stats: ["re", "me"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Falsification",
				total: -20,
				button: false,
				level: 0,
				stats: ["sd", "re"],
				misc: 0,
				category: "sub",
			},
			{
				name: "First Aid",
				total: -25,
				button: false,
				level: 0,
				stats: ["sd", "em"],
				misc: 0,
				category: "med",
			},
			{
				name: "Frenzy",
				total: -25,
				button: false,
				level: 0,
				stats: ["em", "sd"],
				misc: 0,
				category: "con",
			},
			{
				name: "Hide Item",
				total: -25,
				button: false,
				level: 0,
				stats: ["re", "in"],
				misc: 0,
				category: "sub",
			},
			{
				name: "Loading",
				total: -26,
				button: false,
				level: 0,
				stats: ["em", "re"],
				misc: 0,
				category: "out",
			},
			{
				name: "Mechanition",
				total: -25,
				button: false,
				level: 0,
				stats: ["re", "ag"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Metal Lore",
				total: -20,
				button: false,
				level: 0,
				stats: ["me", "re"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Mining",
				total: -25,
				button: false,
				level: 0,
				stats: ["re", "in"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Rappelling",
				total: -17,
				button: false,
				level: 0,
				stats: ["ag"],
				misc: 0,
				category: "ath",
			},
			{
				name: "Reverse Stroke",
				total: -13,
				button: false,
				level: 0,
				stats: ["ag", "re"],
				misc: 0,
				category: "com",
			},
			{
				name: "Stone Crafts",
				total: -20,
				button: false,
				level: 0,
				stats: ["sd", "ag"],
				misc: 0,
				category: "gen",
			},
			{
				name: "Stone Lore",
				total: -20,
				button: false,
				level: 0,
				stats: ["me", "re"],
				misc: 0,
				category: "acad",
			},
			{
				name: "Yado",
				total: -8,
				button: false,
				level: 0,
				stats: ["qu", "ag"],
				misc: 0,
				category: "com",
			},
		],
		stats: {
			co: {
				temp: 96,
				pot: 96,
				mod: 15,
				race: 15,
				misc: 15,
				total: 45,
				dp: 9,
			},
			sd: {
				temp: 82,
				pot: 82,
				mod: 5,
				race: 5,
				misc: 0,
				total: 10,
				dp: 7,
			},
			ag: {
				temp: 72,
				pot: 72,
				mod: 0,
				race: -5,
				misc: 5,
				total: 0,
				dp: 6,
			},
			me: {
				temp: 92,
				pot: 97,
				mod: 10,
				race: 0,
				misc: 0,
				total: 10,
				dp: 8,
			},
			re: {
				temp: 71,
				pot: 75,
				mod: 0,
				race: 0,
				misc: 0,
				total: 0,
				dp: 6,
			},
			st: { temp: 100, pot: 100, mod: 25, race: 5, misc: 10, total: 40 },
			qu: { temp: 95, pot: 95, mod: 15, race: -5, misc: 0, total: 10 },
			pr: { temp: 89, pot: 89, mod: 5, race: -10, misc: 0, total: -5 },
			in: { temp: 74, pot: 74, mod: 0, race: 0, misc: 0, total: 0 },
			em: { temp: 51, pot: 51, mod: 0, race: -10, misc: 0, total: -10 },
		},
		primeRequisits: ["co", "sd"],
	},
	jascrow: {
		img: {
			src: jascrowImgUrl,
			type: "image/webp",
			alt: "Jascrow",
		},
		character: {
			player: "Mick",
			name: "Jascrow",
			race: "Human",
			profession: "Thief",
			living: true,
			description:
				"Jascrow is a common man wearing leather armour, a cloak and a hood. He is a thief and is laden with daggers and kaynak(?)s all over, he is always looking for a way to make money.",
		},
	},
	erjwyn: {
		img: {
			src: erjwynImgUrl,
			type: "image/webp",
			alt: "Erjwyn",
		},
		character: {
			player: "Matt",
			name: "Erjwyn",
			race: "Wood Elf",
			profession: "Ranger",
			living: true,
			description:
				"A gloriously beautiful ranger who is very effective with a bow, quiet and secretive he is not a mssive fan of humans.",
		},
	},
	sisu: {
		img: {
			src: sisuImgUrl,
			type: "image/webp",
			alt: "Sisu",
		},
		character: {
			player: "Kurt",
			name: "Sisu",
			race: "Human",
			profession: "Fighter",
			living: true,
			description:
				"Sisu is a 6ft8 Talath (?). At around 30yo he has blonde hair blue eyes and is lumberjack turned fighter. Clad in woven clothes and chainmail armour he wields a two-handed sword and a mace. Sisu's strength is enough to wield his sword one-handed but it leaves him short fused.",
		},
	},
	rhombus: {
		img: {
			src: rhombusImgUrl,
			type: "image/webp",
			alt: "Rhombus",
		},
		character: {
			player: "Jacob",
			name: "Rhombus",
			race: "Human",
			profession: "Fighter",
			living: true,
			description:
				"Kaidu (?), tall and pale with a slightly creepy aura. He is froma reclusive orfder of knights and has a strong sense of duty especially in his duty to rid the world of criminality. He is traveling as a part of his duty to his order. Blunt but doesn't get sarcasm. Clad in chainmail, boots, a black cloak and a closed face helmet, he mostly  wears plain robes in his downtime. He wields a Broadsword, shield and a one-handed hammer.",
		},
	},
	tren: {
		img: {
			src: trenImgUrl,
			type: "image/webp",
			alt: "Tren",
		},
		character: {
			player: "TBC",
			name: "Tren",
			race: "High Elf",
			profession: "Mage",
			living: true,
			description:
				"Tren is a Louri (?) elven wizard. He is older but is still a handsome man with black hair and brown eyes. He dresses in gray robes and soft leather boots, he has a staff and a satchel, very rarely does he reach for his short sword. He reads a lot but is otherwsie absent minded and very distractable.",
		},
	},
};

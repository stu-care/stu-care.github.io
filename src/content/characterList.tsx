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
		skill: number;
		stat: number;
		level: number;
		item: number;
		total: number;
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
	weapons: Weapon[];
	ap: number;
	skills?: { name: string; total: number; button: boolean }[];
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
};

export type GenericCharacter = Omit<
	Character,
	"bmr" | "weapons" | "stats" | "ap"
>;

export type Characters = { [key: string]: Character | GenericCharacter };

export const characterList: Characters = {
	faldrin: {
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
		bmr: 40,
		ap: 16,
		weapons: [
			{
				type: "Battle Axe (Two Handed)",
				short: "Battle Axe",
				specialAbility: "+10 Non-Magic Ability",
				bonuses: {
					skill: 45,
					stat: 27,
					level: 12,
					item: 10,
					total: 94,
				},
			},
			{
				type: "Hammer (One Handed Concussion)",
				short: "Hammer",
				specialAbility: "+10 Non-Magic Ability",
				bonuses: {
					skill: 40,
					stat: 27,
					level: 12,
					item: 10,
					total: 89,
				},
			},
			{
				type: "Light Crossbow (Bow)",
				short: "Crossbow",
				specialAbility: "",
				bonuses: {
					skill: 5,
					stat: 27,
					level: 12,
					item: 0,
					total: 44,
				},
			},
		],
		skills: [
			{ name: "General Perception", total: 35, button: true },
			{ name: "Adrenal M Quick draw", total: 8, button: true },
			{ name: "Adrenal M Speed", total: 8, button: true },
			{ name: "Adrenal M Strength", total: 8, button: true },
			{ name: "Body Damage Stabilise", total: 5, button: true },
			{ name: "Stunned Maneuvering", total: 27, button: true },

			{ name: "Detect Traps", total: 5, button: false },
			{ name: "Disarm Trap", total: 5, button: false },
			{ name: "Set Traps", total: 5, button: false },

			{ name: "Armour Evaluation", total: 20, button: true },
			{ name: "Metal Evaluation", total: 10, button: true },
			{ name: "Stone Evaluation", total: 5, button: true },
			{ name: "Weapon Evaluation", total: 20, button: true },

			{ name: "Climbing", total: 13, button: true },
			{ name: "Disarm Foe, Armed", total: 17, button: true },
			{ name: "Hostile Environments", total: 14, button: true },
			{ name: "Missile Artillery", total: 17, button: true },
			{ name: "Physics", total: 10, button: true },
			{ name: "Riding", total: 4, button: true },
			{ name: "Rope Mastery", total: 10, button: true },
			{ name: "Siege Engineer", total: 5, button: true },
			{ name: "Smithing", total: 25, button: true },
			{ name: "Stalk/Hide", total: 10, button: true },
			{ name: "Swimming", total: 13, button: true },
			{ name: "Trading", total: 0, button: true },
			{ name: "Two Weapon Combo", total: 37, button: true },

			{ name: "Pick Lock", total: -25, button: false },
			{ name: "Tumbling", total: 23, button: false },
			{ name: "Tumbling Attack", total: 37, button: false },
			{ name: "Tumbling Evasion", total: 27, button: false },
			{ name: "Runes", total: -30, button: false },
			{ name: "Staves & wands", total: -30, button: false },
			{ name: "Ambush", total: -21, button: false },
			{ name: "Adrenal M Balance", total: -22, button: false },
			{ name: "Adrenal M Landing", total: -22, button: false },
			{ name: "Adrenal M Leaping", total: -22, button: false },
			{ name: "Adrenal Defence", total: -25, button: false },
			{ name: "Channeling", total: -25, button: false },
			{ name: "Directed Spells ", total: -25, button: false },
			{ name: "MA Strikes R1", total: 14, button: false },
			{ name: "MA Strikes R2", total: 14, button: false },
			{ name: "MA Strikes R3", total: 14, button: false },
			{ name: "MA Strikes R4", total: 14, button: false },
			{ name: "MA Sweeps & Th R1", total: 0, button: false },
			{ name: "MA Sweeps & Th R2", total: 0, button: false },
			{ name: "MA Sweeps & Th R3", total: 0, button: false },
			{ name: "MA Sweeps & Th R4", total: 0, button: false },
			{ name: "Animal Handling", total: -29, button: false },
			{ name: "Appraisal", total: -20, button: false },
			{ name: "Brawling", total: -13, button: false },
			{ name: "Caving", total: -16, button: false },
			{ name: "Cookery", total: -25, button: false },
			{ name: "Crafting", total: -20, button: false },
			{ name: "Disarm Foe, Unarmed", total: -13, button: false },
			{ name: "Engineering", total: -20, button: false },
			{ name: "Falsification", total: -20, button: false },
			{ name: "First Aid", total: -25, button: false },
			{ name: "Frenzy", total: -25, button: false },
			{ name: "Hide Item", total: -25, button: false },
			{ name: "Loading", total: -26, button: false },
			{ name: "Mechanition", total: -25, button: false },
			{ name: "Metal Lore", total: -20, button: false },
			{ name: "Mining", total: -25, button: false },
			{ name: "Rappelling", total: -17, button: false },
			{ name: "Reverse Stroke", total: -13, button: false },
			{ name: "Stone Crafts", total: -20, button: false },
			{ name: "Stone Lore", total: -20, button: false },
			{ name: "Yado", total: -8, button: false },
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

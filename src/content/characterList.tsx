import erjwynImgUrl from "../assets/erjwyn.webp";
import faldrinImgUrl from "../assets/faldrin.webp";
import jascrowImgUrl from "../assets/jascrow.webp";
import rhombusImgUrl from "../assets/rhombus.webp";
import sisuImgUrl from "../assets/sisu.webp";
import trenImgUrl from "../assets/tren.webp";

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
					skill: 35,
					stat: 27,
					level: 9,
					item: 10,
					total: 81,
				},
			},
			{
				type: "Hammer (One Handed Concussion)",
				short: "Hammer",
				specialAbility: "+10 Non-Magic Ability",
				bonuses: {
					skill: 30,
					stat: 27,
					level: 9,
					item: 10,
					total: 76,
				},
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
				temp: 68,
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

import faldrinImgUrl from "../assets/faldrin.webp";
import erjwynImgUrl from "../assets/erjwyn.webp";
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
            description: ``,
        },
        bmr: 40,
        ap: 16,
        weapons: [
            {
                type: "Battle Axe (Two Handed)",
                short: "Battle Axe",
                specialAbility: "+10 Non-Magic Ability",
                bonuses: {
                    skill: 15,
                    stat: 27,
                    level: 3,
                    item: 10,
                    total: 55,
                },
            },
            {
                type: "Hammer (One Handed Concussion)",
                short: "Hammer",
                specialAbility: "+10 Non-Magic Ability",
                bonuses: {
                    skill: 10,
                    stat: 27,
                    level: 3,
                    item: 10,
                    total: 50,
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
                temp: 87,
                pot: 97,
                mod: 5,
                race: 0,
                misc: 0,
                total: 4,
                dp: 8,
            },
            re: {
                temp: 50,
                pot: 75,
                mod: 0,
                race: 0,
                misc: 0,
                total: 0,
                dp: 5,
            },
            st: { temp: 100, pot: 100, mod: 25, race: 5, misc: 10, total: 40 },
            qu: { temp: 95, pot: 95, mod: 15, race: -5, misc: 0, total: 10 },
            pr: { temp: 87, pot: 89, mod: 5, race: -10, misc: 0, total: -5 },
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
            description: ``,
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
            description: ``,
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
            description: ``,
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
            description: ``,
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
            description: ``,
        },
    },
};

import faldrinImgUrl from "../assets/faldrin.webp";

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
        name: string;
        race: string;
        profession: string;
        description: string;
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

export type Characters = { [key: string]: Character };

export const characterList: Characters = {
    faldrin: {
        img: {
            src: faldrinImgUrl,
            type: "image/webp",
            alt: "Faldrin Hugmyndir",
        },
        character: {
            name: "Faldrin Hugmyndir",
            race: "Dwarf",
            profession: "Fighter",
            description: `### Origin and Setting:\n\nFaldrin Hugmyndir hails from the Iron Shield clan, a prominent group of dwarves living in the fortress city of Karak Dum. This city is found roughly 100 miles north of Haaikitaine in the Grey Mountains, a vast range that stretches from the far north to the southern coast. The Grey Mountains are home to a dozen dwarven clans, all part of the Grey Mountain Dwarven mines.
### Personal History:\n\nGrowing up in Karak Dum, Faldrin was surrounded by the sturdy stone walls and the rich culture of his clan. The dwarves of Karak Dum are known for their artisanry, mining skills, and warrior spirit. Faldrin was no different, spending his early years learning the arts of combat, the intricacies of armour usage, and the physical conditioning necessary for a life in the mountains. His small stocky stature was never a hindrance; instead, it gave him an advantage in strength and constitution, traits he honed to perfection.\n\nDespite the typical dwarven inclination to remain within their mountain strongholds, Faldrin felt a growing urge for adventure. Tales of distant lands, magical artifacts, and epic battles fuelled his desire to see the world beyond the Grey Mountains. After much deliberation, he decided to leave the safety of Karak Dum and embark on his own adventure.
### Starting the Adventure:\n\nFaldrin chose the human city of Haaikitaine as his first destination. The bustling city, with its diverse population and vibrant culture, seemed like the perfect place to start his journey. Packing his belongings, including his trusted armour and weapons, Faldrin set off towards Haaikitaine with a mix of excitement and apprehension.\n\nUpon arriving in Haaikitaine, Faldrin found a cozy inn where he planned to spend a few days acclimating to the unfamiliar environment. The city was a stark contrast to the fortress of Karak Dum, filled with sounds, smells, and sights he had never experienced before. He intended to explore the city's many taverns, hoping to meet new people, hear new stories, and perhaps find companions for his future adventures.
### Personality Traits:
- Curious: Faldrin's curiosity drives him to explore and learn as much as possible about the world around him.
- Resilient: Despite his physical challenges, especially with riding, Faldrin is determined and resilient, never giving up easily.
- Loyal: He values loyalty and is fiercely protective of his friends and allies.
### Appearance:\n\nFaldrin Hugmyndir stands at 4'5" and weighs around 160lbs, with a stocky and muscular build typical of his dwarven heritage. His thick, black hair, though somewhat kept, is more functional than decorative, often tied back in a simple, no-nonsense manner. His beard, also black and modestly groomed, is practical rather than ornamental, lacking the intricate braids and adornments that many other dwarves of higher appearance might boast. Though mostly hidden by facial hair his ruddy complexion comes through across the upper half of his face. His eyes are deep-set, muddy, darkened shade of brown, reminiscent of the mud excavated to form the mines of Karak Dum.\n\nFaldrin's general unkemptness is notable even for a dwarf, though he adorns plenty of the symbols of the clan, he stands out amongst his kin, possibly a symbol of his desire to explore and not fit in.\n\nDespite his relatively youthful age of 47 in dwarven years, Faldrin's face is rugged and worn, showing the early signs of lines and a few scars from his training battles and early explorations. His skin is fair but marked with the roughness of someone who spends a lot of time in harsh conditions. He might not be considered attractive by many, but his appearance speaks of a life of hard work and dedication.
#### Attire:\n\nFaldrin wears a set of well-crafted, lightweight armour that allows for mobility while providing necessary protection. The armour is adorned with symbols of the Iron Shield clan, proudly displaying his heritage. He also carries a sturdy and powerful war-hammer crafted in the forges of Karak Dum.
### Connections to the World:\n\nFaldrin has heard of the Loremasters and the Navigators, powerful figures in Kulthea who control and understand the Essænce. He dreams of one day meeting them and perhaps learning from their vast stores of knowledge.
### Conclusion:\n\nFaldrin Hugmyndir is a young adventurer from the Iron Shield clan, embarking on a journey to explore the world beyond the Grey Mountains. His strong will, curiosity, and loyalty make him a valuable companion and a formidable opponent. As he navigates the new and unfamiliar terrains of Kulthea, Faldrin's story is just beginning, filled with potential for growth, discovery, and epic adventures.`,
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
};

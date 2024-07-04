import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import faldrinImgUrl from "../assets/faldrin.webp";

export const GameContext = createContext(undefined);

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGameContext must be used within an GameProvider");
    }
    return context;
};

const characterList = [
    {
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
            in: { temp: 74, pot: 47, mod: 0, race: 0, misc: 0, total: 0 },
            em: { temp: 51, pot: 51, mod: 0, race: -10, misc: 0, total: -10 },
            ap: { temp: 16 },
        },
    },
];

const scenario = {
    title: "The Battle for Rhakann",
    description: `### Political situation:\n\nWhile Rhakann has been in decline in recent centuries the Emperor Jerrin Arej Malvion Faslurin VII remains ostensibly the most powerful person in all of Jaiman. While he is still young at only 25, he has proved an adept diplomat and has managed to evade half a dozen assassination attempts.\n\nKing Kier if of U-Lyshak is currently at war with Saralis, however Saralis has managed to recruit a sizable army of mercenaries to bolster their forces and is slowly winning the war.\n\nKing Kier is in desperate need of aid so has approached Jerrin Faslurin VII of Rhakhaan asking for an alliance. Jerrin agrees to this, but only if King Kier acknowledges Jerrin as Emperor and that U-Lyshak becomes a vassal state.  Kier accepts the terms, but in return wants both the province of Belloriam and the Duchy of Boeltraice, both of which was once part of the kingdom of U-Lyshak. Jerrin agrees, so an alliance is formed, and Jerrin immediately starts to raise an army.\n\nTaxes have risen and King Jerrin has called for all his Nobility to provide Knights and men at arms from their personal retinues and has pledged to send 4 out of the 6 imperial legions. The main staging area for the army is just outside of the port city of Ixbridge, as the plan is to move the bulk of the army by ship to the Port of Trollsbridge.
### Religion:\n\nAll the major and many minor deities are worshiped and covered in detail in the players handbook.
### Society:\n\nRhakhann is a Feudal society, with the emperor sat at the top then the rest of the Royal family then the Dukes, Marquese's, counts, viscounts, Barons and lords. The Duchies are all hereditary titles and usually handed down from farther to son as are some of the lesser titles, the rest are all life peerages that revert to the emperor on the death of the title holder. Generally, unless they have fallen out of favour the title is handed back to the eldest male of the family. There is one exception to this rule and that is the Viscountess of Syrda'an. Not only does she hold a hereditary title it is the only title that is handed down to the oldest female of the family.\n\nCrime in the cities and countryside have risen, especially in Haalkitaine, which is in part down to the fact the king has stripped the more experienced guards from the city watch and enlisted them in his new army.\n\nThe main king's highway is still patrolled as are some of the more important trade routes, but outside of this traveling in small groups has become very dangerous, so now most trade caravans' group together in large caravans.
### Commerce:\n\nRhakhaan is a rich and vibrant country. The heart of the old empire it has had the least disruption and pretty much remains within its original borders.  Despite the fact large parts of the land are covered in forest it has vast areas of fertile lands and is home to many cultures and races. It also has several major and minor cities and imports and exports pretty much all manner of goods. \n\nThe City of Haalkitaine is the capital and situation in the northeast of the country. It is the home to the royal family and the royal court and most of the noble families have residences in the capital as well as country estates. \n\nThe City of Lethys which dominates the Ney Bay is not only the largest city on the continent it also has the biggest seaport. A thriving and bustling city which is not only a major trading centre but also home to all the main banking and finance institutes. 
### Travel:\n\nThe main king's highway is well constructed with raised stone cobbles, good drainage and stretches to over 30 feet across and in the main well maintained. There are plenty of small villages & caravan stops normally every 20 to 30 miles and every 75 miles you will find a small, garrisoned fort which houses the local military highway guards, although even they have not gone untouched and have also recently been stripped of the more experience guards.\n\nThe other major roads are not as well maintained as the king's highway, but in the main still in good shape. Patrols are ad hoc and normally only conducted if there has been an increase in bandit activity. Villages are much more spread out and in frequent. \n\nAll other roads are in mixed condition.\n\nApart from the common methods of travel, for those that can afford it, all the major cities in Rhakhaan have sky ports and access to Eidolon Sky ships. This is very expensive, but a quicker (And safer) means of transport. And for those who few who have very deep pockets there is of course also Navigators. This is by far the quickest way to travel, although not without its risks. 
`,
    characters: characterList,
};

const currency = {
    rates: {
        mp: 10000,
        gp: 100,
        sp: 10,
        bp: 1,
        cp: 0.1,
        tp: 0.01,
        ip: 0.001,
    },
    abbreviations: {
        mp: "Mithril Piece",
        gp: "Gold Piece",
        sp: "Silver Piece",
        bp: "Bronze Piece",
        cp: "Copper Piece",
        tp: "Tin Piece",
        ip: "Iron Piece",
    },
    parseValueAbbr: function (valueAbbr) {
        const amount = parseFloat(valueAbbr);
        const abbr = valueAbbr.replace(amount, "").trim();
        if (isNaN(amount) || !this.rates[abbr]) {
            throw new Error("Invalid value abbreviation");
        }
        return { amount, abbr };
    },
    convert: function (amount, from, to) {
        if (!this.rates[from] || !this.rates[to]) {
            throw new Error("Invalid currency abbreviation");
        }
        const baseAmount = amount * this.rates[from];
        const convertedAmount = baseAmount / this.rates[to];
        return convertedAmount;
    },
};

String.prototype.to = function (toAbbr) {
    const { amount, abbr } = currency.parseValueAbbr(this);
    const convertedAmount = currency.convert(amount, abbr, toAbbr);
    return `${convertedAmount}${toAbbr}`;
};

export const GameProvider = ({ children }) => {
    const [characters, setCharacters, clearCharacters] = useLocalStorage(
        "rm.characters",
        characterList.map(({ character }) => character.name)
    );

    const [rollsHistory, setRollsHistory, clearRollsHistory] = useLocalStorage(
        "rm.rolls",
        []
    );

    const [selectedCharacter, setSelectedCharacter, clearSelectedCharacter] =
        useLocalStorage("rm.selectedCharacter", null);

    const selectCharacter = (characterName) => {
        setSelectedCharacter(
            characterList.find(
                ({ character }) => character.name === characterName
            )
        );
    };

    const reset = () => {
        setCharacters(characterList.map(({ character }) => character.name));
        setSelectedCharacter(null);
    };

    useEffect(() => {
        console.log("selectedCharacter:", selectedCharacter);
    }, [selectedCharacter]);

    return (
        <GameContext.Provider
            value={{
                characters,
                selectedCharacter,
                selectCharacter,
                rollsHistory,
                setRollsHistory,
                scenario,
                currency,
                reset,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

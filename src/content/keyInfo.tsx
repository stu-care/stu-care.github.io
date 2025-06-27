import isabelleImgUrl from "../assets/isabelle.webp";
import ramsImgUrl from "../assets/rams.webp";
import ronImgUrl from "../assets/ron.webp";
import twinsImgUrl from "../assets/twins.webp";
import { characterList } from "./characterList";

export type info = {
	name: string;
	type: string;
	description: string;
	img?: { src: string; type: string; alt: string };
};

export const keyInfo: info[] = [];

for (const { character, img } of Object.values(characterList)) {
	keyInfo.push({
		name: character.name,
		type: "Character",
		description: character.description,
		img: img,
	});
}

keyInfo.push(
	...[
		{
			name: "The Ram's Fleece",
			type: "Location",
			description:
				"The Ram's Fleece is a rustic Inn in the heart of Haalkitaine. Originally owned by the late Ron, this is now being run by the Thieves guild, headed up by Benk. The Inn has multiple rooms, dorms, a bath house, private room, taproom and stables.",
			img: { src: ramsImgUrl, alt: "The Ram's Fleece", type: "image/webp" },
		},
		{
			name: "Ron (deceased)",
			type: "NPC",
			description:
				"Ron (deceased) is the innkeeper of The Ram's Fleece. He acted as a suggogate godfather to Isabelle and employed Molly (deceased) and Mabel (deceased). To help him run the inn.",
			img: { src: ronImgUrl, alt: "Ron", type: "image/webp" },
		},
		{
			name: "Molly (deceased)",
			type: "NPC",
			description:
				"Molly (deceased) was staff at The Ram's Fleece and was killed alongside Ron and her twin sister Mabel. She was eyes and ears for an information dealing sect called the Truth Takers. It is likely their dealings lead to their own and Ron's deaths.",
			img: { src: twinsImgUrl, alt: "Molly & Mabel", type: "image/webp" },
		},
		{
			name: "Mabel (deceased)",
			type: "NPC",
			description:
				"Mabel (deceased) was staff at The Ram's Fleece and was killed alongside Ron and her twin sister Molly. She was eyes and ears for an information dealing sect called the Truth Takers. It is likely their dealings lead to their own and Ron's deaths.",
			img: { src: twinsImgUrl, alt: "Molly & Mabel", type: "image/webp" },
		},
		{
			name: "Isabelle",
			type: "NPC",
			description:
				'Isabelle was the "goddaughter" of Ron. She is in-fact potentially the heir to a title passed down the maternal line. She is a healer with a magical pendent. If she is the daughter of Lady Sarah, she was supposed to have died in childhood but her death certificate shows an image of a girl but with the written gender of a boy.',
			img: { src: isabelleImgUrl, alt: "Isabelle", type: "image/webp" },
		},
		{
			name: "Finn",
			type: "NPC",
			description:
				"Finn is a member of the Thieves Guild who (Benk's good one). He helped us get into the catacombes to free Isabelle (alongside Lord Glund's son Lord Derek).",
		},
		{
			name: "Benk",
			type: "NPC",
			description:
				"Benk is the head of one of the Thieves Guilds in Haalkitaine.",
		},
		{
			name: "Zane",
			type: "NPC",
			description:
				"Zane is a member of the opposing Thieves Guild in Haalkitaine. He was likely responsible for the death of Ron, Molly, Mabel, Benk and the previous inprisonment of Isabelle.",
		},
		{
			name: "Lord Glund",
			type: "NPC",
			description:
				"Lord Glund was the magistrate in Haalkitaine. He is the father of Lord Derek who was previously inprisoned by Zane for a tidy ransom. Lord Glund has been called upon to bring a retinue to help with the war.",
		},
		{
			name: "Lord Derek",
			type: "NPC",
			description:
				"Lord Derek is the son of Lord Glund. He was previously inprisoned by Zane for a tidy ransom.",
		},
		{
			name: "Lady Jane",
			type: "NPC",
			description:
				"Lady Jane of Meth-Maron is the Viscountess of Sydra-an. Possible grandmother of Isabelle. She is currently situated at the T-junction south of c. 100m south of Lethys  At some point in their lineage the emperor became indebted to the family specifically the matriarch and a deal was struck that the family would be given the title of Viscountess of Sydra-an which would pass down the maternal line. ",
		},
		{
			name: "Lady Sarah (deceased)",
			type: "NPC",
			description:
				"Lady Sarah is the daughter of Lady Jane and potentially the mother of Isabelle. She was murdered alongside her husband.",
		},
		{
			name: "Lord Mallon (deceased)",
			type: "NPC",
			description:
				"Lord Mallon is the husband of Lady Sarah and potentially the father of Isabelle. He was murdered alongside his wife.",
		},
		{
			name: "Lord Synda",
			type: "NPC",
			description:
				"Lord Synda is the brother of Lady Sarah (son of Lady Jane). He is a pompous person who resides in a manor c. 20m north of Haalkitaine.",
		},
		{
			name: "Matilda",
			type: "Creature",
			description: "Matilda is Rhombus's horse.",
		},

		{
			name: "Haalkitaine",
			type: "Location",
			description: "The main City of Rhakaan.",
		},
		{
			name: "Scarat",
			type: "NPC",
			description: "Wizard of the tower of the deep forest.",
		},
		{
			name: "Sir Longstell",
			type: "NPC",
			description: "Chamberlain (?) of Grove Castle",
		},
		{
			name: "Lord Ironhand",
			type: "NPC",
			description: "Evil",
		},
		{
			name: "Reevmoor",
			type: "NPC",
			description: "Lord Ironhand's chamberlain",
		},
		{
			name: "Scalabag (?)",
			type: "NPC",
			description: "Witch of the swamps of Iron Hall Forest",
		},
		{
			name: "Holy Sword",
			type: "Item",
			description:
				"A Broadsword loaned to Rhombus with a dark alloy hilt shaped like a lion witha white gem in the pomel. The blade is White alloy with shimmering runes down the blade. A Magical item ith +20 to OB and +10 against undead, this rolls on the Slaying table against undead.",
		},
	],
);

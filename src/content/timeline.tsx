import type React from "react";

export type Timeline = TimelineSection[];

export type TimelineSection = {
	title: React.ReactNode;
	events: TimelineEvent[];
};

export type TimelineEvent = {
	icon?: string;
	date?: string;
	title?: string;
	description: React.ReactNode;
};

export const timeline: Timeline = [
	{
		title: "Session 1 - Into the Sewers",
		events: [
			{
				icon: "location-plus",
				description: (
					<p>
						We met each other at the Ram's Fleece, an Inn run by Ron and twins
						Molly and Mabel.
					</p>
				),
			},
			{
				icon: "circle-user",
				description: (
					<p>
						Benk, the leader of one part of the thieves’ guild had gone missing
						and was presumably dead. Zane the leader of the "Children of the
						Light/Night(?)" had taken control of the thieves’ guild and problems
						were on the rise.
					</p>
				),
			},
			{
				icon: "circle-user",
				description: (
					<p>
						Isabelle, Ron's goddaughter, was kidnapped, imprisoned and held at
						ransom with a deadline of 7 days due to some debts incurred by Ron.
					</p>
				),
			},
			{
				icon: "circle-user",
				description: (
					<p>
						Finn, a member of one of the thieves’ guilds in town and friend of
						Isabelle, agreed to help us get into the sewers and provide a
						distraction for us to pass through and rescue Isabelle.
					</p>
				),
			},
			{
				icon: "mattress-pillow",
				description: <p>We slept and readied for entering the sewers</p>,
			},
			{
				icon: "route",
				description: (
					<p>
						Finn led us to a courtyard in the west of Haalkitaine which led down
						to some catacombs in which we found a mausoleum.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: <p>Some skeletons appeared and we beat them all.</p>,
			},
		],
	},
	{
		title: "Session 2 - Prison Break",
		events: [
			{
				icon: "route",
				description: (
					<p>
						We continued further into the catacombs, followed some corridors and
						found a locked door.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						We broke through one locked door and encountered some giant rats...
						they hurt but we killed all of them.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We entered the sewers and made our way through them, following Finn,
						where we found a few Thieves guarding a makeshift drawbridge.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						Tren and Jascrow sorted them out and Jascrow tidily offed a guard
						who spotted us and went to run.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We made our way through the sewers into a hideout where we
						encountered two more thieves in the mess hall, they were skewered.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We left an unknown number of thieves in the kitchen and snuck on.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						As we explored on 4 more thieves were killed silently in the
						barracks
					</p>
				),
			},
			{
				icon: "magnifying-glass",
				description: (
					<p>
						There was also some searching and some looting which found us a
						ransom note for Lord Ferris/Derek (son of Lord Glund)
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Whilst the thief killing was happening, Rhombus, Faldrin and Tren
						found another room,{" "}
					</p>
				),
			},
			{
				icon: "sack",
				description: <p>Tren did some looting, </p>,
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						Rhombus and Faldrin got to breaking down a door. We took a near miss
						with a crossbow bolt, broke down the door, took care of the thief
						who shot that and his accomplice.{" "}
					</p>
				),
			},
			{
				icon: "circle-user",
				description: (
					<div>
						<p>
							We found some cells, stole a key from the dead thief and opened
							the cells finding:
						</p>
						<ul>
							<li>Isabelle</li>
							<li>Lord Ferris/Derek </li>
							<li>Benk (in a bad way)</li>
							<li>Others</li>
							<li>Isabelle set to healing Benk</li>
						</ul>
					</div>
				),
			},
		],
	},
	{
		title: "Session 3 - (Not so) Happy Families",
		events: [
			{
				icon: "route",
				description: (
					<p>
						Unfortunately, as we stepped out from the cells, the once closed
						kitchen door was now open and the once present thieves in the
						kitchen were now gone.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						We had ourselves a fight, several thieves appeared, and we made
						swift work of them, though I believe 1 escaped and ran.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Following our encounter, we took off out of the sewers and ended up
						near the grounds of the now affectionately named "haunted manor".
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Finn went off to do something and whilst we attempted to sit tight,
						Isabelle "went to the toilet" and was drawn to leave our safe space.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Erjwyn and Faldrin followed her, and she had been almost compelled
						towards the haunted manor... We are though initially increasingly
						unsure about the manor were warmed as we moved closer to Isabelle.
					</p>
				),
			},
			{
				icon: "circle-user",
				description: (
					<div>
						<p>
							We decided to enter the house where we identified a family
							portrait we eventually identified as:
						</p>
						<ul>
							<li>Lady Jane of Meth-Maron (Viscountess of Syrda'an)</li>
							<li>Lady Sarah Jane, daughter of Lady Jane</li>
							<li>Lord Mallon, husband of Lady Sarah</li>
							<li>and a Baby "Isabelle"</li>
						</ul>
					</div>
				),
			},
			{
				icon: "circle-user",
				description: (
					<p>
						One of the people in the painting was wearing a pendant (?) matching
						a pendent Isabelle has which she believes helps her healing.
					</p>
				),
			},
			{
				icon: "circle-user",
				description: (
					<div>
						<p>
							After visiting the haunted manor, we were invited to visit Lord
							Glund who wanted to thank us for rescuing his son. He also paid us
							a healthy fee and shared the information gleamed above, including:
						</p>
						<ul>
							<li>Lady Jane is currently situated south of Lethys</li>
							<li>
								Lord Synda (?), Lady Janes brother, is situated 20m north of
								Haalkitaine
							</li>
							<li>
								Lady Sarah, Lord Mallon and Baby Isabelle were all murdered
								around 26 years ago.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						At some point in this day, we went back to The Ram's Fleece and Ron
						shared with us that he was not Isabelle's godfather, but she had
						been brought to him young, and he had been told to protect her. This
						is something he had been unable to tell her up until this point
					</p>
				),
			},
		],
	},
	{
		title: "Session 4 - Ugly Doesn't Buy Good Horses",
		events: [
			{
				icon: "route",
				description: (
					<div>
						<p>Some things happened which included:</p>
						<ul>
							<li>Popping to a library</li>
							<li>
								Popping to find the death certificate for the baby in the
								painting (looks like the baby but gender was marked as "male")
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We decided to head north to Lord Mallon to try and understand more
						from him under the guise of academic study and a biography on the
						family.
					</p>
				),
			},
			{
				icon: "store",
				description: (
					<p>
						Faldrin went to scope out some horses and carts and he didn't
						bargain well.
					</p>
				),
			},
			{
				icon: "horse",
				description: (
					<p>
						We then sent Jascrow to buy some horses, he did better and
						eventually set off north.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Upon reaching the house of Lord Mallon, he turned out to be a bit of
						an [expletive of choice] and we established we needed a letter of
						recommendation from someone important which potentially grant us
						invite to chat.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We headed back to see Lord Glund who was willing to grant us a
						letter for both Lord Mallon and Lady Jane (should we need it).
					</p>
				),
			},
			{
				icon: "scroll-old",
				description: (
					<p>
						Whilst we were there, he offered us a contract. 50gp up front, 250gp
						upon resolution. He had issues with his castle(?) c. 330 miles south
						along the main roads, strange things were happening with creatures.
					</p>
				),
			},
			{
				icon: "exclamation-circle",
				description: (
					<p>
						At some point in all of this we got back to the Inn where we found
						Ron, Mabel and Molly all dead in a professional hit.
					</p>
				),
			},
			{
				icon: "exclamation-circle",
				description: (
					<p>
						Mabel and Molly were identified as potentially eyes and ears for the
						Truth Takers sect a group dealing with information. And this hit
						could have been a result of them sharing something they had
						overheard about Isabelle.
					</p>
				),
			},
			{
				icon: "hourglass",
				description: (
					<p>
						Then we awaited Isabelle's return and prepared to leave quickly.
					</p>
				),
			},
		],
	},
	{
		title: "Session 5 - Road Trip (Pt 1), Into the Woods",
		events: [
			{
				icon: "route",
				description: (
					<p>
						We took off with Isabelle south down the major roads and going was
						good, we stayed in an Inn and cracked on for a second day.
					</p>
				),
			},
			{
				icon: "eye",
				description: (
					<p>
						We encountered plenty of people coming towards us, as expected,
						heading to provide their retinue. But we also encountered a group of
						riders heading fast towards us, they had a nose as they passed us
						but carried on.
					</p>
				),
			},
			{
				icon: "user-circle",
				description: <p>A wild Jascrow appeared!</p>,
			},
			{
				icon: "exclamation-circle",
				description: (
					<p>
						Jascrow shared that there was a bounty on our heads (500gp) for the
						murder of Ron, Molly, and Mabel. We decided to head back to the
						previous inn and take a turning off the major road down onto the
						minor roads to the east.
					</p>
				),
			},
			{
				icon: "horse",
				description: (
					<p>
						In turning around as we passed the inn, we swapped our cart and
						bought more horses to help us deal with the less well travelled
						roads.
					</p>
				),
			},
			{
				icon: "mattress-pillow",
				description: (
					<p>
						We stopped at another Inn where we stayed the night and nothing new
						happened
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Heading south we knew we would need to camp for the night due the
						distance before the next inn. We travelled as far as we could and
						then set up camp in a clearing in the trees. The Elves took watch.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						Eventually Erjwyn heard then spotted a ranger in the woods, took
						care of him but the party knew where we were, and we were inevitably
						under attack.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						A group of bounty hunters (the ones who passed fast on horses
						previously) surrounded us and with an initial pelting of arrows, a
						fight ensued.
					</p>
				),
			},
			{
				icon: "person-running-fast",
				description: (
					<p>
						With most downed, the last man turned to run and though Erjwyn
						tried, he could not get him through the trees and the last man took
						to his horse and ran north.
					</p>
				),
			},
			{
				icon: "horse",
				description: (
					<p>
						We packed up camp, stole some horses (we now have 14!) amongst other
						thing and decided to continue southeast. This time tracking off-road
						about a mile west of the road we were following.
					</p>
				),
			},
		],
	},
	{
		title: "Session 6 - Road Trip (Pt 2), Rock n Troll",
		events: [
			{
				icon: "route",
				description: (
					<p>
						We travelled well for a couple of days, stopping another night in a
						clearing, as we finished the second day we found our next clearing
						for the night, took up the usual defensive posts and set down.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<p>
						As we lay gently sleeping, somehow our wonderful elves managed to
						not see 2 Hill Trolls sneak towards camp... Well 1 rather large
						boulder fell on Faldrin, and another landed just shy of Rhombus. We
						had ourselves a fight.
					</p>
				),
			},
			{
				icon: "sword",
				description: (
					<p>
						After a relentless series of attacks from the whole group, we
						managed to take care of the trolls eventually. Erjwyn took the first
						and Sisu the second.
					</p>
				),
			},
			{
				icon: "magnifying-glass",
				description: (
					<p>
						We attempted to track back to the troll hole but unfortunately, we
						were clearly just a little too slow and we lost the tracks pretty
						quickly.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Another day of travel preceded yet another peaceful night 'neath the
						stars. We continued the next day but as midday hit, we notice smoke
						through the trees.
					</p>
				),
			},
			{
				icon: "smoke",
				description: (
					<p>
						Erjwyn and Jascrow headed off to take a look before reporting back a
						smouldering barn and cottage, roof caved in. From their initial
						thoughts, the building was clearly ablaze recently, likely only
						burning out within the last day or so.
					</p>
				),
			},
			{
				icon: "farm",
				description: (
					<p>
						As the group continued to investigate, we found no livestock dead or
						alive only the body of one mad, dead in the doorway with an arrow in
						his back. Faldrin's knowledge of orcs identified the arrow as one of
						theirs.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Led by his disdain for orcs, Faldrin encouraged the group to hunt
						down the orcs and Erjwyn found a trail.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						Following the trail, we headed southeast for the remainder of the
						day, spent another uneventful night under the stars and headed back
						off in the morning. It wasn't far into the next day we followed the
						to a dead end where it disappeared behind some rocks and bushes.
					</p>
				),
			},
			{
				icon: "hood-cloak",
				description: (
					<p>
						Jascrow donned his cape, vanishing in a flash. He headed into to
						search through the bushes and as he crept through a gap in the
						rocks, he saw two orcs in a corridor before heading back.
					</p>
				),
			},
			{
				icon: "dungeon",
				description: (
					<div>
						<p>
							After collecting the Erwyjn, Tren and Faldrin, they collectively
							snuck back up to the entrance. Tren sent the two orcs at the
							entrance to sleep where took advantage of that to head further in.
						</p>
						<p>
							As he crept further down the corridor, Jascrow hit a split,
							heading left he suddenly stopped, hearing snoring to his right.
							Slowly peaking round the , he saw 2 more orcs sleeping in a small
							chamber, heading back and to the right, another corridor.
						</p>
					</div>
				),
			},
		],
	},
	{
		title: "Session 7 - Orc-hestral Manoeuvres in the Dark",
		events: [
			{
				icon: "zzz",
				description: (
					<p>
						Sneaking into the caves, Erjwyn killed two magically sleeping orcs.
						He moved round the corner and whilst he attempted to kill a third
						sleeping orc unfortunately the remaining Orc woke up.
					</p>
				),
			},
			{
				icon: "warning",
				description: (
					<p>
						Jascrow and Faldrin entered the fight as 2 more orcs appeared. Tren
						joined in and put 1 to sleep but the remaining orc made a run for it
						back into the depths of the caves. Faldrin fumbled.
					</p>
				),
			},
			{
				icon: "sword",
				description: (
					<p>
						Rhombus joined the fight as Erjwyn took another swing at his target.
						Taking his turn Rhombus swung at the remaining orc who promptly
						died.
					</p>
				),
			},
			{
				icon: "circle-8",
				description: (
					<p>
						No sooner than we had killed the last orc we could see a hoard of
						orcs appeared, 8 in total.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>Some combat ensued:</p>
						<ul>
							<li>Sisu entered a frenzy running into the hoard.</li>
							<li>
								Erjwyn slotted an archer, Sisu took a swing, killed one target,
								and followed through to kill Erjwyn's target.
							</li>
							<li>An orc ran at Rhombus but fumbled.</li>
							<li>Tren knocked two down asleep.</li>
						</ul>
					</div>
				),
			},
			{
				icon: "cow",
				description: (
					<p>
						Somewhere in all of this, Faldrin found some sheep, cows and pigs
						and decided to play with them for a bit.
					</p>
				),
			},
			{
				icon: "circle-5",
				description: (
					<p>
						During the fight, more orcs appeared, putting us up to 13 in total.
					</p>
				),
			},
			{
				icon: "wand-sparkles",
				description: (
					<p>
						The Shaman orc did something and the remaining orc walk straight
						past a confused sisu.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>
							Some <strong>more</strong> combat ensued:
						</p>
						<ul>
							<li>At some point more orcs appeared.</li>
							<li>Rhombus killed a sleeping orc.</li>
							<li>
								Sisu though confused managed in his frenzy to swing at the
								Shaman slicing him in half.
							</li>
							<li>An orc put a solid hit on Sisu.</li>
						</ul>
					</div>
				),
			},
			{
				icon: "person-falling-burst",
				description: (
					<p>Jascrow, having taken a hit from one orc hits the deck.</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>
							Even <strong>more</strong> combat ensued:
						</p>
						<ul>
							<li>An orc hit Rhombus doing some significant damage.</li>
							<li>Sisu killed the black orc.</li>
							<li>Tren put another orc to sleep as Rhombus fumbled.</li>
							<li>Erjwyn took advantage of the sleeping orc killing him.</li>
						</ul>
					</div>
				),
			},
			{
				icon: "person-from-portal",
				description: (
					<p>
						Sisu came back round from his frenzy fortunately not having hit any
						of team!
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>
							Yet <strong>more</strong> combat ensued:
						</p>
						<ul>
							<li>Orc hits Erjwyn hard</li>
							<li>
								Faldrin, finally back from farming, killed the orc standing over
								Jascrow.
							</li>
							<li>Isabelle healed Erjwyn.</li>
							<li>Rhombus took another solid hit.</li>
							<li>Lots of damage happened to orcs without death for a roll.</li>
							<li>
								Faldrin flanked the orc facing Rhombus and swung at him for
								another kill.
							</li>
							<li>Sisu took out his next target.</li>
						</ul>
					</div>
				),
			},
			{
				icon: "kit-medical",
				description: (
					<p>
						Isabelle having spent some time healing the others made her way over
						to Jascrow and revived him.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>The final chunk of combat ensued:</p>
						<ul>
							<li>Rhombus did a significant blow.</li>
							<li>Sisu killed a Tren slept orc.</li>
							<li>Faldrin killed the final living orc.</li>
						</ul>
					</div>
				),
			},
			{
				icon: "treasure-chest",
				description: (
					<p>
						Venturing into the cave Erjwyn found a locked chest. Jascrow upon
						trying to open it hit a trap and poisoned he went down unconscious.
						Erjwyn fetched Isabelle who healed Jascrow, and they dragged the
						chest back out of the cave.
					</p>
				),
			},
			{
				icon: "family",
				description: (
					<p>
						Rhombus and Faldrin found the missing family and Tren/Isabelle took
						them out of the caves.
					</p>
				),
			},
			{
				icon: "fire",
				description: (
					<p>
						Searching the rest of the caves we found some other bits and bobs,
						another small chest and some money, taking out anything of value we
						left the caves throwing the remainder into a pile setting it on
						fire.
					</p>
				),
			},
			{
				icon: "treasure-chest",
				description: (
					<p>
						Faldrin attempted to disarm the trap on the chest and failed. Sisu
						opened the small chest. Rhombus hit the big chest with a hammer and
						opened it. Agreed with the group, Rhombus offered the 10SP from the
						large chest to the family.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We encouraged the family to then join us on our travels at least
						till we arrived in Swenk.
					</p>
				),
			},
		],
	},
	{
		title: "Session 8 - Where the Wild Things Are",
		events: [
			{
				icon: "code-branch",
				description: (
					<p>
						Rhombus heads to the city of Swenk dropping off the family. Making a
						beggar's day he drops him a gold piece to guide him to collect some
						letters and purchase Erjwyn some arrows. Heads back to join the
						group.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						The group travel 2.5 days south through Arranwatch to get to Grove
						Castle, the family seat of Lord Glund. Upon presenting the letter of
						recommendation, the group is granted an audience with the
						Chamberlain (5ft7 old well-dressed man) Sir Longstell.
					</p>
				),
			},
			{
				icon: "couch",
				description: (
					<p>
						A letter is prepared for Lord Glund to help clear our name from the
						outstanding warrant against us and everyone takes a moment to rest.
					</p>
				),
			},
			{
				icon: "map-location",
				description: (
					<div>
						<p>
							As everyone reconvenes, Sir Longstell shows the group a map of the
							area and describes the following:
						</p>
						<ul>
							<li>
								Reports of yetis at <em>Fallowhaven</em>.
							</li>
							<li>
								Reports of wolves, trolls and giants at <em>Hookhill</em>, the
								silver mines.
							</li>
							<li>
								<em>Silver Hills</em> are dangerous with some men lost and
								production now down at the mines.
							</li>
							<li>
								Farmers around <em>Nitremore</em> report livestock disappearing
								without a trace.
							</li>
							<li>
								<em>Pyrofall</em> report sightings of the living dead.
							</li>
							<li>
								A tower in the east of the <em>Deep Forest</em> which is no
								longer inhabited has always been a bit strange but there are
								reports of bears around there.
							</li>
							<li>
								A group of 5 explorers went south towards <em>Southerby</em> and
								were last seen at <em>Oakenforge</em> via <em>Rivenpool</em> 4
								months ago.
							</li>
							<li>
								A few days ago, there were attacks reported along the silver ore
								route.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "xmark-to-slot",
				description: (
					<p>
						The group took a vote on which way to head, either to Hookhall via
						the river and Pyrofall or to follow the dead parties trail south to
						Oakenforge. The group by a majority decided to take the river.
					</p>
				),
			},
			{
				icon: "sailboat",
				description: (
					<p>
						Over a couple of days, the group took an ore barge via Lake Town
						where we disembarked asked some questions to no avail, stayed at an
						inn then on to Pyrofall.
					</p>
				),
			},
			{
				icon: "fence",
				description: (
					<p>
						Approaching what look like a freshly reinforced palisade wall we
						entered the incredibly well-lit Pyrofall where the gates were
						efficiently shut behind us. We found our inn and went for a drink.
					</p>
				),
			},
			{
				icon: "comments",
				description: (
					<p>
						Having a conversation with the barkeep we heard about "Harry" who
						went to his farm outside the city walls and returned a few days
						later where he tried to get back in and bite someone. There were
						plenty of other occurrences going back months.
					</p>
				),
			},
			{
				icon: "moon-cloud",
				description: (
					<p>
						That night, a number of the party went up to the walls and climbed
						to up to look over, not much happened but we did spot some movement
						in the distance. There was no way out, so we returned to the inn.
					</p>
				),
			},
			{
				icon: "sun-cloud",
				description: (
					<p>
						The next day we spoke to the local magistrate who said mostly the
						same as we had already been told but mentioned that occasionally
						they see things in the day and sometimes the undead are animals. He
						explained that if we wanted to leave at night, we would not be
						coming back in till the following morning.
					</p>
				),
			},
			{
				icon: "comments",
				description: (
					<p>
						We spoke to a local leather worker, Celkin who shared his theories
						that the undead have not come of their own accord but instead were
						the result of a tinkering necromancer Lord Ironhand (?). Though his
						castle was destroyed, his body was never found. One local spoke of a
						crypt in which a dead man lay with eyes bright as day. He pointed us
						to a swamp in the hills south east of the Iron Hall Forest.
					</p>
				),
			},
			{
				icon: "circle-info",
				description: (
					<p>
						As we were leaving Celkin, he slapped his forehead and said “ohh I
						almost forgot there is one other person you could talk too, although
						he has not been seen in years and that is Scarat the wizard, he has
						a tower in the deep forest, he may have some more information on Old
						Ironhand.
					</p>
				),
			},
		],
	},
	{
		title: "Session 9 - We still didn't go to Oakenforge",
		events: [
			{
				icon: "route",
				description: (
					<p>
						After talking to Celkin, we decide indeed to head west to the tower
						in the Deep Forest. We travel into the forest and after a few hours
						switch to foot as we lose the well-travelled path.
					</p>
				),
			},
			{
				icon: "arrow-progress",
				description: (
					<div>
						<p>
							Erjwyn takes his usual position scouting about 10 minutes ahead of
							the group and he hears something galloping towards him, he hides,
							bow drawn and sees a distressed horse flying towards him.
						</p>
						<p>
							He puts in a slight attempt to stop the horse but seeing it
							hurtling towards him thinks better. Once the horse has past
							though, Erjwyn hears someone shouting in the distance and slows to
							allow the group to catch up.
						</p>
						<p>
							Not long after passing Erjwyn the horse hurtles past the remainder
							of the group who continue on with more caution.
						</p>
					</div>
				),
			},
			{
				icon: "ear",
				description: (
					<p>
						As the group continue on Erjwyn hears additional shouting and
						recognising the sound of a commotion he jogs on to investigate. The
						group upon hearing the same commotion leave the path and head
						towards Erjwyn leaving Jascrow and Isabelle behind.
					</p>
				),
			},
			{
				icon: "bow-arrow",
				description: (
					<div>
						<p>
							Erjwyn upon reaching the source of the commotion finds a clearing
							filled with an incredibly well organised campsite. In the middle
							of the campsite, 2 very large wolves are attacking the two
							remaining men with several littered on the floor around the place.
						</p>
						<p>
							Erjwyn takes his bow and aims for the wolf attacking the man most
							at peril.
						</p>
						<p>
							In going to loose his bow he pulls just a touch too far and the
							string snaps.
						</p>
						<p>
							Whilst he is restringing his bow, the remainder of the group
							arrive, just as one of the wolves kills its target.
						</p>
					</div>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>And into battle we go:</p>
						<ul>
							<li>
								Sisu runs in and the wolves spot him, attacking him they deal
								some pretty savage blows.
							</li>
							<li>
								Faldrin and Tren move up towards the clearing, Tren preparing a
								spell stopping short of the clearing.
							</li>
							<li>
								Erjwyn, now with working bow, throws an arrow straight into the
								side of one of the wolves.
							</li>
							<li>
								Rhombus runs up to Sisu as the wolf nearest him turns to face
								and takes a brutal swipe at him.
							</li>
							<li>
								The wolf closest to Sisu takes another swing but only manages a
								scratch this time.
							</li>
							<li>
								Faldrin gets to the wolf over Sisu and smashes a blow into it's
								side breaking a few ribs.
							</li>
							<li>
								Erjwyn moves up whilst prepping an arrow to be set alight.
							</li>
							<li>
								Rhombus is stunned but Sisu manages to pull of an attack hitting
								a wolf with great effect.
							</li>
							<li>
								Unfortunately, as Sisu pulls of his attack, the pissed off wolf
								strikes back ripping at Sisu.
							</li>
							<li>
								Rhombus, with a little more fortune, manages to dodge a hit from
								the wolf over him.
							</li>
							<li>As he does so, Tren casts a spell knocking one wolf down.</li>
							<li>
								Faldrin goes for the remaining wolf, swinging his axe for a
								miss.
							</li>
							<li>
								Erjwyn takes his arrow, sets it on fire, and fires it straight
								into the side of the remaining wolf, nicely severing some
								muscles.
							</li>
							<li>
								Rhombus goes for a hit but with little impact as Sisu steps back
								hoping not to be knocked down.
							</li>
							<li>
								Erjwyn heads to the downed wolf attempting to sever its head.
							</li>
							<li>
								Rhombus takes his sword to the standing wolf dealing more
								damage, Sisu then finished it off severing part of its leg as it
								dropped to the floor.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "axe-battle",
				description: (
					<p>
						2 dead wolves and plenty of potential living dead folk around, we
						decided to do cleanup... Erjwyn went on a looting run, Tren went to
						get Jascrow and Isabelle, Faldrin prepared the fie with Rhombus, and
						Sisu started to move some bodies towards the fir.
					</p>
				),
			},
			{
				icon: "shield",
				description: (
					<div>
						<p>
							Looking around the camp and moving the bodies, it becomes apparent
							that this is all a bit well maintained, and a bit professional.
							Definitely not a normal camp.
						</p>
						<p>
							There aren't any trinkets, but we do find a rolled up tabard with
							a green tree on a white background.
						</p>
					</div>
				),
			},
			{
				icon: "treasure-chest",
				description: (
					<p>
						Looking through everything we find everything is well maintained but
						there was nothing of particular worth. Rhombus takes the tabard for
						further investigation. AS we are rejoined by Jascrow he happens to
						find a false compartment in a bag, containing a parchment in a coded
						language we don't recognise which is sealed with the same symbol as
						we found on the tabard.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							Isabelle heals everyone up and we decide to head back to the path
							and continue on to the tower. We travel, Erjwyn scouts, we enter a
							hillier area and continue through ever more dense forest.
						</p>
						<p>
							We eventually find a clearing with a tower. The tower is huge
							building made of white stone. It stands with a radius of about
							25ft and a massive 150ft tall.
						</p>
					</div>
				),
			},
			{
				icon: "house-tree",
				description: (
					<div>
						<p>As we look around the tower we notice a few things.</p>
						<ul>
							<li>There was some kind of garden here which is overgrown.</li>
							<li>
								There was a vegetable patch which looks like it has been tended
								to but only just.
							</li>
							<li>There is no obvious way into the castle.</li>
							<li>There is a small shack about 50ft from the tower.</li>
							<li>There is a man hiding by the shack.</li>
						</ul>
					</div>
				),
			},
			{
				icon: "user-circle",
				description: (
					<p>
						Faldrin approaches as Erjwyn shouts to the man.{" "}
						<strong>Scarat</strong> is a wizard with long unkept grey hair, his
						robes are dirty and ragged but look to have once been fine and blue.
						He has twigs in his hair, sandals on his feet and a beautiful white
						staff propped against the wall. As he peaks around the corner to
						keep an eye on us, he finds us surprisingly already behind him!
					</p>
				),
			},
			{
				icon: "comments",
				description: (
					<div>
						<p>
							We all introduce ourselves and he offers us a single glass of mead
							which is gladly accepted by Faldrin.
						</p>
						<p>
							Erjwyn asks Scarat about the undead and he mentions Reevmoor (a
							nasty guy up to no good).
						</p>
						<p>
							Sisu heads towards the tower but it is radiating some sort of
							power, Erjwyn feels it too. In response to this feeling, they both
							try to touch the tower but are shocked and sent flying back.
						</p>
						<p>
							At this point Scarat tells us to be careful. Erjwyn notices Tren,
							passes this on just as he too touches the tower and flies back.
							Faldrin decides with his Dwarven resistance to some magics to give
							it a go and... He goes back too.
						</p>
					</div>
				),
			},
			{
				icon: "user-circle",
				description: (
					<div>
						<p>Faldrin asks Scarat about Ironhand...</p>
						<ul>
							<li>He was a tyrant lord over 500 years ago</li>
							<li>
								Reevmoor was tinkering with the undead in a tower in the
								mountains southeast of Pyrofall
							</li>
							<li>
								Scalabag is a witch who lives in the swamp, she always has a
								price, if we go to the swamp she will find us.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "bed-empty",
				description: (
					<div>
						<p>
							We opt to stay the night but before bedding down, Isabelle heads
							towards the herb garden with Erjwyn and they find some herbs,
							Scarat allows them to take what they need so long as they leave
							some of each.
						</p>
						<p>
							As we spend longer there the power radiating from the tower
							lessens in intensity.
						</p>
						<p>
							Rhombus asks about the seal and the parchment. Scarat mentions
							that it's the Urulan seal from the Island east of Rhakhaan, never
							particularly friendly with Rhakhaan but certainly strange for them
							to be round here.
						</p>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						As we leave the next morning, Scarat mentions that you can only
						enter the swamp from the north thanks to an essence barrier blocking
						passage from the south. After a bit of chat about which way to head,
						we decide to go back to pyrofall to plan our onward journey, we get
						back fine and decide to head back to Grove Castle.
					</p>
				),
			},
			{
				icon: "comments",
				description: (
					<div>
						<p>
							Upon returning to Grove Castle, we are greeted by Sir Longstell.
							We mention the military types camped in the forest and show the
							seal. He recognises the seal from the tabard and is concerned by
							the presence of the soldiers.
						</p>
						<p>
							We hand him the parchment, but he is unable to read it, he
							suggests it is sent to the capital for further investigation.
						</p>
						<p>
							In return for our parchment, he hands us another which shows our
							names cleared of the crimes we had been accused of. Signed by the
							magistrate and others of Haalkitaine.
						</p>
					</div>
				),
			},
			{
				icon: "books",
				description: (
					<p>
						Investigating Ironhand, Tren and Jascrow find that around 600 years
						ago he was lord of all land here, he had feudal lords who paid him
						but over time he became more tyrannical. The feudal lords rebelled
						severely and stormed his castle. After a long siege they broke
						through and both Ironhand and Reevmoor (his assistant) were killed.
						Both bodies disappeared
					</p>
				),
			},
			{
				icon: "person-praying",
				description: (
					<div>
						<p>
							Tren knows the power it takes to perform necromancy to the point
							of reanimating the dead and also that both burning and holy
							weapons are most effective against them. Erjwyn asks after any
							nearby religious places and Sir Longstell points out a monastery
							in the forest covered hills east of Artanwatch.
						</p>
						<p>
							The next morning, we set off for the monastery and after one
							uneventful night and another couple of days of travel we make it.
						</p>
						<p>
							We meet a monk who guides us to the abbot where Rhombus heads off
							to pray and we share our story. We ask about sanctifying our
							weapons and we are led to a monk in the library. Who greets us and
							offers us help.
						</p>
						<p>
							We relay our information again and he explains that the only way
							to be sure to kill the undead is to behead them and burn them.
						</p>
						<p>
							After dinner, we are invited back to the librarian where a large,
							tall man gives us vials of sanctified holy water, he also hands
							Rhombus a holy longsword for use against spirits and the undead as
							a loan to help us in our onward travels.
						</p>
					</div>
				),
			},
		],
	},
	{
		title: "Session 10 - The price of a good meal",
		events: [
			{
				icon: "route",
				description: (
					<p>
						Setting off from the monastery, we head back to Grove Castle
						spending an uneventful night in Artanwatch. During our onward travel
						to the castle the next day, south of us we saw a flash of blinding
						white light from the ground to the heavens. The light seemed to
						emanate form the east of the Deep Forest near the tower.
					</p>
				),
			},
			{
				icon: "horse",
				description: (
					<p>
						We continued to Grove Castle where we slept the night at Grove
						Castle hoping to catch an ore barge out towards Lake Town however
						due to a dispute there were no boats. We decided to continue east by
						horse, south of the river towards Pyrofall ready to detour south
						towards the source of the light.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						3 Days and nights of travel passed by easily and on the third day we
						left the road to head southwest to the edge of the forest. In the
						distance Tren spotted a glint of armour on the treeline. As a group
						we progressed forwards toward the glint and as we moved closer, we
						saw 5 horsemen, and two large dogs moving at speed towards us.
					</p>
				),
			},
			{
				icon: "split",
				description: (
					<div>
						<p>
							The approaching group moved into a pincer, and we took shape
							defensively (1-5 enemies, initials for us)
						</p>
						<pre>{`   1         I T         5   
  |           R           |  
  |       S       F       |  
  |          J E          |  
   2                     4   
    \\____     3     ____/  
         \\__  |  __/
            \\_|_/
              |`}</pre>
						<p>
							Rhombus, Isabelle and Tren stayed on their horses whilst the
							others dismounted. Tren began to prepare to cast, just in case.
						</p>
					</div>
				),
			},
			{
				icon: "megaphone",
				description: (
					<div>
						<p>
							Erjwyn shouted to the men for them to stop advancing or he'd loose
							his arrow and the advancing group slow to a trot but continue
							forwards, as they do we see:
						</p>
						<ul>
							<li>
								(1) A dwarf riding a pony with a battleaxe and some chainmail.
							</li>
							<li>
								(2) A human, clad in chainmail with a pomelled heavy crossbow
								and a broadsword.
							</li>
							<li>
								Leading the pack, (3) a human in leather armour with a light
								crossbow, accompanied by 2 large, well-controlled, dogs.
							</li>
							<li>
								(4) Another human in chain with yet another light crossbow.
							</li>
							<li>Finally, (5) A cloaked human.</li>
						</ul>
						<p>
							Once the party stopped at Erjwyn's request, the group opened with
							"You are hard to find". and declare that whatever happens, they
							wanted Isabelle.
						</p>
					</div>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>Roll initiative we do:</p>
						<ul>
							<li>
								<strong>Erjwyn:</strong> Fires an arrow at the leader's horse in
								the face dropping it onto its rider trapping him (3).
							</li>
							<li>
								<strong>Dog 1:</strong> Running at Erjwyn the dog takes bite at
								his thigh dropping Erjwyn unconscious.
							</li>
							<li>
								<strong>Rhombus:</strong> Gets off his horse and goes for dog 2,
								missing.
							</li>
							<li>
								<strong>Sisu:</strong> Takes a swing at rider 2 which is parried
								but then the second swing hits his lower leg.
							</li>
							<li>
								<strong>Unknown:</strong> Causes Tren screams in agony and pain.
							</li>
							<li>
								<strong>Rider 1:</strong> Dismounts and goes for Sisu who takes
								a massive hit.
							</li>
							<li>
								<strong>Faldrin:</strong> Hits the horse of rider 4 but mostly
								misses.
							</li>
							<li>
								<strong>Jascrow:</strong> Holds a dagger to the throat of the
								leader (3) and encourages him to call off his men. He yells
								"Fuck off" and Jascrow follows up by dropping his knife.
							</li>
							<li>
								<strong>Rider 5:</strong> Swings at Faldrin cracking his rib.
							</li>
							<li>
								<strong>Isabelle:</strong> Heals Erjwyn bringing him back to
								consciousness.
							</li>
							<li>
								<strong>Erjwyn:</strong> Pops a magical berry to continue to
								re-heal himself.
							</li>
							<li>
								<strong>Dog 1:</strong> Continues to deal damage to Erjwyn.
							</li>
							<li>
								<strong>Rhombus:</strong> Seeing his friend in danger, goes for
								Dog 1, killing it with a broadsword to the side of the head.
							</li>
							<li>
								<strong>Sisu:</strong> Destroys Rider 1 bringing him straight
								off his horse with smashed hips and legs.
							</li>
							<li>
								<strong>Rider 4:</strong> Moves back towards Isabelle
							</li>
							<li>
								<strong>Faldrin:</strong> Hits rider 5 hard, knocking him back
							</li>
							<li>
								<strong>Tren:</strong> Fires a bolt of lightning at Rider 4 but
								misses.
							</li>
							<li>
								<strong>Jascrow:</strong> Having regained possession of his
								knife, this time he kills Rider 3.
							</li>
							<li>
								<strong>Isabelle:</strong> Continues to heal Erjwyn.
							</li>
							<li>
								<strong>Erjwyn:</strong> Goes for dog 2 severing its neck.
							</li>
							<li>
								<strong>Rhombus:</strong> Moves behind rider 1 and deals him a
								blow.
							</li>
							<li>
								<strong>Sisu:</strong> Swings at rider 2 taking his leg off and
								cutting the horse's side.
							</li>
							<li>
								<strong>Rider 4:</strong> Turns and runs.
							</li>
							<li>
								<strong>Faldrin:</strong> Brings his axe down severing the hand
								of rider 5.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "treasure-chest",
				description: (
					<div>
						<p>After winning the fight we set down to plundering and found:</p>
						<ul>
							<li>
								Light Crossbow (to Erjwyn) and longsword (to Jascrow) on Rider 3
							</li>
							<li>A scroll with a picture of Isabelle</li>
							<li>Some Dwarven Chainmail (to Faldrin)</li>
							<li>
								A Superior Steel Battle Axe [+10 non-magical] (to Faldrin)
							</li>
							<li>An ornate ring radiating magic (to Tren)</li>
						</ul>
						<p>
							Then we decided to chop off the heads of the party and burn them.
							We wouldn't want more undead would we!
						</p>
					</div>
				),
			},
			{
				icon: "trees",
				description: (
					<div>
						<p>
							Heading a bit further into the forest we moved towards the tower
							but found a large portion of the woods around the tower flattened.
						</p>
						<p>The tower still stands but everything else was gone.</p>
						<p>
							We called for Scarat but got no response, same to the tower. We
							had felt a strong push back from an essence barrier and Faldrin
							having gotten further previously tried to get through gently but
							though he got further, was stilled held back (with no malicious
							intent).
						</p>
						<p>
							Rhombus decided to give it another go at the forceful route and
							taking a runup, hit the barrier and was flung back.
						</p>
						<p>We set up camp for the night.</p>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						After another uneventful night we decided to head East to Pyrofall
						and after another night camping we made it the next afternoon.
					</p>
				),
			},
			{
				icon: "ship",
				description: (
					<p>
						We stabled the horses and our goods at Pyrofall and caught the next
						barge up to our drop-off point where the river turns east.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							After disembarking, we headed southeast into an old wood. The wood
							itself looked and felt sad, dark, dank and damp.
						</p>
						<p>
							After trying to find some kindling Erjwyn felt a really obvious
							sense of unnaturalness.
						</p>
						<p>
							Having spent an incredibly uncomfortable and eery night feeling
							like we were being watched, we broke camp the next morning and
							continued into the evermore ill looking woods.
						</p>
					</div>
				),
			},
			{
				icon: "cabin",
				description: (
					<div>
						<p>
							Towards the end of our day's walking, we smelled wood smoke and
							followed our noses to the source. It led us to a cottage in the
							woods.
						</p>
						<p>
							We hear someone chopping logs as Erjwyn shouts hello, a girl opens
							the door, spots us and waves.
						</p>
						<p>
							A man (Lance) lowers his axe and says hello and introduces us to
							his wife (Lillia), and daughter (Samantha).
						</p>
						<p>
							We discuss the difference between this lovely segment of woodland
							in the dank forests around it, Lance explains how they have been
							in this section of woodland forever.
						</p>
						<p>
							Jascrow asks for directions towards the swamp, and we are told to
							head half a day southwest where we would find an old highway.
							Lance offers to escort us in the morning.
						</p>
					</div>
				),
			},
			{
				icon: "house-night",
				description: (
					<div>
						<p>
							We accept the hospitality for the night through Rhombus has a bad
							feeling about the difference in environment and can't stop that,
							so he opts to stay on the edge of the clearing.
						</p>
						<p>
							The family served food and drink and most of us ate. We then
							bedded down for the night with Rhombus outside and Erjwyn watching
							over us inside.
						</p>
						<p>
							As Faldrin, Jascrow and Sisu are sleeping, Tren and Erjwyn feel
							abnormally sleepy. Erjwyn decides to get some air and heads
							outside to Rhombus where he feels more awake as he moves further
							away.
						</p>
					</div>
				),
			},
			{
				icon: "moon",
				description: (
					<div>
						<p>
							Erjwyn walked right to the edge of the woods but nothing untoward
							is in the woods, turning around though he could see an unnatural
							glow.
						</p>
						<p>
							Erjwyn calls Rhombus over to look from a distance and he confirms
							that he can see the spectral shimmer too.
						</p>
						<p>
							Rhombus goes back to sleep and Erjwyn keeps watch over him
							outside, but he hears a clatter from inside the house. Stopping to
							listen he hears nothing else but out of the corner of his eye he
							sees something glowing which disappears.
						</p>
					</div>
				),
			},
			{
				icon: "sword",
				description: (
					<div>
						<p>
							Rhombus's magic sword vibrates waking him again. He approaches the
							house as Erjwyn stays back 30ft away with bow drawn.
						</p>
						<p>
							As Rhombus gets closer to the house, the temperature drops and
							having already felt uneasy he kicks the door down and sees a fire
							alight but unnatural.
						</p>
						<p>
							Tren has fallen off his chair and is still out but prone on the
							floor. Everyone else is asleep as expected.
						</p>
						<p>
							Looking around Rhombus turns to face all 3 family members, awake,
							looking at him, transparent.
						</p>
						<p>Rhombus turns around and runs as white as a sheep.</p>
					</div>
				),
			},
		],
	},
	{
		title: "Session 11 - The Hanging Tree",
		events: [
			{
				icon: "megaphone",
				description: (
					<p>
						Following a discussion with Rhombus, Erjwyn shouts into the house to
						encourage the now awake group to get out.
					</p>
				),
			},
			{
				icon: "person-to-door",
				description: (
					<div>
						<p>
							Most of the group immediately leave the house heading over to
							Rhombus and Erjwyn however Tren does hold up just a little longer
							in the house.
						</p>
						<p>
							The family of spirits do follow to the threshold but then go no
							further.
						</p>
						<p>
							All the while Rhombus comes round from his fright and recomposes
						</p>
					</div>
				),
			},
			{
				icon: "books",
				description: (
					<p>
						Tren talks to the group about some reading he did about ethereal
						spirits being trapped by a focus object. They won't attack unless
						provoked.
					</p>
				),
			},
			{
				icon: "bed",
				description: (
					<p>
						We camp out until the morning at the edge of the clearing while
						Isabelle pours the life back into those inside the house. As dawn
						breaks the spectral lights disappear and the warmth returns to the
						house.
					</p>
				),
			},
			{
				icon: "arrows-split-up-and-left",
				description: (
					<div>
						<p>Following this a mixture of things happen:</p>
						<ul>
							<li>Erjwyn calls out to Lance and gets nothing back.</li>
							<li>Rhombus very much stays away.</li>
							<li>
								Faldrin walks to the house, knocks on the door, peers through
								the door and there is nothing.
							</li>
							<li>
								Sisu / Jascrow hang back with Erjwyn who asks Tren whether this
								is a "Burn it down" situation to whit the answer is "No, we need
								to destroy the focus."
							</li>
							<li>
								Jascrow and Rhombus then walk around the perimeter of the house
								and behind it they find 2 graves, one for Lilia and one for
								Samantha, next to that, a skeleton hung from a tree.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "shovel",
				description: (
					<div>
						<p>
							Rhombus starts to dig a grave as Jascrow heads round to tell
							people what's what.
						</p>
						<p>
							Erjwyn turns up and attempts to cut down the tree but the axe
							snaps, same happens for Faldrin.
						</p>
						<p>
							The same happens to Rhombus with the shovel but everyone mucks in
							and gets the grave dug.
						</p>
					</div>
				),
			},
			{
				icon: "tombstone",
				description: (
					<p>
						We bury the skeleton and everything begins to change. Flowers grow
						on the graves, the house ages as if it had been derelict for
						centuries, the forest becomes drab around us.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<p>
						We continue southeast to the northern edge of the swamp. After a few
						hours we make it to humid air, boggy ground and swampy trees. The
						area looks like a historic battlefield.
					</p>
				),
			},
			{
				icon: "ear",
				description: (
					<p>
						Everyone (but Faldrin) hears a flapping noise where 4 dreadwings
						start screeching above us.
					</p>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>Here we go!</p>
						<ul>
							<li>
								<strong>Round 1:</strong> DW1, Isabelle, Tren, DW2, DW3, and
								Faldrin take damage.
							</li>
							<li>
								<strong>Round 2:</strong> Sisu Fumbles; Tren goes down; DW3,
								Faldrin, Rhombus take damage.
							</li>
							<li>
								<strong>Round 3:</strong> Isabelle goes down; DW1, DW2, DW3 take
								damage.
							</li>
							<li>
								<strong>Round 4:</strong> Erjwyn goes down; Rhombus, DW3 take
								damage.
							</li>
							<li>
								<strong>Round 5:</strong> DW1, DW2 go down.
							</li>
							<li>
								<em>3 more dreadwings appear!</em>
							</li>
							<li>
								<strong>Round 6:</strong> DW5, DW4, DW6, DW7, Rhombus, Sisu,
								Faldrin, Jascrow take damage.
							</li>
							<li>
								<strong>Round 7:</strong> DW4, DW6, Rhombus, Sisu take damage.
							</li>
							<li>
								<em>
									A flash of blinding light hits us, the dreadwings flee and
									everyone else falls unconscious.
								</em>
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "hat-witch",
				description: (
					<div>
						<p>
							We wake up and find ourselves on, under a canopy all healed up on
							a small island above the swamp.
						</p>
						<p>
							There is a hut nearby with smoke lifting from the chimney and we
							see our host <strong>Scalabag</strong>.
						</p>
						<p>
							We ask her about the flash both here and the tower, but she is not
							responsible for the tower.
						</p>
						<p>
							Upon finding out we are on our way to Iron Keep she offers us help
							but also offers us her price:
						</p>
						<p>
							"There is a sword, about 15 miles north in a valley with a cave
							where you will find a Giant. His name is Raag, and he is quite
							aggressive.
						</p>
						<p>
							The sword has a dark blade, a dark hilt with a ruby embedded in
							it. Anyone who touches the sword is susceptible to its evil power.
						</p>
						<p>
							Raag has a familiar of a crow who is his eyes in the valley.
							Unless you are incredible stealthy, Raag will know you are in the
							valley."
						</p>
					</div>
				),
			},
		],
	},
	{
		title: "Session 12 - They See Me Rollin'",
		events: [
			{
				icon: "lightbulb",
				description: (
					<p>
						Before setting off from the island above the swamp we devised a plan
						which was to have the majority of the group act as a decoy whilst
						Jascrow snuck in and stole the sword.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							Erjwyn leads us off in the right direction and after about 4-5
							hours of travel we start towards the mountains.
						</p>
						<p>
							As we travel on, we start to notice a few cobwebs dotted around
							but we carry on. The more we move forwards the more we see before
							finally, as we slow to a creep... 7 spiders fall from above us.
						</p>
					</div>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>Speaking of rolling!</p>
						<ul>
							<li>
								<strong>Round 1:</strong> Jascrow throws a knife hitting his
								target, Sisu kills a spider, Erjwyn kills a spider, Isabelle
								takes out her sword and hits, Rhombus hits his target, Tren
								prepares a spell, and Faldrin hits his target! 2 Spiders miss, 2
								spiders bite at Faldrin ripping off the bottom half of his ear,
								1 spider bites Erjwyn who starts to feel drowsy.
							</li>
							<li>
								<strong>Round 2:</strong> Jascrow hits again, Sisu hits, Erjwyn
								eats a berry to sort his drowsiness, Isaeblle prepares a spell,
								Rhombus hits, Tren prepares a spell, and Faldrin hits. 3 spiders
								are stunned, 1 bites Sisu and another bites Faldrin
							</li>
							<li>
								<em>2 more giant spiders appear.</em>
							</li>
							<li>
								<strong>Round 3:</strong> Jascrow Erjwyn and Rhombus hit small
								spiders, Isabelle heals Faldrin, Tren casts a spell shooting
								lighting at a big spider, Faldrin kills a small one. 2 small
								spiders miss, 1 bites Faldrin's arm, 1 big spider knocks Tren
								down, the other big spider bites Jascrow's nose, permanently
								scarring him.
							</li>
							<li>
								<strong>Round 4:</strong> Jasrow lops a legg off a big spider,
								Sisu kills a small spider, Erjwyn kills a small spider, Isabelle
								heals Jascrow, Rhombus kills a small spider Faldrin hits a small
								spider. Big spider misses.
							</li>
							<li>
								<strong>Round 5:</strong> Jascrow hits big spider 2, Sisu kills
								big spider 1, Erjwyn hits big spider 2, Isabelle heals Faldrin,
								Rhombus misses, Faldrin hills the last small spider.
							</li>
							<li>
								<strong>Round 6:</strong> Sisu kills the last big spider.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "first-aid",
				description: (
					<p>
						Isabelle heals the party but that drains her so we decide to set up
						for the night, Erjwyn and Tren opt to keep watch but the night
						passes by uneventfully.
					</p>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							We continue on our way and after a few more hours Erjwyn spots a
							footprint heading in towards the mountains. Erjwyn scouts a head
							small amount to continue tracking as we follow up behind.
						</p>
						<p>
							As Erjwyn enters a rock formation, he strings his bow and pauses
							for us to catch up.
						</p>
						<p>
							Jascrow spots a crow, trying his luck, he throws a knife and just
							clips the birds wing, Erjwyn attempts to catch the retreating bird
							but misses.
						</p>
					</div>
				),
			},
			{
				icon: "arrow-up-from-line",
				description: (
					<p>
						Erjwyn moves forward again. After moving out of the sight of the
						rest of the group, we all hear a lound snap and a lot of rustling.
						As he flies about 50ft up into the air!
					</p>
				),
			},
			{
				icon: "messages",
				description: (
					<p>
						After much discussion of how to deal with this, Tren climbs the
						tree, Sisu climbed up passing a rope then back down again. Sisu and
						Faldrin hold the rope as Tren ties it to the trap and cuts the other
						rope. Erjwyn is lowered down and then released.
					</p>
				),
			},
			{
				icon: "arrow-down-from-line",
				description: (
					<p>
						We continue on cautiously and find another trap, this time a pit in
						the middle of a fissure. The pit itself is as wide as the fissure,
						25ft deep and 8ft long. We cut down a tree and then lay a log across
						the gap and plod across. Faldrin falls in but fortunately misses the
						spikes at the bottom of the pit. The group use the rope to hoist
						Faldrin out again.
					</p>
				),
			},
			{
				icon: "person-falling-burst",
				description: (
					<div>
						<p>
							As we enter another clearing there is a rock face in front of us
							which we must go around. The group cautiously moves towards it and
							split up going around it. Faldrin marches off in front and
							suddenly hears the rumble of a rolling stone. Faldrin hugs the
							inside wall, Rhombus hugs the outside wall, Isabelle and Tren move
							back and out.
						</p>
						<p>
							A giant boulder comes hurtling round the corner and crushes
							Rhombus, breaking his leg. Carrying on, the boulder narrowly
							misses Isabelle and Tren before continuing on it's way.
						</p>
						<p>
							Isabelle heads to Rhombus to repair his broken leg and we all
							continue on into another opening.
						</p>
					</div>
				),
			},
			{
				icon: "door-closed",
				description: (
					<div>
						<p>
							As we enter the next clearing, we see a cave entrance, a crow, a
							large rock formation and a boulder looking awfully like a door.
						</p>
						<p>
							Faldrin, Sisu and Rhombus head for the large boulder and attempt
							to move it. Failing.
						</p>
						<p>
							Tren, Erjwyn and Isabelle hold off in the entrance to this
							opening.
						</p>
						<p>
							Jascrow heads round the large rock formation, and as he does so...
							A Giant stands up in front of him with a familiar looking sword
							pushed through his club like a nail!
						</p>
					</div>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>It's giant killing time.</p>
						<ul>
							<li>
								<strong>Round 1:</strong> Sisu moves towards the Giant, Erjwyn
								fires an arrow hitting him, Tren starts preparing, Faldrin Loads
								his crossbow, Jascrow politely fucks off to a safe distance,
								Rhombus moves to the foor of the Giant. The Giant attacks
								Rhombus who dodges, then tries again but misses.{" "}
							</li>
							<li>
								<strong>Round 2:</strong> Sisu swings at the back of the giant
								absolutely smashing him, Erjwyn fires another arrow and misses,
								Faldrin misses with the crossbow, Jascrow throws a knife at the
								Giant hitting him, Rhombus attacks him from the front.
							</li>
							<li>
								<strong>Round 3:</strong> Sisu misses, Erjwyn fires again
								hitting this time, Tren fires a shock bolt hitting the Giant,
								Faldrin finally gets his aim in and hits with the crossbow,
								Jascrow misses, Rhombus misses. The Giant misses both attacks.
							</li>
							<li>
								<strong>Round 4:</strong> Sisu swings again at the back of the
								Giant, hitting and knocking him down. As he falls, he falls
								forwards and for the second time Rhombus is crushed. Sisu runs
								up his back and confirms his kill.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "treasure-chest",
				description: (
					<div>
						<p>It's looting time.</p>
						<p>
							Once Rhombus is recovered, and as Erjwyn ties a rope around the
							club for safe transport Faldrin tries to rig something up to open
							the large boulder door but it doesn't work.
						</p>
						<p>
							Erjwyn then heads round back to where Jascrow first found the
							giant and notices another door which with everyone's help, he
							manages to open.
						</p>
						<p>
							Inside we find a chamber 150ft round, 60ft high and full of
							barrels, crates, furs, some animals. We also find:
						</p>
						<ul>
							<li>
								10,100 Tin, 6,950 Copper, 2,075 Bronze, 410 Silver and 210 Gold.
							</li>
							<li>
								A Broach and Ring which Tren confirms are magic, possibly
								something to do with Channeling or a cleric.
							</li>
							<li>Quiver of elven arrows, which are handed to Erjwyn.</li>
							<li>An ornate morning star.</li>
							<li>
								A fine magical breastplate as light as 13 but with the strength
								of 18 which is handed to Rhombus.
							</li>
						</ul>
					</div>
				),
			},
		],
	},
	{
		title: "Session 13 - Skeletons For Days",
		events: [
			{
				icon: "person-walking-arrow-loop-left",
				description: (
					<div>
						<p>
							Having slain the giant, we "adjusted" the size of his club and
							start dragging it (along with the sword) back towards Scalabag.
						</p>
					</div>
				),
			},
			{
				icon: "crow",
				description: (
					<div>
						<p>
							As we are heading back, Jascrow and Rhombus spot the black crow
							again... then a little further on, the crow pops down and lands in
							front of us.
						</p>
						<p>
							Speaking to Erjwyn, he asks to follow us, he's lost his master,
							and needs a new one, so we say yes and on we go.
						</p>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							We make our way back to the edge of the swamp and set our stuff
							down as we wait a few hours for Scalabag.
						</p>
						<p>
							Eventually we hear the noise of rowing behind us and she arrives
							to pck us up and take us back to the island, where we carry the
							club and sword up to the top.
						</p>
					</div>
				),
			},
			{
				icon: "sword",
				description: (
					<div>
						<p>
							Scalabag removes the Ruby from the sword and puts it into an
							amulet around her neck. As she does so Tren checks the intent of
							Scalabag and he feels a strong sense of good from her.
						</p>
						<p>
							Seemingly pulling the curtains of our world apart, she then asks
							us to toss the sword into the rift where it'll be as safe as it
							can be.
						</p>
					</div>
				),
			},
			{
				icon: "gem",
				description: (
					<div>
						<p>
							As Erjwyn is asking about the Gem, Salabag transforms in-front of
							us into a stunning elf, tall with black hair in colourful robes.
						</p>
						<p>
							She gives us a small pouch each containing a dose of Gariig
							(+30hp) and 3 Suranic berries (1 round stun releif).
						</p>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							Calculating we have 7 days rations each left, we head back to the
							boat where Sisu and Faldrin row as Scalabag steers. As we row, the
							faint shimmer of a magical shield surrounds us. After a couple of
							hours we arrive at an old gatehouse beyond which we just see a
							road leading up into the mountains.
						</p>
					</div>
				),
			},
			{
				icon: "route",
				description: (
					<div>
						<p>
							We part ways with Scalabaf and head up the road, a couple of hours
							later we see a 150ft wide wall with battlements in front of us,
							and a large, closed, iron-bound door.
						</p>
						<p>
							In a place where mostly there are ruins, this is clearly kept and
							maintained but there isn't anyone we can see.
						</p>
						<p>
							As we each try to work out what to do with this gigantic building
							in front of us, Jascrow takes out his grappeling hook, hoofs it
							over the front wall and beginns to climb.
						</p>
					</div>
				),
			},
			{
				icon: "block-brick",
				description: (
					<div>
						<p>
							Having then peered over the back wall, Jascrow heads back to the
							other side and signals for us to stop doing anything. He then
							heads down the internals of the gatehouse and opens the outer
							door.
						</p>
						<p>
							He explains that behind the other door is about 2 miles of hill
							covered by about 15-20 thousand undead, skeletons and the like.
						</p>
						<p>
							As he does this a voice behind us all says "It's actually quite
							impressive isn't it." and a very well kept man appears.
						</p>
					</div>
				),
			},
			{
				icon: "wand-sparkles",
				description: (
					<div>
						<p>
							It's <strong>Scarat</strong>! He explains that we helped him get
							back into his tower as among the various protections for entering,
							one was a password he had forgotten in an unfortunate accident.
							Fortunately his wife was called Isabelle and once we had left he
							remembered the password was her name in another language.
						</p>
						<p>
							So claiming to owe us a favour, he waves his wand and in a flash
							we are the other side of the thousands of undead.
						</p>
						<p>
							From our new vantage point we see the broken walls of an old
							fortress and he encourages us to "Look for a crystal skull."
						</p>
					</div>
				),
			},
			{
				icon: "dragon",
				description: (
					<div>
						<p>
							As we prepare to move forwards we head huge beating wings and a
							150ft wingspan, 60ft long once golden dragon descends upon us. The
							dragon is clearly undead with torn and damaged scales.
						</p>
						<p>
							Scarat encourages us to go quickly as he handles the dragon, as we
							part he shouts to us that for a safer way out, "head east".
						</p>
					</div>
				),
			},
			{
				icon: "dungeon",
				description: (
					<div>
						<p>
							We run from the dragon, and make our way towards a pile of rubble.
							Sticking together we see the vague structure buried among the
							rubble, and find some stairs into a spiral staircase.
						</p>
						<p>
							Fladrin and Erjwyn head down the stairs at the front of the party
							where we see a corridor.
						</p>

						<p>
							We begin to explore, eventually we stumbled across what looked to
							be a tomb or crypt.
						</p>
						<p>
							Inside the crypt we find a sarcophagus and Rhombus approaches with
							sword drawn, opens the top and as the body inside's eyes light up
							blue, his sword glows a bright white, he plunges the sword
							straight into it, killing it.
						</p>
					</div>
				),
			},
			{
				icon: "magnifying-glass",
				description: (
					<div>
						<p>
							Doors after doors and some exploration later, we make our way into
							a larger chamber with several sarcophagi and as we head through to
							some doors at the end of the room, they begin to open and a number
							of skeletons enter the room from a secret door at the rear.
						</p>
					</div>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>Fiiiight</p>
						<ul>
							<li>
								<strong>Round 1</strong>: Faldrin, Sisu, Erjwyn, Rhombus all
								attack skeletons hitting hard as Tren prepares and Isabelle
								hangs back. Jascrow attempts to pick a lock, opens a door and
								seeing more skeletons quickly undoes that mistake! The skeletons
								from the sarcophagi make attacks, 1 hitting Sisu, the others
								missing.
							</li>
							<li>
								<strong>Round 2</strong>: Faldrin Hits again, Sisu goes for the
								skeleton and hits a couple of times, Jascrow throws a knife but
								misses, Tren casts sleep on 3 of the skeleton of skeletons,
								Erjwyn prepares his and Jascrows weapons with Holy Water (using
								2 of 8 doses), Rhombus destroys 1 skeleton. The skeletons hit
								back with hits on Jascrow, Isabelle and Faldrin. The skeleton go
								for Sisu and hit. Isabelle heals Sisu
							</li>
							<li>
								<strong>Round 3</strong>: TBC!
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "list-timeline",
				description: (
					<div>
						<p>
							<strong>Initiative:</strong>
						</p>
						<div>
							<table>
								<tbody>
									<tr>
										<th>Faldrin</th>
										<td>105</td>
									</tr>
									<tr>
										<th>Sisu</th>
										<td>103</td>
									</tr>
									<tr>
										<th>Jascrow</th>
										<td>95</td>
									</tr>
									<tr>
										<th>Tren</th>
										<td>63</td>
									</tr>
									<tr>
										<th>Erjwyn</th>
										<td>62</td>
									</tr>
									<tr>
										<th>Isabelle</th>
										<td>45</td>
									</tr>
									<tr>
										<th>Rhombus</th>
										<td>45</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				),
			},
		],
	},
	{
		title: "Session 14 - Ironhand, more like dead, amiright!",
		events: [
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>Fiiiight (contin.)</p>
						<ul>
							<li>
								<strong>Round 3</strong>: Faldrin hits, Sisu hits (killing a
								skeleton), Jascrow hits also killing, Tren prepares, Erjwyn hits
								killing, Isabelle heals Jascrow, Rhombus kills a biggun; 4
								skeleton attack Sisu - 1 hits, 1 skeleton misses Erjwynm 2
								skeleton miss Rhombus, Biggun hits Faldrin, Biggun misses Tren.
							</li>
							<li>
								<strong>Round 4</strong>: Faldrin parries, Sisu goes into a
								frenzy and kills 1 skeleton, Jascrow attacks 1 skeleton hitting,
								Tren casts lightning at askeleton, Erjwyn misses, Isabelle
								resolves Faldrin Stun for a round and heals Faldrin, Rhombus
								kills a skeleton. All 8 skeletons miss.
							</li>
							<li>
								<strong>Round 5</strong>: Faldrin kills skeleton, Sisu kills
								skeleton, Jascrow kills skeleton, Tren prepares a spell, Erjwyn
								kills skeleton, Isabelle repeats procedure on Faldrin, Rhombus
								kills skeleton. Remaining skeletons miss.
							</li>
							<li>
								<strong>Round 6</strong>: Faldrin kills skeleton, Sisu kills
								skeleton, Tren kills skeleton.
							</li>
						</ul>
					</div>
				),
			},
			{
				icon: "swords",
				description: (
					<div>
						<p>
							All the skeletons are dead but Sisu remains in a frenzy and as
							everyone lese hides, Rhombus stays in the middle of the room. Sisu
							turns, runs for Rhombus and attacks. Rhombus parries the first
							attackbut Sisu goes again, this time smashing him in the arm
							stunning him before finally making it out of the frenzy.
						</p>
						<p>
							Isabelle, seeing Sisu break out of the frenzy walks over to
							Rhombus and heals him up.{" "}
							<strong>Rhombus remains at -10% OB for 24 hours.</strong>
						</p>
					</div>
				),
			},
			{
				icon: "door-closed",
				description: (
					<div>
						<p>
							We continue on through the crypt and find a door at the end of the
							room. As we open it, we find a short corridor and another door.
						</p>
						<p>
							We open the second door to find a large room, all we can make out
							are pillars in the middle of the room and a large throne on a Dais
						</p>
					</div>
				),
			},
			{
				icon: "hand-holding-skull",
				description: (
					<div>
						<p>
							We explore into the room and as we walk through the door a few
							things happen.
						</p>
						<p>
							Tren's light fills the room and we see two figures. Lord Ironhand
							sat upon the throne, eyes glowing red. Next to Ironhand is
							Reevmoor stood with tight mummy-like skin, holding a crystal skull
							whose eyes glow green.
						</p>
						<p>
							As we move into the room, the door behind us slams, through
							another door behind us, multiple skeletons show up and the door
							closes behind them. In front of us, and in front of the dias,
							another row of skeletons appear from a door, lining up.
						</p>
						<p>
							The doors all look and Reevmoor addresses us tauntingly, he points
							to the skeletons who begin to advance.
						</p>
					</div>
				),
			},
			{
				icon: "dice-d10",
				description: (
					<div>
						<p>
							Sticks and stones may break my bones but weapons and spells do
							better.
						</p>
						<ul>
							<li>
								<strong>Round 1</strong>: Rhombus is immediately stunned,
								Jascrow moves to engage and attacks some skeletons but fumbles.
								Erjwyn shoots an arrow at Reevmoor hitting. Faldrin moves across
								the room to draw some in the opposite direction, Tren casts a
								spell hitting Reevmoor with a lightning like energy, Sisu
								attacks a skeleton and hits. The skeletons move towards us all
								and Reevmoor casts something.
							</li>
							<li>
								<strong>Round 2</strong>: On skeletons - Rhombus misses, Jascrow
								misses, Erjwyn hits, Faldrin kills, Sisu hits, Isabelle stuns 4.
								Tren prepares another spell. On us - 2 miss Faldrin, 2 miss
								Rhombus but 1 hits, 1 misses Erjwyn and 1 hits. Reevmoor casts a
								spell, Erjwyn hit's the deck.
							</li>
							<li>
								<strong>Round 3</strong>: On skeletons - Rhombus hits, Jascrow
								hits, Faldrin kills, Tren kills 2, Sisu attacks but fumbles.
								Isabelle heads for Erjwyn. Reevmoor stuns faldrin. On us -
								Faldrin his hit, Rhombus parries, Isabelle parries, Tren
								parries, Jascrow parries, and Sisu parries.
							</li>
							<li>
								<strong>Round 4</strong>: On skeletons - Rhombus kills, Jascrow
								hits, Faldrin hits, Isabelle heals Jascrow who fumbles, Sisu
								continues to fumble and Erjwyn starts to come to his feet.
								Ironhand gets up and heads towards Rhombus but misses an attack,
								Reevmoor prepares a spell. On us - one attacks Rhombus and
								fumbles, Tren parries, Erjwyn parries, Jascrow is downed, 3 on
								Sisu all miss.
							</li>
							<li>
								<strong>Round 5</strong>: Rhombus one-shots Ironhand with his
								magical sword. On skeletons - Erjwyn hits, Faldrin hits, Tren
								casts lightning hitting. Isabelle heals Jascrow who fumbles.
								Reevmoor casts at Rhombus who is blinded. On us - all skeletons
								miss.
							</li>
							<li>
								<strong>Round 6</strong>: Rhombus swings hopefully like a madman
								but misses anything. On skeletons - Jascrow hits, Erjwyn misses,
								Faldrin misses, Sisu hits. Tren moves out to be able to see
								Reevmoor, Isabelle moves towards Rhombus. Reevmoor prepares. On
								us - Rhombus, Jascrow, Sisu are all hit.
							</li>
							<li>
								<strong>Round 7</strong>: Rhombus remains blind. On skeletons -
								Jasrow hits, Erjwyn mises, Faldrin hits, Tren knocks one down,
								Sisu kills. Isabelle repairs Rhombus's sight. Reevmore continues
								to prepare as all remaining skeletons miss.
							</li>
							<li>
								<strong>Round 8</strong>: On skeletons - Rhombus hits, Jascrow
								hits (having healed with a berry), Erjwyn misses, Faldrin hits,
								Tren misses, Sisu misses. Isabelle heals. Reevmoor finally acts,
								dropping Sisu aand one skeleton hits Erjwyn, downing him.
							</li>
							<li>
								<strong>Round 9</strong>: On skeletons - Rhombus hits, Jascrow
								hits, Faldrin kills. Reevmoor moves towards Faldrin who shits
								himself, Jascrow takes a hit from a skeleton.
							</li>
							<li>
								<strong>Round 10</strong>: Here goes... Rhombus hits, Jascrow
								parries, Faldrin moves and hits, Tren parries, Sisu kills one
								then another, Isabelle heals Erjwyn who starts to get back up.
								Reevmoor moves to Rhombus who doesn't react as Faldrin did,
								skeleton hits Rhombus but miss Faldrin, Jascrow, Sisu and Tren.
							</li>
							<li>
								<strong>Round 11</strong>: Rhombus hits Reevmoor, Jascrow hits,
								Erjwyn kills, Faldrin kills, Tren parries, Sisu misses and
								Isabelle heals Jascrow.
							</li>
							<li>
								<strong>Round 12</strong>: Rhombus hits Reevmoor, Jascrow kills
								skeleton, Erjwyn misses, Faldrin kills Reevmoor. The remaining
								skeletons drop.
							</li>
						</ul>
					</div>
				),
			},
		],
	},
];

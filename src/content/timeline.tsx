import React from "react";

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
                        We met each other at the Ram's Fleece, an Inn run by Ron
                        and twins Molly and Mabel.
                    </p>
                ),
            },
            {
                icon: "circle-user",
                description: (
                    <p>
                        Benk, the leader of one part of the thieves’ guild had
                        gone missing and was presumably dead. Zane the leader of
                        the "Children of the Light/Night(?)" had taken control
                        of the thieves’ guild and problems were on the rise.
                    </p>
                ),
            },
            {
                icon: "circle-user",
                description: (
                    <p>
                        Isabelle, Ron's goddaughter, was kidnapped, imprisoned
                        and held at ransom with a deadline of 7 days due to some
                        debts incurred by Ron.
                    </p>
                ),
            },
            {
                icon: "circle-user",
                description: (
                    <p>
                        Finn, a member of one of the thieves’ guilds in town and
                        friend of Isabelle, agreed to help us get into the
                        sewers and provide a distraction for us to pass through
                        and rescue Isabelle.
                    </p>
                ),
            },
            {
                icon: "mattress-pillow",
                description: (
                    <p>We slept and readied for entering the sewers</p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Finn led us to a courtyard in the west of Haalkitaine
                        which led down to some catacombs in which we found a
                        mausoleum.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>Some skeletons appeared and we beat them all.</p>
                ),
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
                        We continued further into the catacombs, followed some
                        corridors and found a locked door.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        We broke through one locked door and encountered some
                        giant rats... they hurt but we killed all of them.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        We entered the sewers and made our way through them,
                        following Finn, where we found a few Thieves guarding a
                        makeshift drawbridge.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        Tren and Jascrow sorted them out and Jascrow tidily
                        offed a guard who spotted us and went to run.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        We made our way through the sewers into a hideout where
                        we encountered two more thieves in the mess hall, they
                        were skewered.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        We left an unknown number of thieves in the kitchen and
                        snuck on.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        As we explored on 4 more thieves were killed silently in
                        the barracks
                    </p>
                ),
            },
            {
                icon: "magnifying-glass",
                description: (
                    <p>
                        There was also some searching and some looting which
                        found us a ransom note for Lord Ferris/Derek (son of
                        Lord Glund)
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Whilst the thief killing was happening, Rhombus, Faldrin
                        and Tren found another room,{" "}
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
                        Rhombus and Faldrin got to breaking down a door. We took
                        a near miss with a crossbow bolt, broke down the door,
                        took care of the thief who shot that and his accomplice.{" "}
                    </p>
                ),
            },
            {
                icon: "circle-user",
                description: (
                    <div>
                        <p>
                            We found some cells, stole a key from the dead thief
                            and opened the cells finding:
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
                        Unfortunately, as we stepped out from the cells, the
                        once closed kitchen door was now open and the once
                        present thieves in the kitchen were now gone.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        We had ourselves a fight, several thieves appeared, and
                        we made swift work of them, though I believe 1 escaped
                        and ran.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Following our encounter, we took off out of the sewers
                        and ended up near the grounds of the now affectionately
                        named "haunted manor".
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Finn went off to do something and whilst we attempted to
                        sit tight, Isabelle "went to the toilet" and was drawn
                        to leave our safe space.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Erjwyn and Faldrin followed her, and she had been almost
                        compelled towards the haunted manor... We are though
                        initially increasingly unsure about the manor were
                        warmed as we moved closer to Isabelle.
                    </p>
                ),
            },
            {
                icon: "circle-user",
                description: (
                    <div>
                        <p>
                            We decided to enter the house where we identified a
                            family portrait we eventually identified as:
                        </p>
                        <ul>
                            <li>
                                Lady Jane of Meth-Maron (Viscountess of
                                Syrda'an)
                            </li>
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
                        One of the people in the painting was wearing a pendant
                        (?) matching a pendent Isabelle has which she believes
                        helps her healing.
                    </p>
                ),
            },
            {
                icon: "circle-user",
                description: (
                    <div>
                        <p>
                            After visiting the haunted manor, we were invited to
                            visit Lord Glund who wanted to thank us for rescuing
                            his son. He also paid us a healthy fee and shared
                            the information gleamed above, including:
                        </p>
                        <ul>
                            <li>
                                Lady Jane is currently situated south of Lethys
                            </li>
                            <li>
                                Lord Synda (?), Lady Janes brother, is situated
                                20m north of Haalkitaine
                            </li>
                            <li>
                                Lady Sarah, Lord Mallon and Baby Isabelle were
                                all murdered around 26 years ago.
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        At some point in this day, we went back to The Ram's
                        Fleece and Ron shared with us that he was not Isabelle's
                        godfather but she had been brought to him young and he
                        had been told to protect her. This is something he had
                        been unable to tell her up until this point
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
                                Popping to find the death certificate for the
                                baby in the painting (looks like the baby but
                                gender was marked as "male")
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        We decided to head north to Lord Mallon to try and
                        understand more from him under the guise of academic
                        study and a biography on the family.
                    </p>
                ),
            },
            {
                icon: "store",
                description: (
                    <p>
                        Faldrin went to scope out some horses and carts and he
                        didn't bargain well.
                    </p>
                ),
            },
            {
                icon: "horse",
                description: (
                    <p>
                        We then sent Jascrow to buy some horses, he did better
                        and eventually set off north.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Upon reaching the house of Lord Mallon, he turned out to
                        be a bit of an [expletive of choice] and we established
                        we needed a letter of recommendation from someone
                        important which potentially grant us invite to chat.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        We headed back to see Lord Glund who was willing to
                        grant us a letter for both Lord Mallon and Lady Jane
                        (should we need it).
                    </p>
                ),
            },
            {
                icon: "scroll-old",
                description: (
                    <p>
                        Whilst we were there, he offered us a contract. 50gp up
                        front, 250gp upon resolution. He had issues with his
                        castle(?) c. 330 miles south along the main roads,
                        strange things were happening with creatures.
                    </p>
                ),
            },
            {
                icon: "exclamation-circle",
                description: (
                    <p>
                        At some point in all of this we got back to the Inn
                        where we found Ron, Mabel and Molly all dead in a
                        professional hit.
                    </p>
                ),
            },
            {
                icon: "exclamation-circle",
                description: (
                    <p>
                        Mabel and Molly were identified as potentially eyes and
                        ears for the Truth Takers sect a group dealing with
                        information. And this hit could have been a result of
                        them sharing something they had overheard about
                        Isabelle.
                    </p>
                ),
            },
            {
                icon: "hourglass",
                description: (
                    <p>
                        Then we awaited Isabelle's return and prepared to leave
                        quickly.
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
                        We took off with Isabelle south down the major roads and
                        going was good, we stayed in an Inn and cracked on for a
                        second day.
                    </p>
                ),
            },
            {
                icon: "eye",
                description: (
                    <p>
                        We encountered plenty of people coming towards us, as
                        expected, heading to provide their retinue. But we also
                        encountered a group of riders heading fast towards us,
                        they had a nose as they passed us but carried on.
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
                        Jascrow shared that there was a bounty on our heads
                        (500gp) for the murder of Ron, Molly, and Mabel. We
                        decided to head back to the previous inn and take a
                        turning off the major road down onto the minor roads to
                        the east.
                    </p>
                ),
            },
            {
                icon: "horse",
                description: (
                    <p>
                        In turning around as we passed the inn, we swapped our
                        cart and bought more horses to help us deal with the
                        less well traveled roads.
                    </p>
                ),
            },
            {
                icon: "mattress-pillow",
                description: (
                    <p>
                        We stopped at another Inn where we stayed the night and
                        nothing new happened
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Heading south we knew we would need to camp for the
                        night due the distance before the next inn. We travelled
                        as far as we could and then set up camp in a clearing in
                        the trees. The Elves took watch.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        Eventually Erjwyn heard then spotted a ranger in the
                        woods, took care of him but the party knew where we
                        were, and we were inevitably under attack.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        A group of bounty hunters (the ones who passed fast on
                        horses previously) surrounded us and with an initial
                        pelting of arrows, a fight ensued.
                    </p>
                ),
            },
            {
                icon: "person-running-fast",
                description: (
                    <p>
                        With most downed, the last man turned to run and though
                        Erjwyn tried, he could not get him through the trees and
                        the last man took to his horse and ran north.
                    </p>
                ),
            },
            {
                icon: "horse",
                description: (
                    <p>
                        We packed up camp, stole some horses (we now have 14!)
                        amongst other thing and decided to continue southeast.
                        This time tracking off-road about a mile west of the
                        road we were following.
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
                        We traveled well for a couple of days, stopping another
                        night in a clearing, as we finished the second day we
                        found our next clearing for the night, took up the usual
                        defensive posts and set down.
                    </p>
                ),
            },
            {
                icon: "dice-d10",
                description: (
                    <p>
                        As we lay gently sleeping, somehow our wonderful elves
                        managed to not see 2 Hill Trolls sneak towards camp...
                        Well 1 rather large boulder fell on Faldrin and another
                        landed just shy of Rhombus. We had ourselves a fight.
                    </p>
                ),
            },
            {
                icon: "sword",
                description: (
                    <p>
                        After a relentless series of attacks from the whole
                        group, we managed to take care of the trolls eventually.
                        Erjwyn took the first and Sisu the second.
                    </p>
                ),
            },
            {
                icon: "magnifying-glass",
                description: (
                    <p>
                        We attempted to track back to the troll hole but
                        unfortunately we were clearly just a little too slow and
                        we lost the tracks pretty quickly.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Another day of travel preceded yet another peaceful
                        night 'neath the stars. We continued the next day but as
                        midday hit we notices smoke through the trees.
                    </p>
                ),
            },
            {
                icon: "smoke",
                description: (
                    <p>
                        Erjwyn and Jascrow headed off to take a look before
                        reporting back a smouldering barn and cottage, roof
                        caved in. From their initial thoughts, the building was
                        clearly ablaze recently, likely only burning out within
                        the last day or so.
                    </p>
                ),
            },
            {
                icon: "farm",
                description: (
                    <p>
                        As the group continued to investigate we found no
                        livestock dead or alive only the body of one mad, dead
                        in the doorway with an arrow in his back. Faldrin's
                        knowledge of orcs identified the arrow as one of theirs.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <p>
                        Led by his disdain for orcs, Faldrin encouraged the
                        group to hunt down the orcs and Erjwyn found a trail.
                    </p>
                ),
            },
            {
                icon: "route",
                description: (
                    <div>
                        <p>
                            Following the trail, we headed southeast for the
                            remainder of the day, spent another uneventful night
                            under the stars and headed back off in the morning.
                            It wasn't far into the next day we followed the to a
                            dead end where it disappeared behind some rocks and
                            bushes.
                        </p>
                    </div>
                ),
            },
            {
                icon: "hood-cloak",
                description: (
                    <p>
                        Jascrow donned his cape, vanishing in a flash. He headed
                        into to search through the bushes and as he crept
                        through a gap in the rocks he saw 2 orcs in a corridor
                        before heading back.
                    </p>
                ),
            },
            {
                icon: "dungeon",
                description: (
                    <div>
                        <p>
                            After collecting the Erwyjn, Tren and Faldrin, they
                            collectively snuck back up to the entrance. Tren
                            sent the two orcs at the entrance to sleep where
                            took advantage of that to head further in.
                        </p>
                        <p>
                            As he crept further down the corridor, Jascrow hit a
                            split, heading left he suddenly stopped, hearing
                            snoring to his right. Slowly peaking round the
                            corner he saw 2 more orcs sleeping in a small
                            chamber, heading back and to the right, another
                            corridor.
                        </p>
                    </div>
                ),
            },
        ],
    },
];

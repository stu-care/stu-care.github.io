import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { homeTitle } from "./Home";
import { useRPG } from "../contexts/RPGContext";
import Markdown from "marked-react";

export const rpgTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["dice-d20"]}
        />
        RPG
    </span>
);

const RPGPage = () => {
    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    const {
        characters: { faldrin },
    } = useRPG();

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: rpgTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add("/home", homeTitle);
        breadcrumbs.add("/rpg", rpgTitle);
    }, []);

    return (
        <main className="p-4 h-full w-full grid auto-rows-auto grid-flow-row gap-4 select-none font-[Grenze]">
            <img
                src={faldrin.img.src}
                alt={faldrin.img.alt}
                className="w-full max-h-96 object-cover rounded"
            />
            <div className="flex gap-4 flex-row">
                <h2>{faldrin.character.name}</h2>
                <div className="border-b-4 border-b-primary grow -translate-y-[calc(50%-2px)]"></div>
            </div>
            <div className="flex items-center justify-between font-light">
                <span>{faldrin.character.race}</span>
                <span>{faldrin.character.profession}</span>
            </div>
            <div className="grid grid-cols-11 bg-primary rounded p-4 mb-8 text-sm text-center text-primary-content">
                {Object.keys(faldrin.stats).map((stat) => (
                    <div className="font-bold uppercase" key={stat}>
                        {stat}
                    </div>
                ))}
                {Object.keys(faldrin.stats).map((stat) => (
                    <div key={stat}>{faldrin.stats[stat].temp}</div>
                ))}
                {Object.keys(faldrin.stats).map((stat) => (
                    <div key={stat}>
                        {faldrin.stats[stat]?.total > 0 ? "+" : ""}
                        {faldrin.stats[stat].total}
                    </div>
                ))}
            </div>
            <Markdown>{faldrin.character.description}</Markdown>
        </main>
    );
};

export default RPGPage;

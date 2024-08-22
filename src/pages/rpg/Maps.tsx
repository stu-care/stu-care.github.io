import { useEffect } from "react";
import { useApp } from "../../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import RhakhaanMapUrl from "../../assets/rhakhaan.png";
import JaimanMapUrl from "../../assets/jaiman.png";
import HaalkitaineMapUrl from "../../assets/haalkitaine.png";
import Lightbox from "../../components/Lightbox";

export const mapsTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon fixedWidth={true} icon={byPrefixAndName.fas["map"]} />
        Maps
    </span>
);

const MapsPage = () => {
    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: mapsTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add({ url: "/home", label: homeTitle });
        breadcrumbs.add({ url: "/rpg", label: rpgTitle });
        breadcrumbs.add({ url: "/rpg/maps", label: mapsTitle });
    }, []);

    return (
        <main className="p-4 h-full w-full grid grid-flow-row auto-rows-auto gap-4 font-[Grenze]">
            <Lightbox src={JaimanMapUrl} name={"Jaiman"} />
            <Lightbox src={RhakhaanMapUrl} name={"Rhakhaan"} />
            <Lightbox src={HaalkitaineMapUrl} name={"Haalkitaine"} />
        </main>
    );
};

export default MapsPage;

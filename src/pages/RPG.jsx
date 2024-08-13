import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { homeTitle } from "./Home";

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

    return <main className="p-4 h-full w-full flex select-none"></main>;
};

export default RPGPage;

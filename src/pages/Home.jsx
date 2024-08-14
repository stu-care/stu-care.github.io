import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";

export const homeTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["house"]}
        />
        Home
    </span>
);

const HomePage = () => {
    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    useEffect(() => {
        setDisplay({ showHeader: true, title: homeTitle, showFooter: true });
        breadcrumbs.clear();
        breadcrumbs.add("/home", homeTitle);
    }, []);

    return (
        <main className="p-4 h-full w-full select-none">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                nam numquam quo quibusdam accusantium praesentium adipisci omnis
                odio dicta distinctio quia laudantium magni dolores voluptatibus
                voluptatum ad, rerum dolore magnam!
            </p>
        </main>
    );
};

export default HomePage;

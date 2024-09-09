import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useApp } from "../../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";
import { homeTitle } from "../Home";
import { rpgTitle } from "../RPG";
import { timeline } from "../../content/timeline";

export const timelineTitle = (
    <span className="leading-none flex items-baseline gap-2">
        <FontAwesomeIcon
            fixedWidth={true}
            icon={byPrefixAndName.fas["timeline"]}
        />
        Timeline
    </span>
);

const TimelinePage = () => {
    const {
        display: { setDisplay, breadcrumbs },
    } = useApp();

    useEffect(() => {
        setDisplay({
            showHeader: true,
            title: timelineTitle,
            showFooter: true,
        });
        breadcrumbs.clear();
        breadcrumbs.add({ url: "/home", label: homeTitle });
        breadcrumbs.add({ url: "/rpg", label: rpgTitle });
        breadcrumbs.add({ url: "/rpg/timeline", label: timelineTitle });
    }, []);

    return (
        <main className="grid grid-flow-row auto-rows-auto p-4 gap-4 ">
            {timeline.toReversed().map((item, i) => (
                <React.Fragment key={i}>
                    <ul className="timeline timeline-compact timeline-vertical">
                        {item.events.toReversed().map((event, j) => (
                            <li className="indent-0" key={j}>
                                <hr />
                                <div className="timeline-middle flex items-center justify-center p-1">
                                    <FontAwesomeIcon
                                        className="text-2xl text-lima-700"
                                        icon={
                                            byPrefixAndName.fas[
                                                event.icon ??
                                                    "circle-arrow-right"
                                            ]
                                        }
                                        fixedWidth={true}
                                    />
                                </div>
                                <div className="timeline-end my-5">
                                    {event.title && (
                                        <div className="text-lg font-black">
                                            {event.title}
                                        </div>
                                    )}
                                    {event.description}
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-2xl mt-0 mb-4">{item.title}</h3>
                </React.Fragment>
            ))}
        </main>
    );
};

export default TimelinePage;

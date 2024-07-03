import React, { useState } from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { Button } from "./Button";

const LightBox = ({
    src,
    name,
    classNames,
    filters = "brightness-[0.8] saturate-0",
}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(false);
        setShowOverlay(true);

        setTimeout(() => {
            setVisible(true);
        }, 100);
    };

    const close = () => {
        setVisible(false);

        setTimeout(() => {
            setShowOverlay(false);
        }, 1000);
    };

    const bg = `url('${src}')`;

    return (
        <>
            <div
                className={cx([
                    "relative h-40 w-full rounded-xl overflow-hidden group cursor-pointer",
                    classNames,
                ])}
                onClick={show}
            >
                <div
                    className={cx([
                        "h-full w-full bg-cover bg-center bg-no-repeatselect-none transition-all duration-300 group-hover:saturate-100 group-hover:brightness-100",
                        ,
                        filters,
                    ])}
                    style={{ backgroundImage: bg }}
                ></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl font-extralight font-['Grenze']">
                    {name}
                </div>
            </div>
            {showOverlay && (
                <div
                    className={cx([
                        "fixed top-0 left-0 w-full h-full z-50 p-4 bg-slate-900/75 backdrop-blur transition-opacity duration-1000",
                        { "opacity-0": !visible },
                    ])}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img src={src} alt={name} />
                    </div>
                    <Button
                        pill={true}
                        classNames={["absolute top-4 right-4 h-8 w-8 !p-0"]}
                        onClick={close}
                    >
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["times"]}
                            fixedWidth={true}
                        />
                    </Button>
                </div>
            )}
        </>
    );
};

export default LightBox;

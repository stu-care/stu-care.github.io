import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";

const Lightbox = ({ src, name }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const [isMagnifierVisible, setIsMagnifierVisible] = useState(false);
    const imageRef = useRef(null);

    const handleImageClick = () => {
        setIsFullScreen(true);
    };

    const handleClose = () => {
        setIsFullScreen(false);
        setIsMagnifierVisible(false);
    };

    const handleMouseMove = (e) => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            setMagnifierPosition({ x, y });
            setIsMagnifierVisible(true);
        } else {
            setIsMagnifierVisible(false);
        }
    };

    const handleMouseLeave = () => {
        setIsMagnifierVisible(false);
    };

    useEffect(() => {
        const handleTouchMove = (e) => {
            if (!imageRef.current) return;
            e.preventDefault();

            const touch = e.touches[0];
            const rect = imageRef.current.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                setMagnifierPosition({ x, y });
                setIsMagnifierVisible(true);
            } else {
                setIsMagnifierVisible(false);
            }
        };

        if (isFullScreen) {
            window.addEventListener("touchmove", handleTouchMove, {
                passive: false,
            });
        }

        return () => {
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [isFullScreen]);

    return (
        <div className="relative">
            <div className="cursor-pointer relative" onClick={handleImageClick}>
                <img
                    src={src}
                    alt={name}
                    className="w-full h-72 rounded-lg shadow-md object-center object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                    {name}
                </div>
            </div>

            {isFullScreen && (
                <div className="fixed p-8 inset-0 bg-black bg-opacity-75 backdrop-blur flex items-center justify-center z-10">
                    <div className="relative max-w-full max-h-full">
                        <img
                            ref={imageRef}
                            src={src}
                            alt={name}
                            className="max-w-full max-h-full object-contain"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            draggable={false}
                        />
                        {isMagnifierVisible && (
                            <div
                                className="absolute pointer-events-none border-2 backdrop-blur-lg border-white rounded-xl shadow-lg overflow-hidden"
                                style={{
                                    left:
                                        magnifierPosition.x -
                                        150 *
                                            (magnifierPosition.x /
                                                window.innerWidth +
                                                0.75),
                                    top: magnifierPosition.y - 25,
                                    width: "300px",
                                    height: "300px",
                                    backgroundImage: `url(${src})`,
                                    backgroundPosition: `-${
                                        magnifierPosition.x * 4 - 150
                                    }px -${magnifierPosition.y * 4 - 75}px`,
                                    backgroundSize: `${
                                        imageRef.current?.width * 4
                                    }px ${imageRef.current?.height * 4}px`,
                                }}
                            />
                        )}
                    </div>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 btn btn-ghost text-neutral btn-lg focus:outline-none"
                    >
                        <FontAwesomeIcon
                            icon={byPrefixAndName.fas["times"]}
                            fixedWidth={true}
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Lightbox;

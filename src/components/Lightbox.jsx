import { byPrefixAndName } from "@awesome.me/kit-96c2265b03/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";

const Lightbox = ({ src, name }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
    const [isMagnifierVisible, setIsMagnifierVisible] = useState(false);
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    const magnifierSize = 300;
    const halfMagnifier = magnifierSize / 2;
    const zoomFactor = 4;

    const handleImageClick = () => {
        setIsFullScreen(true);
    };

    const handleClose = () => {
        setIsFullScreen(false);
        setIsMagnifierVisible(false);
    };

    const updatePositions = (clientX, clientY) => {
        if (!imageRef.current || !containerRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        // Calculate cursor position relative to the image
        let cursorX = clientX - rect.left;
        let cursorY = clientY - rect.top;

        // Ensure cursor position is within image bounds
        cursorX = Math.max(0, Math.min(cursorX, rect.width));
        cursorY = Math.max(0, Math.min(cursorY, rect.height));

        setCursorPosition({ x: cursorX, y: cursorY });

        // Calculate magnifier position relative to the window
        let magnifierX = clientX - containerRect.left - halfMagnifier;
        let magnifierY = clientY - containerRect.top - halfMagnifier;

        // Adjust magnifier position to stay within window bounds
        magnifierX = Math.max(
            0,
            Math.min(magnifierX, window.innerWidth - magnifierSize)
        );
        magnifierY = Math.max(
            0,
            Math.min(magnifierY, window.innerHeight - magnifierSize)
        );

        setMagnifierPosition({ x: magnifierX, y: magnifierY });
        setIsMagnifierVisible(true);
    };

    const handleMouseMove = (e) => {
        updatePositions(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
        setIsMagnifierVisible(false);
    };

    useEffect(() => {
        const handleTouchMove = (e) => {
            if (!imageRef.current) return;
            e.preventDefault();
            const touch = e.touches[0];
            updatePositions(touch.clientX, touch.clientY);
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
                    className="w-full h-48 rounded-lg shadow-md object-center object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-lima-500 bg-opacity-50 text-white p-2 rounded-b-lg">
                    {name}
                </div>
            </div>

            {isFullScreen && (
                <div className="fixed p-4 inset-0 bg-corduroy-950 bg-opacity-75 backdrop-blur flex items-center justify-center z-50">
                    <div
                        ref={containerRef}
                        className="relative max-w-full max-h-full"
                    >
                        <img
                            ref={imageRef}
                            src={src}
                            alt={name}
                            className="max-w-[calc(100vw-2rem)] max-h-[calc(100dvh-2rem)] object-contain"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            draggable={false}
                        />
                        {isMagnifierVisible && (
                            <div
                                className="fixed pointer-events-none border-2 backdrop-blur-lg border-white rounded-xl shadow-lg overflow-hidden bg-no-repeat"
                                style={{
                                    left: magnifierPosition.x,
                                    top: magnifierPosition.y,
                                    width: `${magnifierSize}px`,
                                    height: `${magnifierSize}px`,
                                    backgroundImage: `url(${src})`,
                                    backgroundPosition: `-${
                                        cursorPosition.x * zoomFactor -
                                        halfMagnifier
                                    }px -${
                                        cursorPosition.y * zoomFactor -
                                        halfMagnifier
                                    }px`,
                                    backgroundSize: `${
                                        imageRef.current?.width * zoomFactor
                                    }px ${
                                        imageRef.current?.height * zoomFactor
                                    }px`,
                                }}
                            />
                        )}
                    </div>
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 btn btn-ghost text-neutral focus:outline-none z-[11]"
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

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCallback, useEffect, useState } from "react";

const Root = () => {
    const [colors, setColors] = useState({
        color1: [137, 207, 240],
        color2: [242, 174, 194],
        color3: [96, 166, 197],
        color4: [196, 131, 151],
        color5: [175, 167, 226],
    });

    useEffect(() => {
        document
            .querySelector(".g1")
            .style.setProperty("--color1", `${colors.color1.join(", ")}`);
        document
            .querySelector(".g2")
            .style.setProperty("--color2", `${colors.color2.join(", ")}`);
        document
            .querySelector(".g3")
            .style.setProperty("--color3", `${colors.color3.join(", ")}`);
        document
            .querySelector(".g4")
            .style.setProperty("--color4", `${colors.color4.join(", ")}`);
        document
            .querySelector(".g5")
            .style.setProperty("--color5", `${colors.color5.join(", ")}`);
        document
            .querySelector(".g6")
            .style.setProperty("--color1", `${colors.color1.join(", ")}`);
        document
            .querySelector(".g7")
            .style.setProperty("--color2", `${colors.color2.join(", ")}`);
        document
            .querySelector(".g8")
            .style.setProperty("--color3", `${colors.color3.join(", ")}`);
        document
            .querySelector(".g9")
            .style.setProperty("--color4", `${colors.color4.join(", ")}`);
        document
            .querySelector(".g10")
            .style.setProperty("--color5", `${colors.color5.join(", ")}`);
    }, [colors]);

    const changeColours = () => {
        setInterval(() => {
            setColors((prev) => ({
                ...prev,
                color2: prev.color2.map(
                    (c, i) => c + (prev.color1[i] - c) * (Math.random() / 100)
                ),
                color4: prev.color4.map(
                    (c, i) => c + (prev.color3[i] - c) * (Math.random() / 100)
                ),
                color5: prev.color5.map(
                    (c, i) => c + (prev.color3[i] - c) * (Math.random() / 100)
                ),
            }));
        }, 10);
    };

    return (
        <div
            className="sm:flex sm:justify-center sm:items-center sm:h-[100dvh] bg-gradient-to-br from-base-100 to-base-300 dark:to-corduroy-950 dark:from-corduroy-900"
            onClick={changeColours}
        >
            <div className="relative h-[100dvh] max-h-[100dvh] overflow-hidden w-full flex flex-col sm:max-w-[380px] sm:max-h-[800px] sm:rounded-2xl sm:shadow-2xl bg-base-100 dark:bg-corduroy-800 text-base-content dark:text-corduroy-200">
                <div className="gradient-bg absolute top-0 left-0 sm:rounded-2xl w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur"
                                />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="gradients-container w-full h-full">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                        <div className="g6"></div>
                        <div className="g7"></div>
                        <div className="g8"></div>
                        <div className="g9"></div>
                        <div className="g10"></div>
                    </div>
                </div>
                <Header />
                <div className="relative overflow-auto h-full grow flex flex-col">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;

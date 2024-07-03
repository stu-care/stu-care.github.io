import React from "react";
import RhakhaanMapUrl from "../assets/rhakhaan.png";
import JaimanMapUrl from "../assets/jaiman.png";
import HaalkitaineMapUrl from "../assets/haalkitaine.png";
import LightBox from "../components/LightBox";

const RMMapsPage = () => {
    return (
        <main className="relative grid grid-flow-row auto-rows-auto p-4 gap-4">
            <LightBox
                classNames={[
                    "border-slate-400/70 border-4 shadow-lg  bg-slate-400/50 ",
                ]}
                src={JaimanMapUrl}
                name={"Jaiman"}
            />
            <LightBox
                classNames={[
                    "border-slate-400/70 border-4 shadow-lg  bg-slate-400/50 ",
                ]}
                src={RhakhaanMapUrl}
                name={"Rhakhaan"}
            />
            <LightBox
                classNames={[
                    "border-slate-400/70 border-4 shadow-lg  bg-slate-400/50 ",
                ]}
                filters="brightness-[0.6] saturate-0"
                src={HaalkitaineMapUrl}
                name={"Haalkitaine"}
            />
        </main>
    );
};

export default RMMapsPage;

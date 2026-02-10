import { Link } from "react-router-dom";
import LogoFull from "../assets/LogoFull";
import LogoIcon from "../assets/LogoIcon";
import LogoType from "../assets/LogoType";

const LandingPage = () => {
    return ( <main className="w-full h-screen flex flex-col items-center justify-center gap-4 p-8">
        <LogoIcon className="w-24 absolute bottom-8 right-8 text-stone-300 hover:text-stone-700 transition-colors duration-500"/>
        <LogoType className="w-84 text-stone-300" fill={{ stu: "var(--color-stone-500)", dot: "var(--color-stone-500)" }}/>
    </main> );
}
 
export default LandingPage;
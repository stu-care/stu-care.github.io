import LogoIcon from "../assets/LogoIcon";
import LogoType from "../assets/LogoType";
import { useApp } from "../contexts/AppContext";

const LandingPage = () => {
    const { version } = useApp();

    return ( <main className="w-full h-screen relative flex flex-col items-center justify-center gap-4 p-8">
        <LogoIcon className="w-24 absolute bottom-8 right-8 text-stone-300 hover:text-stone-700 transition-colors duration-500"/>
        <LogoType className="w-84 text-stone-300" fill={{ stu: "var(--color-stone-500)", dot: "var(--color-stone-500)" }}/>
        <span className="cursor-default select-none text-xs font-extrabold text-stone-200 absolute bottom-8 left-8">v{version}</span>
    </main> );
}
 
export default LandingPage;
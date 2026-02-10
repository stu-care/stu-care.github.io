import { Link } from "react-router-dom";
import LogoFull from "../assets/LogoFull";
import { useApp } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-5a5002bf29/icons";

const NotFoundPage = () => {
    const { version } = useApp();

    return (<main className="w-full h-screen relative flex flex-col items-center justify-center gap-4 p-8">
        <LogoFull className="w-84 text-stone-300" fill={{ stu: "var(--color-stone-500)", icon: "var(--color-stone-700)", dot: "var(--color-stone-500)" }} />
        <p className="font-[Noto_Serif] text-stone-500 text-2xl">Whoops, nothing here!</p>
        <Link to="/" className="btn btn-circle btn-dash"><FontAwesomeIcon icon={byPrefixAndName.fas["arrow-left"]} /></Link>
        <span className="cursor-default select-none text-xs text-stone-200 absolute bottom-8 left-8">v{version}</span>
    </main>);
}


export default NotFoundPage;
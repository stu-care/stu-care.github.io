import { Outlet } from "react-router-dom";
import LogoFull from "../assets/LogoFull";
import { Link } from "react-router-dom";
import { useApp } from "../contexts/AppContext";

const Headered = () => {
    const {pageTitle} = useApp();
    return (<div className="h-screen flex flex-col">
        <header className="navbar bg-base-100 shadow-lg">
            {pageTitle}
            <Link className="ml-auto" to="/"><LogoFull className="w-48 text-primary" /></Link>
        </header>
        <div className="flex grow overflow-y-auto bg-base-300">
            <Outlet />
        </div>
    </div>);
}

export default Headered;
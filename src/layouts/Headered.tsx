import { Outlet } from "react-router-dom";
import LogoFull from "../assets/LogoFull";
import { Link } from "react-router-dom";
import { useApp } from "../contexts/AppContext";

const Headered = () => {
    const {pageTitle} = useApp();
    return (<>
        <header className="navbar bg-base-100 shadow-lg">
            {pageTitle}
            <Link className="ml-auto" to="/"><LogoFull className="w-48 text-primary" /></Link>
        </header>
            <Outlet />
    </>);
}

export default Headered;
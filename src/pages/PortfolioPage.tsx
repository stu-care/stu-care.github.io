import { Link } from "react-router-dom";
import LogoFull from "../assets/LogoFull";

const PortfolioPage = () => {
    return ( <main className="w-full flex flex-col items-center justify-center gap-4">
        <LogoFull className="w-96 text-primary"/>
        <Link to="/mtg" className="btn btn-primary btn-dash btn-lg mt-8">Enter</Link>
    </main> );
}
 
export default PortfolioPage;
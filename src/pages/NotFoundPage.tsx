import { Link } from "react-router-dom";
import LogoFull from "../assets/LogoFull";

const NotFoundPage = () => {
    return ( <main className="">
        <LogoFull className="w-96 text-primary"/>
        <p>Nothing here sorry!</p>
        <Link to="/" className="btn btn-link">Go back</Link>
    </main> );
}
 
export default NotFoundPage;
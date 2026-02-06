import { Outlet } from "react-router-dom";

const Headerless = () => {
    return ( 
        <>
            <Outlet />
        </>
     );
}
 
export default Headerless;
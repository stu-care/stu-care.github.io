import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Root = () => {
    return (
        <>
            <div className="rolemaster flex flex-col bg-slate-800 text-slate-200 h-screen w-full overflow relative">
                <Header />
                <Menu />
                <div className="overflow-y-auto h-full">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Root;

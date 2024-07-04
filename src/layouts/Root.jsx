import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Root = () => {
    return (
        <div className="lg:flex lg:items-center lg:justify-center lg:bg-slate-500 lg:p-8 lg:overflow-hidden lg:h-[100dvh]">
            <div className="rolemaster flex flex-col bg-slate-700 text-slate-200 h-[100dvh] w-full lg:max-w-md md:h-full overflow relative lg:shadow-md lg:shadow-black lg:rounded-xl lg:overflow-hidden">
                <Header />
                <Menu />
                <div className="overflow-y-auto h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Root;

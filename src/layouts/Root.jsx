import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useApp } from "../contexts/AppContext";

const Root = () => {
    return (
        <div className="sm:flex sm:justify-center sm:items-center sm:h-[100dvh] bg-slate-200 dark:bg-slate-900">
            <div className="h-[100dvh] max-h-[100dvh] overflow-hidden w-full flex flex-col sm:max-w-[380px] sm:max-h-[800px] sm:rounded-2xl sm:shadow-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                <Header />
                <div className="overflow-auto h-full grow flex flex-col">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Root;

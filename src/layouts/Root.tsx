import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
    return (
        <div className="sm:flex sm:justify-center sm:items-center sm:h-[100dvh] bg-gradient-to-br from-base-100 to-base-300 dark:to-corduroy-950 dark:from-corduroy-900">
            <div className="relative h-[100dvh] max-h-[100dvh] overflow-hidden w-full flex flex-col sm:max-w-[380px] sm:max-h-[800px] sm:rounded-2xl sm:shadow-2xl bg-base-100 dark:bg-corduroy-800 text-base-content dark:text-corduroy-200">
                <Header />
                <div className="relative overflow-auto h-full grow flex flex-col">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;
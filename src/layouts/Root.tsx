import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Menu from "../components/Menu";

const Root = () => {
	return (
		<div className="relative h-[100dvh] w-full max-w-[600px] overflow-hidden">
			<div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-end p-5 sm:p-10 md:p-20 bg-gradient-to-br from-primary to-base-100">
				<Logo className="h-20" />
				{/* <p className="text-2xl font-extralight">
					Ideas built beautifully<span className="text-primary">.</span>
				</p> */}
			</div>
			<div className="h-[calc(100%-.5rem)] w-[calc(100%-.5rem)] sm:h-[calc(100%-1rem)] sm:w-[calc(100%-1rem)] md:h-[calc(100%-2rem)] md:w-[calc(100%-2rem)] m-1 sm:m-2 md:m-4 p-1 sm:p-2 md:p-4 flex flex-col gap-1 sm:gap-2 md:gap-4 overflow-hidden">
				<Menu />
				<div className="grow bg-base-100/70 backdrop-blur-sm rounded-lg shadow-xl overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Root;

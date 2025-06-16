import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const Root = () => {
	return (
		<div className="relative h-[100dvh] w-full max-w-[600px] overflow-hidden">
			<div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-top p-5 sm:p-10 md:p-20 bg-gradient-to-br from-primary to-stone-900">
				<Logo className="h-20" />
				{/* <p className="text-2xl font-extralight">
					Ideas built beautifully<span className="text-primary">.</span>
				</p> */}
			</div>
			<Outlet />
		</div>
	);
};

export default Root;

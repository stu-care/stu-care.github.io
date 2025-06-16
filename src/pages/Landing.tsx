import { useEffect } from "react";
import Logo from "../components/Logo";

const LandingPage = () => {
	return (
		<main className="flex flex-col items-center justify-center h-full">
			<div>
				<Logo className="h-20" />
				{/* <p className="text-2xl font-extralight">
					Ideas built beautifully<span className="text-primary">.</span>
				</p> */}
			</div>
		</main>
	);
};

export default LandingPage;

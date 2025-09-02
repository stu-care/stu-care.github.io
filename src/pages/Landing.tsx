import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const LandingPage = () => {
	const {
		display: { setDisplay },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({ showHeader: false, showFooter: false });
	}, []);

	return (
		<main className="relative h-[100dvh] w-full overflow-hidden">
			<div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-end p-5 sm:p-10 md:p-20 bg-stone-50">
				<Logo className="h-20" />
				<p className="text-2xl font-extralight">
					Ideas built beautifully<span className="text-primary">.</span>
				</p>
			</div>
		</main>
	);
};

export default LandingPage;

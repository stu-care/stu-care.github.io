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
		<>
			<main className="p-4 h-full w-full flex items-center justify-center select-none">
				<div className="flex flex-col">
					<Link
						to="/home"
						className="text-4xl transition-colors duration-500 ease-in-out hover:text-primary"
					>
						<Logo className="h-20 hover:fill-primary" />
					</Link>
					<p className="text-2xl font-extralight">Ideas built beautifully.</p>
				</div>
			</main>
		</>
	);
};

export default LandingPage;

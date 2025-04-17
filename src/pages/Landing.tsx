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
		<main className="flex flex-col items-center justify-center h-full">
			<div>
				<Logo className="h-20" />
				<p className="text-2xl font-extralight">
					Ideas built beautifully<span className="text-primary">.</span>
				</p>
			</div>
		</main>
	);
};

export default LandingPage;

import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";

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
					<span>i am</span>
					<Link
						to="/home"
						className="text-4xl transition-colors duration-500 ease-in-out hover:text-primary"
					>
						stu
						<span className="text-primary">.care</span>
					</Link>
					<span className="self-end">a developer</span>
				</div>
			</main>
		</>
	);
};

export default LandingPage;

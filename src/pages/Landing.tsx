import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const LandingPage = () => {
	const {
		display: { setDisplay },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({ showHeader: false, showMenu: false, showFooter: false });
	}, []);

	return (
		<>
			<main>
				<div>
					i am{" "}
					<Link
						className="link link-primary hover:bg-primary hover:text-base-100 hover:no-underline"
						to="/home"
					>
						stu.care
					</Link>
					, a developer
				</div>
			</main>
		</>
	);
};

export default LandingPage;

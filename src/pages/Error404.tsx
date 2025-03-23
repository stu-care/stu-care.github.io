import { useEffect } from "react";
import { useApp } from "../contexts/AppContext";

const Error404Page = () => {
	const {
		display: { setDisplay },
	} = useApp();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setDisplay({ showHeader: false, showFooter: false });
	}, []);

	return (
		<main>
			<div>
				<div>
					4<span>04</span>
				</div>
				<span>not found</span>
			</div>
		</main>
	);
};

export default Error404Page;

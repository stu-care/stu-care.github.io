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
		<main className="p-4 h-full w-full flex items-center justify-center select-none">
			<div className="flex flex-col">
				<div className="text-4xl">
					4<span className="text-primary">04</span>
				</div>
				<span className="self-end select-none">not found</span>
			</div>
		</main>
	);
};

export default Error404Page;

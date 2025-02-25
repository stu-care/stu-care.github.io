import React, { useEffect } from "react";
import { useWithering } from "../contexts/WitheringContext";

const Landing = () => {
	const { breadcrumbs } = useWithering();

	// biome-ignore lint/correctness/useExhaustiveDependencies: onMount
	useEffect(() => {
		breadcrumbs.set(["home", "characters"]);
	}, []);

	return <>Landing</>;
};

export default Landing;

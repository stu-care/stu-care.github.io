import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Root from "./layouts/Root";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{ index: true, Component: LandingPage },
			{
				path: "/*",
				Component: NotFoundPage
			},
		],
	},
]);

export default router;

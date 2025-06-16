import { createHashRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Error404 from "./pages/Error404";
import LandingPage from "./pages/Landing";

export const router = createHashRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "*",
				element: <Error404 />,
			},
		],
	},
]);

export default router;

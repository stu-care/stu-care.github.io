import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Headerless from "./layouts/Headerless";
import Headered from "./layouts/Headered";
import MagicHomePage from "./pages/MagicHomePage";
import { AppProvider } from "./contexts/AppContext";

export const router = createBrowserRouter([

	{
		Component: Headerless,
		children: [
			{
				index: true,
				Component: LandingPage,
			},
		],
	},
	{
		path: "/mtg",
		Component: () => <AppProvider><Headered /></AppProvider>,
		children: [
			{
				index: true,
				Component: MagicHomePage,
			}
		],
	},
]);

export default router;

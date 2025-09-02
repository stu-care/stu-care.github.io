import { createHashRouter } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { RPGProvider } from "./contexts/RPGContext";
import Root from "./layouts/Root";
import Error404 from "./pages/Error404";
import HomePage from "./pages/Home";
import LandingPage from "./pages/Landing";
import RPGPage from "./pages/RPG";
import ExchangePage from "./pages/rpg/Exchange";
import HerbsPage from "./pages/rpg/Herbs";
import KeyInfoPage from "./pages/rpg/KeyInfo";
import OBPage from "./pages/rpg/OB";
import PursePage from "./pages/rpg/Purse";
import SkillsPage from "./pages/rpg/Skills";
import TimelinePage from "./pages/rpg/Timeline";
import Faldrin from "./pages/rpg/Faldrin";
import Dice from "./pages/rpg/Dice";
import SheetPage from "./pages/rpg/Sheet";
import DnD from "./layouts/DnD";
import DnDLandingPage from "./pages/dnd/DnDLandingPage";
import DnDCheatSheetPage from "./pages/dnd/DnDCheatSheetPage";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<LandingPage />
		),
	}]);

// export const router = createHashRouter([
// 	{
// 		path: "/",
// 		element: (
// 			<AppProvider>
// 				<RPGProvider>
// 					<Root />
// 				</RPGProvider>
// 			</AppProvider>
// 		),
// 		children: [
// 			{
// 				path: "/",
// 				element: <LandingPage />,
// 			},
// 			{
// 				path: "/home",
// 				element: <HomePage />,
// 			},
// 			{
// 				path: "/rpg",
// 				element: <RPGPage />,
// 			},
// 			{
// 				path: "/rpg/skills",
// 				element: <SkillsPage />,
// 			},
// 			{
// 				path: "/rpg/herbs",
// 				element: <HerbsPage />,
// 			},
// 			{
// 				path: "/rpg/purse",
// 				element: <PursePage />,
// 			},
// 			{
// 				path: "/rpg/exchange",
// 				element: <ExchangePage />,
// 			},
// 			{
// 				path: "/rpg/ob",
// 				element: <OBPage />,
// 			},
// 			{
// 				path: "/rpg/info",
// 				element: <KeyInfoPage />,
// 			},
// 			{
// 				path: "/rpg/timeline",
// 				element: <TimelinePage />,
// 			},
// 			{
// 				path: "/rpg/faldrin",
// 				element: <Faldrin />,
// 			},
// 			{
// 				path: "/rpg/dice",
// 				element: <Dice />,
// 			},
// 			{
// 				path: "/rpg/sheet",
// 				element: <SheetPage />,
// 			},
// 			{
// 				path: "*",
// 				element: <Error404 />,
// 			},
// 		],
// 	},
// 	{
// 		path: "/dnd",
// 		element: (
// 			<AppProvider>
// 				<RPGProvider>
// 					<DnD />
// 				</RPGProvider>
// 			</AppProvider>
// 		),
// 		children: [
// 			{
// 				path: "/dnd/",
// 				element: <DnDLandingPage />,
// 			},
// 			{
// 				path: "/dnd/cs",
// 				element: <DnDCheatSheetPage />,
// 			},
// 		],
// 	},
// ]);

export default router;

import { createHashRouter } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { RPGProvider } from "./contexts/RPGContext";
import Root from "./layouts/Root";
import LandingPage from "./pages/Landing";
import Error404 from "./pages/Error404";
import EntryPage from "./pages/Entry";
import HomePage from "./pages/Home";
import RPGPage from "./pages/RPG";
import MapsPage from "./pages/rpg/Maps";
import SkillsPage from "./pages/rpg/Skills";
import HerbsPage from "./pages/rpg/Herbs";
import ExchangePage from "./pages/rpg/Exchange";
import PursePage from "./pages/rpg/Purse";
import OBPage from "./pages/rpg/OB";

export const router = createHashRouter([
    {
        element: (
            <AppProvider>
                <RPGProvider>
                    <Root />
                </RPGProvider>
            </AppProvider>
        ),
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/rpg",
                element: <RPGPage />,
            },
            {
                path: "/rpg/maps",
                element: <MapsPage />,
            },
            {
                path: "/rpg/skills",
                element: <SkillsPage />,
            },
            {
                path: "/rpg/herbs",
                element: <HerbsPage />,
            },
            {
                path: "/rpg/purse",
                element: <PursePage />,
            },
            {
                path: "/rpg/exchange",
                element: <ExchangePage />,
            },
            {
                path: "/rpg/ob",
                element: <OBPage />,
            },
            {
                path: "/entry",
                element: <EntryPage />,
            },
            {
                path: "*",
                element: <Error404 />,
            },
        ],
    },
]);

export default router;

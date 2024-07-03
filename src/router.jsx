import { createHashRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Landing from "./layouts/Landing";
import Error404 from "./layouts/Error404";
import RolemasterLandingPage from "./pages/RolemasterLandingPage";
import InfoPage from "./pages/InfoPage";
import CharacterPage from "./pages/CharacterPage";
import RollPage from "./pages/RollPage";

export const router = createHashRouter([
    {
        element: <Root />,
        children: [
            {
                path: "/rolemaster",
                element: <RolemasterLandingPage />,
            },
            {
                path: "/rolemaster/info",
                element: <InfoPage />,
            },
            {
                path: "/rolemaster/character",
                element: <CharacterPage />,
            },

            {
                path: "/rolemaster/roll",
                element: <RollPage />,
            },
        ],
    },
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);

export default router;

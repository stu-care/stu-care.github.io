import { createHashRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Landing from "./layouts/Landing";
import Error404 from "./layouts/Error404";
import RMLandingPage from "./pages/RMLandingPage";
import RMInfoPage from "./pages/RMInfoPage";
import RMCharacterPage from "./pages/RMCharacterPage";
import RMRollPage from "./pages/RMRollPage";
import RMMapsPage from "./pages/RMMapsPage";
import RMMoneyPage from "./pages/RMMoneyPage";
import RMDebugPage from "./pages/RMDebugPage";

export const router = createHashRouter([
    {
        element: <Root />,
        children: [
            {
                path: "/rm",
                element: <RMLandingPage />,
            },
            {
                path: "/rm/info",
                element: <RMInfoPage />,
            },
            {
                path: "/rm/character",
                element: <RMCharacterPage />,
            },
            {
                path: "/rm/roll",
                element: <RMRollPage />,
            },
            {
                path: "/rm/maps",
                element: <RMMapsPage />,
            },
            {
                path: "/rm/currency",
                element: <RMMoneyPage />,
            },
            {
                path: "/rm/debug",
                element: <RMDebugPage />,
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

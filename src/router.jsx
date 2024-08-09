import { createHashRouter } from "react-router-dom";
import Root from "./layouts/Root";
import LandingPage from "./pages/Landing";
import Error404 from "./pages/Error404";
import { AppProvider } from "./contexts/AppContext";
import EntryPage from "./pages/Entry";
import HomePage from "./pages/Home";

export const router = createHashRouter([
    {
        element: (
            <AppProvider>
                <Root />
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

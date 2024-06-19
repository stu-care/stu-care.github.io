import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { AppProvider } from "./contexts/AppContext";
import { GameProvider } from "./contexts/GameContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <GameProvider>
                <RouterProvider router={router} />
            </GameProvider>
        </AppProvider>
    </React.StrictMode>
);

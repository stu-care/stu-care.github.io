import React, { createContext, useContext, useState } from "react";
import pkg from "../../package.json";

export const AppContext = createContext({
    menu: {
        toggle: () => {},
        close: () => {},
        isExpanded: true,
    },
});

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export const AppProvider = ({ children }) => {
    const [menuExpanded, setMenuExpanded] = useState(false);

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded);
    };

    const closeMenu = () => {
        setMenuExpanded(false);
    };

    return (
        <AppContext.Provider
            value={{
                menu: {
                    toggle: toggleMenu,
                    close: closeMenu,
                    isExpanded: menuExpanded,
                },
                version: pkg.version,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

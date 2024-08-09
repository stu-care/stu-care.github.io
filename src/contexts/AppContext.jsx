import React, { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create a custom hook to access the context
export const useApp = () => useContext(AppContext);

// Create the provider component
export const AppProvider = ({ children }) => {
    // Your provider logic goes here
    const [showHeader, setShowHeader] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    const [title, setTitle] = useState("");

    const setDisplay = ({ showHeader, title = "", showFooter }) => {
        setShowHeader(showHeader);
        setTitle(showHeader ? title : "");
        setShowFooter(showFooter);
    };

    // Replace `value` with the data you want to provide
    const value = {
        display: {
            showHeader: showHeader,
            title,
            showFooter: showFooter,
            setDisplay,
        },
        // Add your context values here
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

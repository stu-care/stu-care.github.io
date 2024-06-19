import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    // State to store our value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or, if none, return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Function to update local storage
    const setValue = (value) => {
        try {
            // Save to state
            setStoredValue(value);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    // Function to clear local storage for the specified key
    const clearValue = () => {
        try {
            // Clear local storage
            window.localStorage.removeItem(key);
            // Reset to initial value
            setStoredValue(initialValue);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Update local storage when storedValue changes
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setValue, clearValue];
}

export default useLocalStorage;

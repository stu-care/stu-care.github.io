import { useEffect, useState } from "react";

export function useLocalStorage<T>(
	key: string,
	initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
	// State to store our value
	const [storedValue, setStoredValue] = useState<T>(() => {
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
	const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
		setStoredValue((prev) => {
			const valueToStore = value instanceof Function ? value(prev) : value;
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
			return valueToStore;
		});
	};

	// Function to clear local storage for the specified key
	function clearValue() {
		try {
			// Clear local storage
			window.localStorage.removeItem(key);
			// Reset to initial value
			setStoredValue(initialValue);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		// Update local storage when storedValue changes
		window.localStorage.setItem(key, JSON.stringify(storedValue));
	}, [key, storedValue]);

	return [storedValue, setValue, clearValue];
}

// Example Usage:
// const [name, setName, clearName] = useLocalStorage<string>("key", "value");

export default useLocalStorage;

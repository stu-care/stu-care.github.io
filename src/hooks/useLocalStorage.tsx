import { useEffect, useState } from "react";

export function useLocalStorage<T>(
	key: string,
	initialValue: T,
): [T, (value: T) => void, () => void] {
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
	function setValue(value: T) {
		try {
			// Save to state
			setStoredValue(value);
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(error);
		}
	}

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

export default useLocalStorage;

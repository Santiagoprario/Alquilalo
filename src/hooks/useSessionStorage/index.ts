import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useSessionStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.sessionStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = (value: string) => {
		const valueToStore = value || '';
		setStoredValue(valueToStore);
		window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
	};

	return [storedValue, setValue];
};

export default useSessionStorage;

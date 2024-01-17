import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
	const defaultState = [false, false, false, false];

	const [headerState, setHeaderState] = useState(defaultState);

	const updateHeaderState = (index, newValue) => {
		resetHeaderState();
		setHeaderState((prevState) => {
			const newState = [...prevState];
			newState[index] = newValue;
			return newState;
		});
	};

	const resetHeaderState = () => {
		setHeaderState([false, false, false, false]);
	};

	return (
		<HeaderContext.Provider
			value={{ headerState, updateHeaderState, resetHeaderState }}
		>
			{children}
		</HeaderContext.Provider>
	);
};

export const useHeaderContext = () => {
	return useContext(HeaderContext);
};

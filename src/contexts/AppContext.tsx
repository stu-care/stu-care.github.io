import type React from "react";
import { createContext, useContext, useState } from "react";
import pkg from "../../package.json";

export interface IAppContext {
	version: string;
	pageTitle?: React.ReactElement;
	setters: {
		pageTitle: (title?: React.ReactElement) => void;
	};
}
export interface IAppProvider {
	children: React.ReactNode;
}

const defaultContext: IAppContext = {
	pageTitle: undefined,
	setters: {
		pageTitle: () => {},
	},
	version: pkg.version,
};

const AppContext = createContext<IAppContext>(defaultContext);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: IAppProvider) => {
	const [pageTitle, setPageTitle] = useState<React.ReactElement | undefined>(defaultContext.pageTitle);

	const value = {
		...defaultContext,
		pageTitle,
		setters: {
			pageTitle: setPageTitle,
		},
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

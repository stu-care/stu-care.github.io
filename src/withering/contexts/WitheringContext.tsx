import type React from "react";
import { createContext, useContext, useState } from "react";
import keyedBreadcrumbs from "../content/Breadcrumbs";

export interface IWitheringContext {
	breadcrumbs: {
		list: Breadcrumb[];
		set: (keys: string[]) => void;
	};
}
export interface IWitheringProvider {
	children: React.ReactNode;
}

export type Breadcrumb = { path: string; label: React.ReactNode };

const defaultContext: IWitheringContext = {
	breadcrumbs: {
		list: [],
		set: () => {},
	},
};

const WitheringContext = createContext<IWitheringContext>(defaultContext);

export const useWithering = () => useContext(WitheringContext);

export const WithieringProvider = ({ children }: IWitheringProvider) => {
	const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

	const set = (keys: string[]) => {
		setBreadcrumbs(keys.map((key) => keyedBreadcrumbs[key] as Breadcrumb));
	};

	const value = {
		breadcrumbs: {
			list: breadcrumbs,
			set,
		},
	};

	return (
		<WitheringContext.Provider value={value}>
			{children}
		</WitheringContext.Provider>
	);
};

import type React from "react";
import { createContext, useContext, useState } from "react";

export interface IAppContext {
	display: {
		showHeader: boolean;
		title: React.ReactNode;
		breadcrumbs: {
			list: Breadcrumb[];
			add: (breadcrumb: Breadcrumb) => void;
			clear: () => void;
		};
		showFooter: boolean;
		setDisplay: ({
			showHeader,
			title,
			showFooter,
		}: {
			showHeader?: boolean;
			title?: React.ReactNode;
			showFooter?: boolean;
		}) => void;
	};
}
export interface IAppProvider {
	children: React.ReactNode;
}

export type Breadcrumb = { url: string; label: React.ReactNode };

const defaultContext: IAppContext = {
	display: {
		showHeader: false,
		title: "",
		breadcrumbs: {
			list: [],
			add: () => {},
			clear: () => {},
		},
		showFooter: false,
		setDisplay: () => {},
	},
};

const AppContext = createContext<IAppContext>(defaultContext);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: IAppProvider) => {
	const [showHeader, setShowHeader] = useState<boolean>(false);
	const [showFooter, setShowFooter] = useState<boolean>(false);
	const [title, setTitle] = useState<React.ReactNode>("");
	const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

	const setDisplay = ({
		showHeader = true,
		title = "",
		showFooter = true,
	}: {
		showHeader?: boolean;
		title?: React.ReactNode;
		showFooter?: boolean;
	}) => {
		setShowHeader(showHeader);
		setTitle(showHeader ? title : "");
		setShowFooter(showFooter);
	};

	const clear = () => {
		setBreadcrumbs((prev) => []);
	};

	const add = ({ url, label }: Breadcrumb) => {
		setBreadcrumbs((prev) => [...prev, { url, label }]);
	};

	const value = {
		display: {
			showHeader: showHeader,
			title,
			breadcrumbs: {
				list: breadcrumbs,
				add,
				clear,
			},
			showFooter: showFooter,
			setDisplay,
		},
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

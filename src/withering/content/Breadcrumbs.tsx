import type { Breadcrumb } from "../contexts/WitheringContext";

export default {
	home: {
		path: "/withering/",
		label: "The Withering",
	},
	characters: {
		path: "/withering/characters",
		label: "Characters",
	},
} as { [key: string]: Breadcrumb };

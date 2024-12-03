import type { Rates } from "./helpers/currency";

declare global {
	interface String {
		to(abbr: keyof Rates): string;
	}
}

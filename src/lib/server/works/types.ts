import type { ICON_MAP } from '$lib/const';

export type LoadWorkDetailsResponse = Work[];

export type IconNameType = keyof typeof ICON_MAP;

interface Work {
	slug: string;
	image: string;
	title: string;
	term: Term;
	overview: string;
	stacks: Card[];
	features: Card[];
	descriptions: Description[];
}

interface Card {
	iconName: IconNameType;
	title?: string;
	label: string;
}

interface Description {
	label: string;
	body: string[];
}
export interface Term {
	from: string;
	to: string;
}

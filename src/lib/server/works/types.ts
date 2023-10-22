import type { Icon, Term } from '../types';

export type LoadWorkDetailsResponse = Work[];

interface Work {
	slug: string;
	image: string;
	title: string;
	term: Term;
	overview: string;
	stacks: Icon[];
	features: Icon[];
	descriptions: Description[];
}

interface Description {
	label: string;
	markdown: string;
}

import type { ICON_MAP } from '$lib/const';
import type { Icon, Term } from '../types';

export type LoadHistoryResponse = History[];

export type IconNameType = keyof typeof ICON_MAP;

export interface History {
	title: string;
	description?: string;
	term: Term;
	workOverviews: WorkOverview[];
}

export interface WorkOverview {
	title: string;
	url?: string;
	term?: Term;
	stacks?: Icon[];
	description: string;
}

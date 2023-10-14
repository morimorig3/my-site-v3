import type { ICON_MAP } from '$lib/const';

export interface Term {
	from: string;
	to: string;
}

export interface Icon {
	iconName: IconNameType;
	title?: string;
	label: string;
}

export type IconNameType = keyof typeof ICON_MAP;

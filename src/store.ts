import { writable } from 'svelte/store';

import type { Theme } from '$lib/types';

import { browser } from '$app/environment';
import { THEME, THEME_LOCAL_STORAGE_KEY } from '$lib/const';

function createFilterTopics() {
	const { subscribe, set, update } = writable<string[]>([]);

	return {
		subscribe,
		add: (filterName: string) =>
			update((state) => (state.includes(filterName) ? state : [...state, filterName])),
		remove: (filterName: string) =>
			update((state) => state.filter((topics) => topics !== filterName)),
		reset: () => set([])
	};
}

export const filterTopics = createFilterTopics();

function createIsDesktop() {
	const { subscribe, update } = writable(false);
	return {
		subscribe,
		set: (screenSize: number) => update(() => screenSize > 959)
	};
}

export const isDeskTop = createIsDesktop();

function createTheme() {
	const localStorageTheme =
		browser && (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme | null);
	const OSTheme =
		browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT;
	if (!localStorageTheme && browser) {
		localStorage.setItem(THEME_LOCAL_STORAGE_KEY, OSTheme);
	}
	const initialTheme = localStorageTheme || OSTheme;
	const { subscribe, update } = writable<Theme>(initialTheme);
	if (browser) {
		const html: HTMLHtmlElement | null = document.querySelector('html');
		if (html) {
			html.classList.add(initialTheme);
		}
	}

	return {
		subscribe,
		toggle: () => {
			update((state) => {
				const newTheme = state === THEME.DARK ? THEME.LIGHT : THEME.DARK;
				const html: HTMLHtmlElement | null = document.querySelector('html');
				localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
				if (html) {
					html.classList.remove(state);
					html.classList.add(newTheme);
				}
				return newTheme;
			});
		}
	};
}

export const theme = createTheme();

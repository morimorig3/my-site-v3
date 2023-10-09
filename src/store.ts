import { writable } from 'svelte/store';

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

import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { loadHistory } from '$lib/server/about';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const response = await loadHistory();
	if (response) {
		return {
			history: response
		};
	}

	throw error(404, 'Not found');
};

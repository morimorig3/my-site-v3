import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { loadWorkDetails } from '$lib/server/works';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const response = await loadWorkDetails();
	if (response) {
		return {
			works: response.map(({ slug, title, term, image }) => ({ slug, title, term, image }))
		};
	}

	throw error(404, 'Not found');
};

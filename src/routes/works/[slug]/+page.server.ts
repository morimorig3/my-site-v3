import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { loadWorkDetails } from '$lib/server/works';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const response = await loadWorkDetails();
	const work = response.find(({ slug }) => slug === params.slug);
	if (work) {
		return work;
	}

	throw error(404, 'Not found');
};

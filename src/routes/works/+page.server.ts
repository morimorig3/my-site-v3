import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { loadWorkDetailList } from '$lib/server/works';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const response = await loadWorkDetailList();
	if (!response) {
		throw error(404, { message: ERROR_MESSAGE_COMMON });
	}
	const workList = response.map(({ slug, title, term, image }) => ({ slug, title, term, image }));

	return { workList };
};

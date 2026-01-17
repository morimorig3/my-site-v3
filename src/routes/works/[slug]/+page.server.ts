import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { loadWorkDetailList } from '$lib/server/works';

export const load: PageServerLoad = async ({ params }) => {
	const response = await loadWorkDetailList();
	if (!response) {
		error(404, { message: ERROR_MESSAGE_COMMON });
	}
	const work = response.find(({ slug }) => slug === params.slug);
	if (!work) {
		error(404, { message: ERROR_MESSAGE_COMMON });
	}

	return work;
};

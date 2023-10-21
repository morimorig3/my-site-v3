import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { loadHistoryList } from '$lib/server/about';

export const load: PageServerLoad = async () => {
	const response = await loadHistoryList();
	if (!response) {
		throw error(404, { message: ERROR_MESSAGE_COMMON });
	}

	return {
		historyList: response
	};
};

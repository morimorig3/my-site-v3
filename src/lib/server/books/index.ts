import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import type { LoadBookReviewResponse } from './types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';

export async function loadBookReviewList() {
	const data = await readFile('data/booksReview.json', {
		encoding: 'utf-8'
	}).catch(() => {
		throw error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});

	return JSON.parse(data) as LoadBookReviewResponse;
}

import { readFile } from 'fs/promises';

import type { LoadBookReviewResponse } from './types';

export async function loadBookReview() {
	const data = await readFile('data/booksReview.json', {
		encoding: 'utf-8'
	});

	return JSON.parse(data) as LoadBookReviewResponse;
}

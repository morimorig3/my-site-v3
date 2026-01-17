import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import { markdownToHtml } from '../markdown';

import type { LoadBookReviewResponse } from './types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';

export async function loadBookReviewList() {
	const data = await readFile('data/bookReviewList.json', {
		encoding: 'utf-8'
	}).catch(() => {
		error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});
	const bookReviewList = JSON.parse(data) as LoadBookReviewResponse;

	const markdownWithBookReviewList = await Promise.all(
		bookReviewList.map(async (bookReview) => {
			const markdown = await readFile(bookReview.reviewHtml, { encoding: 'utf-8' });
			const html = await markdownToHtml(markdown);
			return {
				...bookReview,
				reviewHtml: html
			};
		})
	);

	return markdownWithBookReviewList;
}

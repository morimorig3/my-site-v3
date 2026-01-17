import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import { markdownToHtml } from '../markdown';

import type { LoadWorkDetailsResponse } from './types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';

/**
 * JSONファイルを読み込み
 */
export async function loadWorkDetailList() {
	const response = await readFile('data/workDetailList.json', {
		encoding: 'utf-8'
	}).catch(() => {
		error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});
	const workDetailList = JSON.parse(response) as LoadWorkDetailsResponse;

	const markdownWithWorkDetailList = await Promise.all(
		workDetailList.map(async (workDetail) => {
			const descriptions = await Promise.all(
				workDetail.descriptions.map(async ({ label, markdown }) => {
					const md = await readFile(markdown, { encoding: 'utf-8' });
					const html = await markdownToHtml(md);
					return {
						label,
						markdown: html
					};
				})
			);

			return {
				...workDetail,
				descriptions
			};
		})
	);
	return markdownWithWorkDetailList;
}

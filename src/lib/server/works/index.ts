import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import type { LoadWorkDetailsResponse } from './types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';

/**
 * JSONファイルを読み込み
 */
export async function loadWorkDetailList() {
	const response = await readFile('data/workDetailList.json', {
		encoding: 'utf-8'
	}).catch(() => {
		throw error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});
	return JSON.parse(response) as LoadWorkDetailsResponse;
}

import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import type { LoadDevelopReposResponse } from './types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';

/**
 * JSONファイルから対象リポジトリ情報取得
 */
export async function loadDevelopRepoList() {
	const response = await readFile('data/developRepoList.json', {
		encoding: 'utf-8'
	}).catch(() => {
		throw error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});
	return JSON.parse(response) as LoadDevelopReposResponse;
}

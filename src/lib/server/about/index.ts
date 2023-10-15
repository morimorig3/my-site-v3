import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import type { LoadHistoryResponse } from './types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';

/**
 * JSONファイルから対象リポジトリ情報取得
 */
export async function loadHistory() {
	const response = await readFile('data/history.json', {
		encoding: 'utf-8'
	}).catch(() => {
		throw error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});
	return JSON.parse(response) as LoadHistoryResponse;
}

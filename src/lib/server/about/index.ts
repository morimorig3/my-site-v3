import { readFile } from 'fs/promises';

import type { LoadHistoryResponse } from './types';

/**
 * JSONファイルから対象リポジトリ情報取得
 */
export async function loadHistory() {
	const response = await readFile('data/history.json', {
		encoding: 'utf-8'
	});
	return JSON.parse(response) as LoadHistoryResponse;
}

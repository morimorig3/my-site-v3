import { readFile } from 'fs/promises';

import type { LoadWorkDetailsResponse } from './types';

/**
 * JSONファイルから対象リポジトリ情報取得
 */
export async function loadWorkDetails() {
	const response = await readFile('data/workDetails.json', {
		encoding: 'utf-8'
	});
	return JSON.parse(response) as LoadWorkDetailsResponse;
}

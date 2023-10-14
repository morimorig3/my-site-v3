import { readFile } from 'fs/promises';

import type { LoadWorkDetailsResponse } from './types';

/**
 * JSONファイルを読み込み
 */
export async function loadWorkDetails() {
	const response = await readFile('data/workDetails.json', {
		encoding: 'utf-8'
	});
	return JSON.parse(response) as LoadWorkDetailsResponse;
}

import { readFile } from 'fs/promises';

import { GITHUB_API_HEADERS } from './const';

import type { GitHubGetUserReposParams, GitHubGetUserReposResponse } from './types';
import type { LoadDevelopReposResponse } from '../books/types';

import { OCTOKIT } from '$lib';

/**
 * 認証ユーザーのリポジトリ情報取得
 */
export async function getUserRepos() {
	const params: GitHubGetUserReposParams = {
		per_page: 100,
		sort: 'created'
	};
	const { data }: GitHubGetUserReposResponse = await OCTOKIT.request('GET /user/repos', {
		...GITHUB_API_HEADERS,
		...params
	});
	return data;
}

/**
 * JSONファイルから対象リポジトリ情報取得
 */
export async function loadDevelopRepos() {
	const response = await readFile('data/developRepos.json', {
		encoding: 'utf-8'
	});
	return JSON.parse(response) as LoadDevelopReposResponse;
}

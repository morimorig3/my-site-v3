import { error } from '@sveltejs/kit';

import { GITHUB_API_HEADERS } from './const';

import type { GitHubGetUserReposParams, GitHubGetUserReposResponse } from './types';

import { OCTOKIT } from '$lib';
import { ERROR_MESSAGE_COMMON } from '$lib/const';

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
	}).catch(() => {
		throw error(500, ERROR_MESSAGE_COMMON);
	});
	return data;
}

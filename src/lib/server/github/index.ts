import { error } from '@sveltejs/kit';

import { readFile } from 'fs/promises';

import { GITHUB_API_HEADERS } from './const';

import type { GitHubGetUserReposParams, GitHubGetUserReposResponse } from './types';
import type { LoadDevelopReposResponse } from '../books/types';

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

/**
 * JSONファイルから対象リポジトリ情報取得
 */
export async function loadDevelopRepos() {
	const response = await readFile('data/developRepos.json', {
		encoding: 'utf-8'
	}).catch(() => {
		throw error(500, {
			message: ERROR_MESSAGE_COMMON
		});
	});
	return JSON.parse(response) as LoadDevelopReposResponse;
}

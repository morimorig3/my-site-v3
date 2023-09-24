import { readFile } from 'fs/promises';

import { Octokit } from 'octokit';

import type { LoadDevelopReposResponse } from '$lib/server/types';
import type { Endpoints } from '@octokit/types';

import { env } from '$env/dynamic/private';

export const prerender = true;

const octokit = new Octokit({
	auth: env.GITHUB_PERSONAL_ACCESS_TOKENS
});

export async function load() {
	type Response = Endpoints['GET /user/repos']['response'];
	type Param = Endpoints['GET /user/repos']['parameters'];
	const param: Param = {
		page: 100
	};
	const response: Response = await octokit.request('GET /user/repos', {
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		},
		param
	});
	const { data } = response;

	const repoNames = await readFile('data/developRepos.json', {
		encoding: 'utf-8'
	}).then((res) => JSON.parse(res) as LoadDevelopReposResponse);
	const names = repoNames.map(({ repositoryName }) => repositoryName);

	return { items: data.filter(({ name }) => names.includes(name)), fullItems: data };
}

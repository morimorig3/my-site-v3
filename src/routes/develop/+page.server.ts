import { error } from '@sveltejs/kit';

import type { PageServerLoad } from '../$types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { loadDevelopRepoList } from '$lib/server/develop';
import { getUserRepos } from '$lib/server/github';

export const load: PageServerLoad = async () => {
	const userReposResponse = await getUserRepos();
	const developRepoListResponse = await loadDevelopRepoList();

	if (!userReposResponse || !developRepoListResponse) {
		throw error(404, { message: ERROR_MESSAGE_COMMON });
	}

	const developRepoNameList = developRepoListResponse.map(({ repositoryName }) => repositoryName);
	return {
		developList: userReposResponse.filter(({ name }) => developRepoNameList.includes(name))
	};
};

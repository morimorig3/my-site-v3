import type { PageServerLoad } from './$types';

import { getUserRepos, loadDevelopRepos } from '$lib/server/githubAPI';
import { loadWorkDetails } from '$lib/server/works';

export const load: PageServerLoad = async () => {
	const repoResponse = await getUserRepos();
	const repoNameResponse = await loadDevelopRepos().then((res) =>
		res.map(({ repositoryName }) => repositoryName)
	);
	const developData = repoResponse.filter(({ name }) => repoNameResponse.includes(name));

	const worksResponse = await loadWorkDetails();
	const workData = worksResponse.map(({ slug, title, term, image }) => ({
		slug,
		title,
		term,
		image
	}));
	return {
		developData,
		workData
	};
};

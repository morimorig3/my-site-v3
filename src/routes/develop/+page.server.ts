import { getUserRepos, loadDevelopRepos } from '$lib/server/github';

export const prerender = true;

export async function load() {
	const reposData = await getUserRepos();
	const repoNames = await loadDevelopRepos().then((res) =>
		res.map(({ repositoryName }) => repositoryName)
	);
	return { items: reposData.filter(({ name }) => repoNames.includes(name)) };
}

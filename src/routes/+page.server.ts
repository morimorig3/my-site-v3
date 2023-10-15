import type { PageServerLoad } from './$types';

import { loadHistory } from '$lib/server/about';
import { getBookList, loadBookReview } from '$lib/server/books';
import { reviewedWith } from '$lib/server/books/functions/reviewedWith';
import { getUserRepos, loadDevelopRepos } from '$lib/server/github';
import { loadWorkDetails } from '$lib/server/works';

export const prerender = true;

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
	const historyResponse = await loadHistory();
	const historyData = historyResponse[0];

	const { favorite } = await getBookList();
	const reviewData = await loadBookReview();
	const [reviewedWithFavorite] = [favorite].map((bookItem) => ({
		...bookItem,
		items: reviewedWith(bookItem.items, reviewData)
	}));
	const bookData = reviewedWithFavorite;

	return {
		developData,
		workData,
		bookData,
		historyData
	};
};

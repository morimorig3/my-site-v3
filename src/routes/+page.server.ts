import type { PageServerLoad } from './$types';

import { loadHistoryList } from '$lib/server/about';
import { loadBookReviewList } from '$lib/server/books';
import { reviewedWith } from '$lib/server/books/functions/reviewedWith';
import { loadDevelopRepoList } from '$lib/server/develop';
import { getUserRepos } from '$lib/server/github';
import { getBookList } from '$lib/server/googleBooks';
import { loadWorkDetailList } from '$lib/server/works';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const userReposResponse = await getUserRepos();
	const developRepoListResponse = await loadDevelopRepoList();
	const developRepoNameList = developRepoListResponse.map(({ repositoryName }) => repositoryName);
	const developData = userReposResponse.filter(({ name }) => developRepoNameList.includes(name));

	const worksResponse = await loadWorkDetailList();
	const workData = worksResponse.map(({ slug, title, term, image }) => ({
		slug,
		title,
		term,
		image
	}));
	const historyResponse = await loadHistoryList();
	const historyData = historyResponse[0];

	const { favoriteBookShelves } = await getBookList();
	const reviewData = await loadBookReviewList();
	const [reviewedWithFavorite] = [favoriteBookShelves].map((bookItem) => ({
		...bookItem,
		bookList: reviewedWith(bookItem.bookList, reviewData)
	}));
	const bookData = reviewedWithFavorite;

	return {
		developData,
		workData,
		bookData,
		historyData
	};
};

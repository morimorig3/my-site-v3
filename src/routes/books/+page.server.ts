import { error } from '@sveltejs/kit';

import type { PageServerLoad } from '../$types';

import { ERROR_MESSAGE_COMMON } from '$lib/const';
import { loadBookReviewList } from '$lib/server/books';
import { reviewedWith } from '$lib/server/books/functions/reviewedWith';
import { getBookList } from '$lib/server/googleBooks';

export const load: PageServerLoad = async () => {
	const {
		favoriteBookShelves: favoriteBookShelvesResponse,
		forBeginnerBookShelves: forBeginnerBookShelvesResponse,
		toReadBookShelves: toReadBookShelvesResponse
	} = await getBookList();
	const loadBookReviewListResponse = await loadBookReviewList();

	if (
		!favoriteBookShelvesResponse ||
		!forBeginnerBookShelvesResponse ||
		!toReadBookShelvesResponse ||
		!loadBookReviewListResponse
	) {
		throw error(404, { message: ERROR_MESSAGE_COMMON });
	}
	const [reviewedWithFavorite, reviewedWithForBeginner, reviewedWithToRead] = [
		favoriteBookShelvesResponse,
		forBeginnerBookShelvesResponse,
		toReadBookShelvesResponse
	].map((bookItem) => ({
		...bookItem,
		bookList: reviewedWith(bookItem.bookList, loadBookReviewListResponse)
	}));

	return {
		favoriteBookShelves: reviewedWithFavorite,
		forBeginnerBookShelves: reviewedWithForBeginner,
		toReadBookShelves: reviewedWithToRead
	};
};

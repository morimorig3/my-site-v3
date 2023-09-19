import { getBookList, loadBookReview } from '$lib/server/books';
import { reviewedWith } from '$lib/server/books/functions/reviewedWith';

export const prerender = true;

export async function load() {
	const { favorite, toRead, forBeginner } = await getBookList();
	const reviewData = await loadBookReview();
	const [reviewedWithFavorite, reviewedWithForBeginner, reviewedWithToRead] = [
		favorite,
		toRead,
		forBeginner
	].map((bookItem) => ({ ...bookItem, items: reviewedWith(bookItem.items, reviewData) }));

	return {
		favorite: reviewedWithFavorite,
		forBeginner: reviewedWithForBeginner,
		toRead: reviewedWithToRead
	};
}

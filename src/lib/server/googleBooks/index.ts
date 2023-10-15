import { BOOK_SHELVES_INDEX, GOOGLE_BOOKS_UID } from './const';

import type { GetBookListResponse } from './types';

import { env } from '$env/dynamic/private';
import { AXIOS } from '$lib';

export async function getBookList() {
	return Promise.all([
		getBookShelves(BOOK_SHELVES_INDEX.FAVORITE),
		getBookShelves(BOOK_SHELVES_INDEX.TO_READ),
		getBookShelves(BOOK_SHELVES_INDEX.FOR_BEGINNER)
	])
		.then(([{ items: favoriteItems }, { items: toReadItems }, { items: forBeginnerItems }]) => ({
			favorite: {
				items: favoriteItems,
				title: 'お気に入り'
			},
			toRead: {
				items: toReadItems,
				title: '読みたい'
			},
			forBeginner: {
				items: forBeginnerItems,
				title: '基礎知識'
			}
		}))
		.catch((error) => {
			throw new Error(error);
		});
}

/**
 * Google Books マイライブラリから本棚情報を取得する
 * @param shelvesIndex - 本棚ID
 */
function getBookShelves(shelvesIndex: number) {
	return AXIOS.get<GetBookListResponse>(
		`https://www.googleapis.com/books/v1/users/${GOOGLE_BOOKS_UID}/bookshelves/${shelvesIndex}/volumes?key=${env.GOOGLE_BOOKS_API_KEY}`
	).then(({ data }) => data);
}

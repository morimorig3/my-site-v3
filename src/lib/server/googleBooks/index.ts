import { error } from '@sveltejs/kit';

import { BOOK_SHELVES_INDEX, GOOGLE_BOOKS_UID } from './const';

import type { GetBookListResponse } from './types';

import { env } from '$env/dynamic/private';
import { AXIOS } from '$lib';
import { ERROR_MESSAGE_COMMON } from '$lib/const';

export async function getBookList() {
	return Promise.all([
		getBookShelves(BOOK_SHELVES_INDEX.FAVORITE),
		getBookShelves(BOOK_SHELVES_INDEX.TO_READ),
		getBookShelves(BOOK_SHELVES_INDEX.FOR_BEGINNER),
		getBookShelves(BOOK_SHELVES_INDEX.GOOD_BOOKS)
	])
		.then(
			([
				{ items: favoriteBookList },
				{ items: toReadBookList },
				{ items: forBeginnerBookList },
				{ items: GoodBooksBookList }
			]) => ({
				favoriteBookShelves: {
					bookList: favoriteBookList,
					title: 'お気に入り'
				},
				toReadBookShelves: {
					bookList: toReadBookList,
					title: '読みたい'
				},
				forBeginnerBookShelves: {
					bookList: forBeginnerBookList,
					title: '基礎知識'
				},
				goodBooksBookShelves: {
					bookList: GoodBooksBookList,
					title: '良書'
				}
			})
		)
		.catch(() => {
			throw error(500, {
				message: ERROR_MESSAGE_COMMON
			});
		});
}

/**
 * Google Books マイライブラリから本棚情報を取得する
 * @param shelvesIndex - 本棚ID
 */
async function getBookShelves(shelvesIndex: number) {
	const response = await AXIOS.get<GetBookListResponse>(
		`https://www.googleapis.com/books/v1/users/${GOOGLE_BOOKS_UID}/bookshelves/${shelvesIndex}/volumes?key=${env.GOOGLE_BOOKS_API_KEY}`
	);
	const { data } = response;
	return data;
}

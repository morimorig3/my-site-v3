/**
 * Google Booksの本棚ID
 * @property FAVORITE - お気に入り
 * @property TO_READ - 読みたい
 * @property HAVE_READ - 既読
 * @property FOR_BEGINNER - 初心者
 * @property GOOD_BOOKS - 良書
 */
export const BOOK_SHELVES_INDEX = {
	FAVORITE: 0,
	TO_READ: 2,
	HAVE_READ: 4,
	FOR_BEGINNER: 1001,
	GOOD_BOOKS: 1002
} as const;

/**
 * Google BooksのUID
 */
export const GOOGLE_BOOKS_UID = '102187175672718197277';

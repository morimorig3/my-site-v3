import type { BookItems, LoadBookReviewResponse, ReviewedWith } from '$lib/server/types';

/**
 * 本棚リストにレビュー情報を追加する
 * @param bookItems
 * @param review
 */
export function reviewedWith(
	bookItems: BookItems[],
	review: LoadBookReviewResponse
): ReviewedWith<BookItems>[] {
	return bookItems.map((bookItem) => {
		const bookItemIdentifiers = bookItem.volumeInfo.industryIdentifiers.map(
			({ identifier }) => identifier
		);
		const reviewTarget = review.find(({ industryIdentifiers }) =>
			industryIdentifiers.some(({ identifier: reviewIdentifier }) =>
				bookItemIdentifiers.includes(reviewIdentifier)
			)
		);
		return {
			...bookItem,
			review: reviewTarget ? reviewTarget.review : ''
		};
	});
}

import type { LoadBookReviewResponse, ReviewedWith } from '$lib/server/books/types';
import type { BookItem } from '$lib/server/googleBooks/types';

/**
 * 本棚リストにレビュー情報を追加する
 * @param bookItemList
 * @param review
 */
export function reviewedWith(
	bookItemList: BookItem[],
	review: LoadBookReviewResponse
): ReviewedWith<BookItem>[] {
	return bookItemList.map((bookItem) => {
		const bookItemIdentifierList = bookItem.volumeInfo.industryIdentifiers.map(
			({ identifier }) => identifier
		);
		const reviewTarget = review.find(({ industryIdentifierList }) =>
			industryIdentifierList.some(({ identifier: reviewIdentifier }) =>
				bookItemIdentifierList.includes(reviewIdentifier)
			)
		);
		return {
			...bookItem,
			reviewHtml: reviewTarget ? reviewTarget.reviewHtml : ''
		};
	});
}

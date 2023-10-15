import type { IndustryIdentifier } from '../googleBooks/types';

export type LoadBookReviewResponse = BookReview[];
interface BookReview {
	title: string;
	industryIdentifierList: IndustryIdentifier[];
	review: string;
}

export type ReviewedWith<T> = T & {
	review?: string;
};

import type { IndustryIdentifier } from '../googleBooks/types';

export type LoadBookReviewResponse = BookReview[];
interface BookReview {
	title: string;
	industryIdentifierList: IndustryIdentifier[];
	reviewHtml: string;
}

export type ReviewedWith<T> = T & {
	reviewHtml?: string;
};

export interface GetBookListResponse {
	items: BookItems[];
	kind: string;
	totalItems: number;
}
export interface VolumeInfo {
	title: string;
	authors?: string[];
	publishedDate?: string;
	description?: string;
	publisher?: string;
	industryIdentifiers: IndustryIdentifier[];
	imageLinks?: {
		smallThumbnail: string;
		thumbnail: string;
	};
	pageCount: number;
	previewLink?: string;
	infoLink: string;
}

interface IndustryIdentifier {
	type: IndustryIdentifierType;
	identifier: string;
}

type IndustryIdentifierType = 'ISBN_13' | 'ISBN_10';

export interface BookItems {
	id: string;
	volumeInfo: VolumeInfo;
	saleInfo?: {
		listPrice: {
			amount: number;
		};
	};
}

export type LoadBookReviewResponse = BookReview[];
interface BookReview {
	title: string;
	industryIdentifiers: IndustryIdentifier[];
	review: string;
}

export type ReviewedWith<T> = T & {
	review?: string;
};

interface DevelopRepo {
	repositoryName: string;
	link?: string;
}

export type LoadDevelopReposResponse = DevelopRepo[];

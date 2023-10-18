export interface GetBookListResponse {
	items: BookItem[];
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

export interface IndustryIdentifier {
	type: IndustryIdentifierType;
	identifier: string;
}

type IndustryIdentifierType = 'ISBN_13' | 'ISBN_10';

export interface BookItem {
	id: string;
	volumeInfo: VolumeInfo;
	saleInfo?: {
		listPrice: {
			amount: number;
		};
	};
}

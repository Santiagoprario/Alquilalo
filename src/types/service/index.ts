import { FetchServiceParams } from '../../utils/fetch/index';

export type FetchServiceEndpointParams = Omit<FetchServiceParams, 'url'>;

export interface FetchServiceEndpoint<T> {
	keys: Array<unknown>;
	fetcher: (params: FetchServiceEndpointParams) => Promise<T>;
}

export interface FetchError<T> {
	data: T;
	redirected: boolean;
	status: boolean;
	statusText: string;
	url: string;
	headers: { [x: string]: string };
}

export interface PaginatedResponse<T> {
	results: Array<T>;
	currentPage: number;
	totalAmountPages: number;
	totalAmountResults: number;
}

export interface PaginationParameters<T> {
	page: number;
	order?: 'asc' | 'desc';
	orderBy?: keyof T;
}

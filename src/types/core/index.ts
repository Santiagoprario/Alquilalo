import { FetchError } from '../service';

export interface AppError {
	title?: string;
	subtitle?: string;
	detail?: string;
	fetchError?: FetchError<unknown>;
	retryOnError?(): void;
}

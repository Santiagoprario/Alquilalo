export interface AppErrorContainerProps {
	title?: string;
	subtitle?: string;
	retryOnError?(): void;
}

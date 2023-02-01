import { setupWorker, SetupWorkerApi } from 'msw';
import handlers from './handlers';

export const worker: SetupWorkerApi = setupWorker(...handlers);

export const initMSW: () => Promise<void> = async () => {
	// if (NODE_ENV === 'development') {
	// 	await worker.start({
	// 		onUnhandledRequest: 'bypass',
	// 	})
	// }
	await worker.start({
		onUnhandledRequest: 'bypass',
	});
};

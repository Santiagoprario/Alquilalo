import { setupWorker, SetupWorkerApi } from 'msw';
import handlers from './handlers';

export const worker: SetupWorkerApi = setupWorker(...handlers);

export const initMSW: () => Promise<void> = async () => {
	if (import.meta.env.VITE_APP_NODE_ENV === 'local') {
		await worker.start({
			onUnhandledRequest: 'bypass',
		})
	}
};

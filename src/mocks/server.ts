import { rest } from 'msw';
import { setupServer } from 'msw/node';
import handlers from './handlers';
import { afterEach } from 'node:test';

const server = setupServer(...handlers);

// beforeAll(() =>
// 	server.listen({
// 		onUnhandledRequest: 'warn',
// 	})
// );
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

export { server, rest };

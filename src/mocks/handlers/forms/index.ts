import { rest } from 'msw';
import { responseFormSuccess, responseForms } from '../../data/forms';
import { API_URL } from '../../../constants';

const SERVICE_BASE_URL = `${API_URL}/forms/:user`;

const formsHandlers = [
	rest.get(SERVICE_BASE_URL, async (req, res, ctx) => {
		return res(ctx.delay(1000), ctx.status(200), ctx.json(responseForms));
	}),
	// rest.get(`${SERVICE_BASE_URL}/:id`, async (req, res, ctx) => {
	// 	const { id } = req.params;

	// 	return res(ctx.delay(1000), ctx.status(200), ctx.json(responseFormSuccess));
	// }),
];

export default formsHandlers;

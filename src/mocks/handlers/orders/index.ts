import { rest } from 'msw';
import { responseOrderSuccess, responseOrders } from '../../data/orders';
import { API_URL } from '../../../constants';

const SERVICE_BASE_URL = `${API_URL}/orders/:user`;

const orderHandlers = [
	rest.get(SERVICE_BASE_URL, async (req, res, ctx) => {
		return res(ctx.delay(2000), ctx.status(200), ctx.json(responseOrders));
	}),
	rest.get(`${SERVICE_BASE_URL}/:id`, async (req, res, ctx) => {
		const { id } = req.params;

		return res(ctx.delay(2000), ctx.status(200), ctx.json({...responseOrderSuccess, id: id}));
	}),
];

export default orderHandlers;

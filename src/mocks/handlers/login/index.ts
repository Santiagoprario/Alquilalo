import { rest } from 'msw';
import { responseLoginSuccess } from '../../data/login';
import { API_URL } from '../../../constants';

const API_URL_LOGIN = `${API_URL}/login`;

const loginHandlers = [
	rest.post(API_URL_LOGIN, async (req, res, ctx) => {
		const { password } = await req.json();

		if (password === '1234')
			return res(ctx.delay(3000), ctx.status(200), ctx.json(responseLoginSuccess));

		return res(
			ctx.delay(3000),
			ctx.status(402),
			ctx.json('no se encuentra el usuario')
		);
	}),
];

export default loginHandlers;

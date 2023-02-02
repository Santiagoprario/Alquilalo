import { LoginResponse } from '../../../services/login/types';

export const responseLoginSuccess: LoginResponse = {
	accessToken: 'jkasdfasdngsdngksd',
	userProfile: {
		_id: '1234',
		name: 'Gonzalo',
		lastName: 'Persoft',
		email: 'gonzalo@persoft',
		role: 'admin',
		API_KEY: 'sadfasdfsadfasdfasdfasdf',
	},
};

import { LoginResponse } from '../../../services/Login/types';

export const responseLoginSuccess: LoginResponse = {
	status: 'success',
	accessToken: 'jkasdfasdngsdngksd',
	userProfile: {
		id: '1234',
		name: 'Gonzalo',
		lastName: 'Persoft',
		email: 'gonzalo@persoft',
		role: 'admin',
	},
};

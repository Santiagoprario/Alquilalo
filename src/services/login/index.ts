import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { LoginRequest, LoginResponse } from './types';

const SERVICE_BASE_URL = `${API_URL}/login`;

export const loginRequest = (
	req: LoginRequest
): FetchServiceEndpoint<{data: LoginResponse}> => {
	const url = `${SERVICE_BASE_URL}`;

	return {
		keys: ['login-request'],
		fetcher: options =>
			fetchJson<{data: LoginResponse}>({
				url,
				method: 'POST',
				data: req,
				...options,
			}).then(res => {
				return res;
			}),
	};
};

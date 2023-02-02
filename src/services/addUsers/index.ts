import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { AddUserRequest, AddUserResponse } from './types';

const SERVICE_BASE_URL = `${API_URL}/signup`;

export const addUserRequest = (req: AddUserRequest): FetchServiceEndpoint<AddUserResponse> => {
	const url = `${SERVICE_BASE_URL}`;

	return {
		keys: ['add-user'],
		fetcher: options =>
			fetchJson<AddUserResponse>({
				url,
				method: 'POST',
				data: req,
				...options,
			}).then(res => {
				return res;
			}),
	};
};

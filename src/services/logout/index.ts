import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';

const SERVICE_BASE_URL = `${API_URL}/logout`;

export const logOutRequest = (): FetchServiceEndpoint<string> => {
	const url = `${SERVICE_BASE_URL}`;

	return {
		keys: ['logout-request'],
		fetcher: options =>
			fetchJson<string>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

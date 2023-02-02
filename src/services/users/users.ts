import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';

const SERVICE_BASE_URL = `${API_URL}/clients/`;


export const getClients = ( userId?: string, limit?: string | number, offset?: string | number): FetchServiceEndpoint<{data:any, paging: any}> => {
	const url = `${SERVICE_BASE_URL}${userId}${`?limit=${limit}&offset=${offset}`}`;

	return {
		keys: ['clients-request'],
		fetcher: options =>
			fetchJson<{data:any[], paging: any}>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

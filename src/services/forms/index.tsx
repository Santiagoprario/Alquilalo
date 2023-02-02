import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { FormResponse, FormsResponse } from './types';

const SERVICE_BASE_URL = `${API_URL}/forms/`;


export const getForms = ( userId?: string, startDate?: string, endDate?: string, limit?: string | number, offset?: string| number ): FetchServiceEndpoint<{data:FormsResponse[], paging: any}> => {
	const url = `${SERVICE_BASE_URL}${userId}${startDate && endDate ? `?from=${startDate}&to=${endDate}&limit=${limit}&offset=${offset}`: '/'}`;

	return {
		keys: ['forms-request'],
		fetcher: options =>
			fetchJson<{data:FormsResponse[], paging: any}>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

export const getFormWithId = (userId?: string,formId?: string): FetchServiceEndpoint<FormResponse> => {
	
	const url = `${SERVICE_BASE_URL}${userId}/${formId}/`;

	return {
		keys: ['form-request'],
		fetcher: options =>
			fetchJson<FormResponse>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

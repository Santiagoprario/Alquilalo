import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { FormResponse } from './types'

const SERVICE_BASE_URL = `${API_URL}/forms/`;


export const getForms = ( userId: string ): FetchServiceEndpoint<string[]> => {
	const url = `${SERVICE_BASE_URL}${userId}/`;

	return {
		keys: ['forms-request'],
		fetcher: options =>
			fetchJson<string[]>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

export const getFormWithId = (userId: string,formId: string): FetchServiceEndpoint<FormResponse> => {
	
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

import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { OrderResponse, OrdersResponse } from './types'

const SERVICE_BASE_URL = `${API_URL}/orders/`;


export const getOrders = ( userId?: string, startDate?: string, endDate?: string ): FetchServiceEndpoint<OrdersResponse[]> => {
	const url = `${SERVICE_BASE_URL}${userId}${startDate && endDate ? `?from=${startDate}&to=${endDate}`: '/'}`;

	return {
		keys: ['orders-request'],
		fetcher: options =>
			fetchJson<OrdersResponse[]>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

export const getOrderWithId = (userId?: string,orderId?: string): FetchServiceEndpoint<OrderResponse> => {
	
	const url = `${SERVICE_BASE_URL}${userId}/${orderId}/`;

	return {
		keys: ['order-request'],
		fetcher: options =>
			fetchJson<OrderResponse>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

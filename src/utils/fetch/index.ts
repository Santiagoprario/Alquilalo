export interface FetchServiceParams {
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	url: string;
	accessToken: string;
	withCredentials?: boolean;
	headers?: {
		[x: string]: string | boolean;
	};
	params?: {
		[x: string]: Array<number | string | boolean> | number | string | boolean;
	};
	data?: unknown | FormData;
}

async function fetchCore({
	url,
	method = 'GET',
	withCredentials = true,
	headers,
	params,
	data,
	accessToken,
}: FetchServiceParams): Promise<Response> {
	const fetchConfig: RequestInit = {
		method,
		credentials: withCredentials ? 'include' : 'same-origin', // withCredentials
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json, text/plain, */*',
			Authorization: `Bearer ${accessToken}`,
			...headers,
		},
	};

	// if (data) {
	//   const isFormData = data instanceof FormData;
	//   if (isFormData) {
	//     fetchConfig.body = <FormData>data;
	//     // It needs to delete content type so the browser automatically can set it and its boundary
	//     Object.keys(fetchConfig.headers).forEach((key) => {
	//       if (String(key).toLowerCase() === 'content-type') {
	//         delete fetchConfig.headers[key];
	//       }
	//     });
	//   } else {
	//     fetchConfig.body = JSON.stringify(data);
	//   }
	// }

	fetchConfig.body = JSON.stringify(data);

	let urlWithParams = url;
	if (params && Object.keys(params).length > 0) {
		const urlParams = Object.entries(params)
			.map(([key, value]) => {
				const generatePropertyQueryString = (
					key: string | number | boolean,
					value: string | number | boolean
				) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

				if (Array.isArray(value)) {
					return value
						.map(valueOfArray => generatePropertyQueryString(key, valueOfArray))
						.join('&');
				}
				return generatePropertyQueryString(key, value);
			})
			.join('&');
		urlWithParams = `${url}?${urlParams}`;
	}

	return fetch(urlWithParams, fetchConfig);
}

function buildPromiseRejection(response: Response, responseData: unknown) {
	const promiseRejection = {
		data: responseData,
		url: response.url,
		status: response.status,
		statusText: response.statusText,
		redirected: response.redirected,
	};

	return Promise.reject(promiseRejection);
}

export async function fetchJson<T>(params: FetchServiceParams): Promise<T> {
	return fetchCore(params).then((response: Response) => {
		if (response.ok) {
			return response.json();
		}

		return response
			.json()
			.then(responseJson => buildPromiseRejection(response, responseJson));
	});
}

export async function fetchBlob(params: FetchServiceParams): Promise<Blob> {
	return fetchCore(params).then(response => {
		if (response.ok) {
			return response.blob();
		}

		return response
			.json()
			.then(responseJson => buildPromiseRejection(response, responseJson));
	});
}

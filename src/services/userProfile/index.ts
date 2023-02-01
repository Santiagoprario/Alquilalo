// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getUserProfile() {
	return null;
}

// export function getUserProfile(): FetchServiceEndpoint<UserProfile> {
//   const url = `${SERVICE_BASE_URL}`;

//   return {
//     keys: ['userProfile'],
//     fetcher: (options) =>
//       fetchJson<UserProfileServiceResponse>({ url, method: 'GET', ...options }).then(mapFetchResponse),
//   };
// }

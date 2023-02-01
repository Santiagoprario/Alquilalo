import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 0,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			retry: false,
		},
	},
});
interface ReactQueryCacheProviderProps {
	children: React.ReactNode;
}

function ReactQueryCacheProvider({
	children,
}: ReactQueryCacheProviderProps): JSX.Element {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ReactQueryCacheProvider;

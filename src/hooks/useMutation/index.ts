import { useContext, useEffect, useMemo } from 'react';
import {
	useMutation as useMutationReactQuery,
	UseMutationOptions as UseMutationOptionsProps,
	UseMutationResult,
	useQueryClient,
} from 'react-query';

import { FetchServiceEndpoint, FetchError } from '@/types/service';
import { AppContext, AuthContext } from '@/context';

interface UseMutationOptions<T, P>
	extends Omit<UseMutationOptionsProps<T, FetchError<T>, P>, 'onSettled'> {
	showLoadingBackdrop?: boolean;
	handleErrors?: boolean;
}

function useMutation<P, T>(
	fetchService: (mutationBody: P) => FetchServiceEndpoint<T>,
	config?: UseMutationOptions<T, P>
): UseMutationResult<T, FetchError<T>, P, unknown> {
  const { accessToken } = useContext(AuthContext);
  const { setLoading, setError } = useContext(AppContext);

	const queryClient = useQueryClient();

	const {
		showLoadingBackdrop,
		handleErrors,
		...useMutationConfig
	}: UseMutationOptions<T, P> = useMemo(
		() => ({
			showLoadingBackdrop: false,
			handleErrors: true,
			onSettled: (mutationBody: P) => {
				if (showLoadingBackdrop) {
					setLoading(false);
				}
				queryClient.invalidateQueries(fetchService(mutationBody).keys);
			},
			...config,
		}),
		[config, fetchService, queryClient, setLoading]
	);

	const useMutationResult = useMutationReactQuery((mutationBody: P) => {
		if (showLoadingBackdrop && useMutationResult.failureCount === 0) {
			setLoading(true);
		}

		return fetchService(mutationBody).fetcher({ accessToken });
	}, useMutationConfig);

	useEffect(() => {
		if (handleErrors) {
			if (useMutationResult.error) {
				setError({ title: 'Error en el servidor' });
			} else {
				// setError({});
			}
		}
	}, [
		useMutationResult.error,
		useMutationResult.mutateAsync,
		handleErrors,
		setError,
	]);

	return useMutationResult;
}

export default useMutation;

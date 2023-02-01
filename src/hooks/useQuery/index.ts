import { useContext, useEffect, useMemo } from 'react';
import {
	useQuery as useQueryTanStack,
	UseQueryOptions as UseQueryOptionsTanStack,
	UseQueryResult,
} from 'react-query';

import { FetchServiceEndpoint, FetchError } from '../../types/service';
import { AppContext, AuthContext } from '../../context';


interface UseQueryOptionsProps<T> extends Omit<UseQueryOptionsTanStack<T, FetchError<T>>, 'onSettled'> {
  showLoadingBackdrop?: boolean;
  handleErrors?: boolean;
}

function useQuery<T, P>(
  fetch: (params?: P) => FetchServiceEndpoint<T>,
  config?: UseQueryOptionsProps<T>,
): UseQueryResult<T, FetchError<T>> {
  const { accessToken } = useContext(AuthContext);
  const { setLoading, setError } = useContext(AppContext);
  const { keys, fetcher } = useMemo(() => {
    return fetch();
  }, [fetch]);

  const { showLoadingBackdrop, handleErrors, ...useQueryConfig } = useMemo(
    () => ({
      showLoadingBackdrop: false,
      handleErrors: true,
      onSettled: () => {
        if (showLoadingBackdrop) {
          setLoading(false);
        }
      },
      ...config,
    }),
    [config, setLoading]
  );

  const useQueryResult = useQueryTanStack(
    keys,
    () => {
      if(showLoadingBackdrop && useQueryResult.failureCount === 0) {
        setLoading(true);
      }
      return fetcher({ accessToken });
    },
    useQueryConfig,
  );

  useEffect(() => {
    if (handleErrors && useQueryResult.errorUpdatedAt) {
      if (useQueryResult.error) {
        setError({ retryOnError: useQueryResult.refetch, fetchError: useQueryResult.error });
      } else {
        setError({});
      }
    }
  }, [useQueryResult.error, useQueryResult.errorUpdatedAt, useQueryResult.refetch, handleErrors, setError]);

  return useQueryResult;
};

export type { UseQueryOptionsProps };
export default useQuery;

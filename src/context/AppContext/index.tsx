import React, { createContext, useState } from 'react';
import Spinner from '../../components/Layout/Spinner';
import Hidden from '../../components/Layout/Hidden';
import AppErrorContainer from '../../containers/core/AppErrorContainer';
import { AppErrorContainerProps } from '@/containers/core/AppErrorContainer/interfaces';

interface AppContextProps {
	error: AppErrorContainerProps;
	loading: boolean;
	setError(error: AppErrorContainerProps): void;
	setLoading(loading: boolean): void;
}

interface AppProviderProps {
	children: React.ReactNode;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

function AppProvider({ children }: AppProviderProps): JSX.Element {
  
  const [error, setError] = useState<AppErrorContainerProps>('' as AppErrorContainerProps);
  const [loading, setLoading] = useState(false);

	return (
		<AppContext.Provider
			value={{
				error,
				setError,
				loading,
				setLoading,
			}}
		>
			<Hidden hidden={!!error}>{children}</Hidden>

			{error && <AppErrorContainer />}
			{loading && <Spinner loading={true} />}
		</AppContext.Provider>
	);
}

export { AppContext };
export default AppProvider;

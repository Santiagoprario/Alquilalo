import React, { createContext, useState } from 'react';
import Spinner from '../../components/Spinner';
import Hidden from '../../components/Hidden';
import AppErrorContainer from '../../containers/core/AppErrorContainer';
import { AppError } from '../../types/core';

interface AppContextProps {
	error: AppError;
	loading: boolean;
	setError(error: AppError): void;
	setLoading(loading: boolean): void;
}

interface AppProviderProps {
	children: React.ReactNode;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

function AppProvider({ children }: AppProviderProps): JSX.Element {
  
  const [error, setError] = useState<AppError>('' as AppError);
  const [loading, setLoading] = useState(true);

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

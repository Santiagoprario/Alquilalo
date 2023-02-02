import React, { createContext, useEffect, useMemo, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

interface AuthProviderProps {
	children: React.ReactNode;
}

interface AuthContextProps {
	accessToken: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
	const [ authToken ] = useMemo<string>(() => {
    const item = localStorage.getItem('accessToken');
    return item ? item : '';
  }, [localStorage]);

	const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

	return (
		<AuthContext.Provider
			value={{
				accessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContext };
export default AuthProvider;

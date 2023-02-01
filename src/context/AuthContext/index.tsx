import React, { createContext } from 'react';

interface AuthProviderProps {
	children: React.ReactNode;
}

interface AuthContextProps {
	accessToken: string;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps): JSX.Element {
	const accessToken = localStorage.getItem('accessToken') || 'srgsrgasd';

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

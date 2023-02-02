import React, { createContext, useEffect, useMemo } from 'react';
import { UserProfile } from '../../types/domain/userProfile';

interface UserProviderProps {
	children: React.ReactNode;
}

interface UserContextProps {
	userProfile?: UserProfile;
	setUserProfile(userProfile: UserProfile): void;
}

const UserContext = createContext<UserContextProps>({
	userProfile: {} as UserProfile,
	setUserProfile: () => null,
});

function UserProvider({ children }: UserProviderProps): JSX.Element {
	const [userProfile, setUserProfile] = React.useState<UserProfile | undefined>();

	useEffect(() => {
    const storedUserProfile = localStorage.getItem('userProfile');
    if (storedUserProfile) {
      setUserProfile(JSON.parse(storedUserProfile));
    }
  }, []);

	return (
		<UserContext.Provider
			value={{
				userProfile,
				setUserProfile,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export { UserContext };
export default UserProvider;

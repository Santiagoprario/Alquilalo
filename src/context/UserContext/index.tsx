import React, { createContext } from 'react';
import { UserProfile } from '../../types/domain/userProfile';
import { responseLoginSuccess } from '../../mocks/data/login';

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
	const [userProfile, setUserProfile] = React.useState<UserProfile>(
		responseLoginSuccess.userProfile
	);

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

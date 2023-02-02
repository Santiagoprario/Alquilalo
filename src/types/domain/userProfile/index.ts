export interface UserProfile {
	_id: string;
	name: string;
	lastName: string;
	email: string;
	role: UserProfileNavigationGroup;
	API_KEY?: string;
	uid_client?: string;
	permisions?: string[];
}

export interface UserProfileNavigationOption {
	id: UserProfileNavigationOptionId;
	group: UserProfileNavigationGroup;
	title: string;
	subtitle: string;
	redirectLegacy: boolean;
	allowed: boolean;
	visible: boolean;
}

export type UserProfileNavigationGroup = 'user' | 'client' | 'admin';
export type UserProfileNavigationOptionId =
	| 'home'
	| 'forms'
	| 'orders'
	| 'client'
	| 'back';

export interface UserProfile {
	id: string;
	name: string;
	lastName: string;
	email: string;
	role: UserProfileNavigationGroup;
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

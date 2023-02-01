import React, { FunctionComponent } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
	const user = localStorage.getItem('accessToken');
	if (user) {
		return true;
	}
	return false;
};

const PublicRoutes: FunctionComponent = () => {
	const auth = useAuth();

	return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;

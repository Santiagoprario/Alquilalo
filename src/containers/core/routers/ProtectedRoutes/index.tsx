import React, { FunctionComponent } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
	const user = localStorage.getItem('accessToken');
	if (user) {
		return true;
	}
	return false;
};

const ProtectedRoutes: FunctionComponent = () => {
	const auth = useAuth();

	return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login, Profile } from '@/pages';
import InnerContent from './InnerContent';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import {  Home } from '@/pages';
import AddUser from '@/pages/AddUser';
import Users from '@/pages/Users';

const MainRoutes: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<ProtectedRoutes />}>
			<Route path="/" element={<InnerContent />}>
				<Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="" element={<Home />} />

					<Route path="adduser" element={<AddUser />} />
					
					<Route path="users" element={<Users />} >
						<Route path="adduser" element={<AddUser />} />
					</Route>
					
					<Route path="profile" element={<Profile />} />
				</Route>
			</Route>
		</Route>

		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>
	</Routes>
);

export default MainRoutes;

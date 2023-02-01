import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login } from '../../../pages';
import InnerContent from './InnerContent';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import { Forms, Home, Operations } from '../../../pages/Dashboard/pages';
import Form from '../../../pages/Dashboard/pages/Forms/components/FormContainer';

const MainRoutes: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<ProtectedRoutes />}>
			<Route path="/" element={<InnerContent />}>
				<Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="forms" element={<Forms />}>
						<Route path=":id" element={<Form />} />
					</Route>
					<Route path="home" element={<Home />} />
					<Route path="operations" element={<Operations />} />
				</Route>
			</Route>
		</Route>

		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>
	</Routes>
);

export default MainRoutes;

import React, { FunctionComponent } from 'react';
import { AppProvider, AuthProvider, UserProvider } from '../../../context';
import ReactQueryCacheProvider from '../ReactQuery';
import MainRouter from '../routers';

const AppContainer: FunctionComponent = () => (
	<ReactQueryCacheProvider>
		<AppProvider>
			<AuthProvider>
				<UserProvider>
					<MainRouter />
				</UserProvider>
			</AuthProvider>
		</AppProvider>
	</ReactQueryCacheProvider>
);

export default AppContainer;

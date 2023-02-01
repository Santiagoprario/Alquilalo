import React, { FunctionComponent } from 'react';
import AppContainer from './containers/core/AppContainer';
import { initMSW } from './mocks/browser';

import './styles/tailwind.css';

initMSW();

const App: FunctionComponent = () => {
	return <AppContainer />;
};

export default App;

import { FunctionComponent } from 'react';
import AppContainer from './containers/core/AppContainer';
import { initMSW } from './mocks/browser';

import './styles.css';

initMSW();

const App: FunctionComponent = () => {
	return <AppContainer />;
};

export default App;

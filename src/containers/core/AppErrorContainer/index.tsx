import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppErrorContainerProps } from './interfaces';

function AppErrorContainer({
	title = 'Ups...algo salió mal',
	subtitle = 'Ha ocurrido un error. Por favor, volvé a intentarlo en unos minutos.',
	retryOnError,
}: AppErrorContainerProps): JSX.Element {
	const navigate = useNavigate();

	const reloadPage = useCallback(() => {
		navigate(0);
	}, [navigate]);

	return (
		<div>
			<h1 className="">{title}</h1>
			<h3 className="">{subtitle}</h3>
			<button onClick={retryOnError || reloadPage}>Regresar al inicio</button>
		</div>
	);
}

export default AppErrorContainer;

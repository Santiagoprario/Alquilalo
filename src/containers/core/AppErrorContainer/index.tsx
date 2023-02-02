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
		navigate('/dashboard');
		
	}, [navigate]);

	return (

		<div className='flex flex-col'>
			<h1 className="flex ">{title}</h1>
			<h3 className="">{subtitle}</h3>
			<button
      className="bg-pink-500 max-w-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
      type="submit"
      onClick={reloadPage}
      >
        Volver al inicio
      </button>
		</div>
	);
}

export default AppErrorContainer;

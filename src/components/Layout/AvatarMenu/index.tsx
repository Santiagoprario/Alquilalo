import React, { FunctionComponent, useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context';




const AvatarMenu: FunctionComponent = () => {
		const { userProfile } = useContext(UserContext);
		const [ isVisible, setIsVisible ] = useState(true);

		const getInitialsName = useMemo(() => 
			userProfile ? userProfile?.name[0].toUpperCase() + userProfile?.lastName[0].toUpperCase() : 'UP'
		, [userProfile]);

		const handleChangeMenu = () => setIsVisible(!isVisible)

		const closeSession = () => {
			localStorage.setItem('accessToken', '');
		};
	

    return (
        <div>
          <ul
            className="flex-col md:flex-row list-none items-center hidden md:flex"
          >
            <a
              className="text-blueGray-500 block"
							onClick={handleChangeMenu}
            >
            	<div className="items-center flex">
                <span
                  className={`${isVisible ? '' : 'hidden'} w-12 h-12 text-white bg-blueGray-700 inline-flex items-center justify-center rounded-full`}
                >
									<div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
   									 <span className="font-large text-gray-600 dark:text-gray-300">{getInitialsName}</span>
									</div>
								</span>
            	</div>
            </a>
            <div
              className={`${isVisible ? 'hidden' : ''} bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`}
              id="user-dropdown"
            >
              <a
                onClick={handleChangeMenu}
                className="text-right text-sm px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >x</a>
							<Link
                to="/profile"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >Ver Perfil</Link>
              <div
                className="h-0 my-2 border border-solid border-blueGray-100">
							</div>
              <a
                onClick={closeSession}
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                >Cerrar Sesión</a>
            </div>
          </ul>
        </div>
    );
};

export default AvatarMenu;

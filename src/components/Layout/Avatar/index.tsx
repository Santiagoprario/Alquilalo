import React, { FunctionComponent, useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context';
import imageUser from '../../../assets/img/profile-pic-l-2.jpg';
// import useQuery from '@/hooks/useQuery';
// import { logOutRequest } from '@/services/logout';

// TODO: Mover al dashboard el método de cerrar sesion
const AvatarMenu: FunctionComponent = () => {
		const { userProfile } = useContext(UserContext);
		const [ isVisible, setIsVisible ] = useState(true);
    const navigate = useNavigate();

		const getInitialsName = useMemo(() => 
			userProfile?.lastName ? userProfile?.name[0].toUpperCase() + userProfile?.lastName[0].toUpperCase() : 'UP'
		, [userProfile]);

    // const logOutQuery = useQuery(() => logOutRequest(), { enabled: false});

		const handleChangeMenu = () => setIsVisible(!isVisible)

		const closeSession = () => {
      // logOutQuery.refetch()
			localStorage.clear();
      navigate(0);
		};
	

    return (
      <>
        <div
          className="text-blue-500 block"
          onClick={handleChangeMenu}
        >
          <div className="items-center flex">
            <span
              className={`${isVisible ? '' : 'hidden'} w-12 h-12 text-white bg-[#3373B5] inline-flex items-center justify-center rounded-full`}
            >
              <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-[#3373B5] rounded-full">
                  <img src={imageUser} alt='userImage'/>
              </div>
            </span>
          </div>
        </div>
        <div
          className={`${isVisible ? 'hidden' : ''} bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg min-w-48`}
          id="user-dropdown"
        >
          <a
            onClick={handleChangeMenu}
            className="text-right text-sm px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >x</a>
          <Link
            to="profile"
            onClick={handleChangeMenu}
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            Ver Perfil
          </Link>
          <div
            className="h-0 my-2 border border-solid border-blueGray-100">
          </div>
          <a
            onClick={closeSession}
            className="text-sm cursor-pointer py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            >Cerrar Sesión</a>
        </div>
      </>
    );
};

export default AvatarMenu;

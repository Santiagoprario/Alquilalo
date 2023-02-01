import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarMenu from '../AvatarMenu';


const Header: FunctionComponent = () => {
    const [ isHidden, setIsHidden ] = useState<string>('hidden')
    // function openDropdown(event, dropdownID) {
    //     let element = event.target;

    //   }



    return (
      <nav
        className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
    	>
        <div
          className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
        >
          <Link
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            to="/"
            >Persoft Integraciones
          </Link>
          <AvatarMenu />
        </div>
      </nav>
    );
};

export default Header;

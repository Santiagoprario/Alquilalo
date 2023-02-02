import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import Input from '../Input';


const Header: FunctionComponent = () => {
    const [ isHidden, setIsHidden ] = useState<string>('hidden')
    // function openDropdown(event, dropdownID) {
    //     let element = event.target;

    //   }

    return (
      <div>
       ESTE ES EL HEADER OFICIAL DE  ALQUILALO.COM O RENTIT.COM
      </div>
    );
};

export default Header;

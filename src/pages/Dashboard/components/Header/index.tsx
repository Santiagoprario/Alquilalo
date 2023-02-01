import React, { FunctionComponent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import persoft from '../../../../assets/persoft.jpg';
import { Button } from '../../../../components';
import { UserContext } from '../../../../context';

const Header: FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);

	const name = userProfile ? userProfile.name : 'Usuario';
	const navigate = useNavigate();

	const onClick = () => {
		localStorage.setItem('accessToken', '');
		navigate('/login');
	};

	return (
		<div className="tw-w-full tw-mx-auto tw-shadow-lg tw-border-b tw-border-gray-300 tw-px-8">
			<div className="tw-relative tw--mx-4 tw-flex tw-items-center tw-justify-between bg">
				<div className="tw-w-60 tw-max-w-xs tw-max-h-xs tw-px-4">
					<Link to="/" className="tw-block tw-py-5">
						<img src={persoft} alt="logo" className="" />
					</Link>
				</div>
				<div className="tw-flex tw-w-full tw-items-center tw-justify-betweentw- px-4 sm:tw-hidden">
					<div>
						{/* <nav
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
              >
                <ul className="blcok lg:flex">
                  <li>
                    <Link
                      to='/dashboard/home'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/dashboard/forms'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Formularios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/dashboard/operations'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Operaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/clients'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Clientes
                    </Link>
                  </li>

                </ul>
              </nav> */}
					</div>
					<div className="tw-hidden tw-justify-end tw-pr-16 sm:tw-flex lg:tw-pr-0">
						<p className="tw-text-dark hover:tw-text-primary tw-flex tw-py-2 tw-px-10 tw-text-base tw-font-medium lg:tw-ml-12 lg:tw-inline-flex">
							Bienvenido {name}
						</p>
						<Button size="medium" onClick={onClick}>
							Cerrar Sesión
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

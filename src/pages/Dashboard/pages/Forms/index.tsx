import React, { useContext } from 'react';
import { Outlet, useSearchParams, Link, useParams } from 'react-router-dom';
import { UserContext } from 'src/context';
import useQuery from '../../../../hooks/useQuery';
import { getForms } from '../../../../services/forms';

/**
   * useLocation returns something like:
   * {
        pathame: "/invoices",
        search: "?filter=sa",
        hash: "",
        state: null,
        key: "ae4cz2j"
      }
   */
//   function QueryNavLink({ to, ...props}) {
//     let location = useLocation();
//     return <NavLink to={to + location.search} {...props} />;
//   }

const Forms: React.FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getForms(userProfile.id), { staleTime: 60000, cacheTime: 60000 });


	return (
		<div className="flex h-auto">
			<div className='w-300'>
				<nav className="bg-silver-400 h-800 w-500">
					<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline">
						Formularios
					</h6>
					<hr className="my-4 md:min-w-full" />
					<ul className="md:flex-col md:min-w-full flex flex-col list-none">
						{formQuery.data && formQuery.data.map(formId => (
							<div key={formId} className="text-sm uppercase py-1 font-bold block text-blueGray-700 hover:text-blueGray-500">
								<Link to={`${formId}`}>{formId}</Link>
							</div>
						))}
					</ul>
				</nav>
			</div>
			<div className="px-5 py-4">
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Forms;

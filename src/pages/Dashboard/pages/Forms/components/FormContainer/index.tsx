import React, { FunctionComponent, useContext } from 'react';
import useQuery from '../../../../../../hooks/useQuery';
import { useParams } from 'react-router-dom';
import { UserContext } from 'src/context';
import { getFormWithId } from 'src/services/forms';

const FormContainer: FunctionComponent =  () => {
	const { id } = useParams();
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getFormWithId(userProfile.id, id), { staleTime: 60000, cacheTime: 60000 });

	const { data } = formQuery;


	return (
		<div className='flex-col border-l-stone-800' >
			<div>
			  <h2 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline'>
					{data ? data.name : ''}
				</h2>
			  <h4>ID : {id}</h4>
			</div>
			{data &&
				data.fields.map(field => (
					<div
						key={field.label}
						className="w-full shadow rounded-lg border-zinc-500 wd-64 my-10 mx-20 px-20"
					>
						<p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline'>{field.label}</p>
						<p className='text-sm px-5'>{field.value}</p>
					</div>
				))}
		</div>
	);
};

export default FormContainer;

import React, { FunctionComponent, useContext, useEffect } from 'react';
import { PanelFit, Table } from '@/components/Layout';
import { getForms } from '@/services/forms';
import { UserContext } from '@/context';
import useQuery from '@/hooks/useQuery';
import Spinner from '@/components/Layout/Spinner';
import { getOrders } from '@/services/orders';
import { formatLongDateHour } from '@/utils/formatters/date';
import { Link } from 'react-router-dom';

const Home: FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);


	return (
		<div className='flex flex-row w-full'>

		</div>
	);
};

export default Home;

import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const InnerContent: FunctionComponent = () => {
	return (
		<div className="inner-content">
			<Outlet />
		</div>
	);
};

export default InnerContent;

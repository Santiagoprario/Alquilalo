import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Panel, SideBar } from '@/components/Layout';
import { routes as RoutesSideBar } from '@/constants/routes';
import { UserContext } from '@/context/UserContext';

const Dashboard: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);

  useEffect(() => {
    if (userProfile) {
      // hacer algo con el userProfile
    }
  }, [userProfile]);

  return (
    <div className="text-blueGray-700 antialiased h-full">
      <div id="root">
        <Header />      
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

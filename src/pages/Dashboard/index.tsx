import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Panel, PanelFit } from '../../components/Layout';
// import { Card } from '../../components';

// TODO: Hacer un componente llamado Panel que englobe a Oulet
// TODO: Hacer componente de Breadcrumbs
// TODO: Hacer componente de Footer
// TODO: Tiene una ruta por defecto
const Dashboard: FunctionComponent = () => {
  return (
    <div className="text-blueGray-700 antialiased">
      <div id="root">
        <nav
         className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
        >
        </nav>
        <div className="relative md:ml-64  bg-blueGray-50">       
          <div className="relative bg-pink-500 md:pt-32 pb-32 pt-12">
            <Header />
          </div>
          <div className="px-4  border-black md:px-10 min-h-800 min-h-full mx-auto w-full -m-24">
            <Panel > 
              <Outlet />
            </Panel>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

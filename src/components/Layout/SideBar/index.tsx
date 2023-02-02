import { FunctionComponent, useState } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import Avatar  from '../Avatar';
import persoft  from '@/assets/persoft.jpg';
import persoftLogo from '@/assets/persoft-logo.png';
import { builtinModules } from 'module';

export interface RoutesProps {
  routes : {
    groups?: {
      title?: string;
      path: string;
      icon?: string;
    }
  }[];
};


const SideBar: FunctionComponent<RoutesProps> = ({ routes }) => {
  const [page, setPage] = useState<string>('home');
  const toggleNavbar = (collapseID: string): void => {
    document?.getElementById(collapseID)?.classList?.toggle("hidden");
    document?.getElementById(collapseID)?.classList?.toggle("bg-white");
    document?.getElementById(collapseID)?.classList?.toggle("m-2");
    document?.getElementById(collapseID)?.classList?.toggle("py-3");
    document?.getElementById(collapseID)?.classList?.toggle("px-6");
  };
  
  const handleClickSideBar = (page: string) => {
    setPage(page);
  };

  const compsRender = (item: any) => {
    const comp = {
      h6: (
        <h6
          className="md:min-w-full px-0 text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
        >
          {item.text}
        </h6>
      ),
      separator: <hr className="my-4 md:min-w-full" />,
      link: (
            <NavLink
              to={`${item.path}`}
              className={`text-xs uppercase py-3 font-bold block ${page === item.id ? 'text-[#3373B5] hover:text-[#3373B7]' : 'text-blueGray-700 hover:text-blueGray-500'} `}
              onClick={() => handleClickSideBar(item.id)}
            >
              <i
                className={`${item.icon} text-blueGray-300 mr-2 text-sm`}
              ></i>
              {item.label}
            </NavLink>
      ),
    }

    return comp[item.component];
  }
  
  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto "
        >
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => toggleNavbar('collapse-sidebar')}
          >
            <i className="fa fa-bars"></i>
          </button>
          {/* <div
            className="md:block text-left md:pb-2 w-10  text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            <Link to='/'>
              <img src={persoftLogo} alt='persoft integraciones'/>
            </Link>
          </div> */}

          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <div className="items-center flex">
                <Avatar />
              </div>
            </li>
          </ul>
          <div
            className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
            id="collapse-sidebar"
          >
            <div
              className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
            >
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <div
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    Persoft
                  </div>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => toggleNavbar('collapse-sidebar')}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <img src={persoft} alt='persoft integraciones'/>
            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col px-5 md:min-w-full flex flex-col list-none">
              {Object.entries(routes).map(([, val]) => {
                return Object.keys(val).map((i, ) => {
                  return (
                    <li className="items-center" key={i}>{compsRender(val[i])}</li>
                  );
                })
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
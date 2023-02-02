import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="py-10 flex items-end">
      <div className="container mx-auto px-4">
        <hr className="mb-4 border-b-1 border-blueGray-200" />
        <div
          className="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div className="w-full px-4">
            <div
              className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
            >
              Copyright © <span id="get-current-year">{new Date().getFullYear()} Persoft Integraciones</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

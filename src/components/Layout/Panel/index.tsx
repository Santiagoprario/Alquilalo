import React, { FunctionComponent } from 'react';

interface PanelProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Panel: FunctionComponent = ({ title, subtitle, children }: PanelProps ) => {

  return (
    <div className="w-full px-5 ">
      <div
        className="relative flex flex-col break-words w-full shadow-lg rounded bg-white"
      >
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center w-full px-4">
            {children}
          </div>
        </div>    
      </div>
  </div>
  );
};

export default Panel;

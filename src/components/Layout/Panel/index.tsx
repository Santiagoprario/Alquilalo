import React, { FunctionComponent } from 'react';

type PanelProps = {
  children: React.ReactNode;
  className?: string;
}

const Panel: FunctionComponent<PanelProps> = ({ children, className }: PanelProps ) => {

  return (
    <div className={`w-full px-5 ${className}`}>
      <div
        className="relative flex flex-col break-words w-full h-full shadow-lg rounded bg-white"
      >
        <div className="rounded-t mb-0 px-4 py-3 h-full bg-transparent">
          <div className="flex flex-wrap items-center h-full w-full px-4">
            {children}
          </div>
        </div>    
      </div>
  </div>
  );
};

export type { PanelProps };
export default Panel;

import React, { FunctionComponent } from 'react';

interface PanelFitProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const PanelFit: FunctionComponent = ({ title, subtitle, children }: PanelFitProps ) => {

  return (
    <div>
      <div className="w-full xl:w-4/12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6
                  className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"
                >
                  {subtitle}
                </h6>
                <h2 className="text-blueGray-700 text-xl font-semibold">
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            
            <div className="relative h-350-px">
              <canvas id="bar-chart">
                {children}
              </canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelFit;

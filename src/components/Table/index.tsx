import React, { FunctionComponent } from 'react';

interface ColumnsTable {
  id?: string;
  label:  string | (() => React.ReactElement);
}

interface TableProps {
  columns: ColumnsTable[];
  title?: string;
}

function Table ({ columns, title }: TableProps) {

  return (
  <div className="block w-full overflow-x-auto">
    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
      <h3 className="font-semibold text-base text-blueGray-700">
        {title}
      </h3>
    </div>              
    <table
      className="items-center w-full bg-transparent border-collapse"
    >
      <thead>
        <tr>
       {columns.map((col) => {
          <th
          className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
          {col.label}
        </th>
       })}
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <th
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
          >
            /argon/index.html
          </th>
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            3,985
          </td>
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            319
          </td>
          <td
            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
          >
            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
            46,53%
          </td>
        </tr>
     
        
       
      </tbody>
    </table>
  </div>
  );
};

export default Table;

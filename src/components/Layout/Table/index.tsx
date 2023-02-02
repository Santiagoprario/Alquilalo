import React from 'react';

interface Column {
  title: string;
  key: string;
}

interface Props {
  data: { [key: string]: any }[];
  columns: Column[];
  title?: string;
}

const Table: React.FC<Props> = ({title, data, columns }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 className="font-semibold text-lg text-blueGray-500">
          {title}
        </h3>
      </div>   
      <table className="items-center w-full bg-transparent border">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
              key={column.title}
              className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-200 text-blueGray-500 border-blueGray-100"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx + Math.random()} className={`${idx%2 === 1 ? 'bg-blueGray-50': 'bg-white'}`}>
              {columns.map((column, idx) => (
                <td 
                key={column.key + String(Math.random())}
                className={`border-t-0 min-w-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4`}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div> 
  );
};

export default Table;

import React, { useState } from 'react';
import { FunctionComponent } from 'react';

interface IPaginationProps {
  totalPages: number,
  currentPage: number,
  onChangePage: (page: number) => void,
}

const Pagination: FunctionComponent<IPaginationProps> = ({ totalPages, currentPage, onChangePage }) => {
  return (
    <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
      
      <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
        <div 
          className={`flex items-center pt-3 text-gray-600 hover:text-indigo-700 ${currentPage <= 1 ? '' : 'cursor-pointer'} `}
          onClick={currentPage <= 1 ? () => true : () => onChangePage(currentPage - 1)}
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-sm px-3 ml-3 font-medium leading-none">Anterior</p>
        </div>
        <div className="sm:flex">
          
            <p
              key={currentPage}
              className={`text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t hover:border-indigo-400 pt-3 mr-4 px-2`}
            >
             Pagina {currentPage} de {totalPages}
            </p>

        </div>
        <div className={`flex items-center pt-3 text-gray-600 hover:text-indigo-700 ${currentPage >= totalPages ? '' : 'cursor-pointer' } `}
             onClick={currentPage >= totalPages ? () => true : () => onChangePage(currentPage + 1)}
        >
          <p className="text-sm font-medium leading-none mr-3">Siguiente</p>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 7.33333L12.8332 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 0.666687L12.8332 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

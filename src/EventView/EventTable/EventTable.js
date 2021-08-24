import React,{ useMemo } from 'react';

import {useTable, useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table';
import { GlobalFilter } from './GlobalFilter';
import {COLUMNS,DATA} from './columns';
import { ColumnFilter } from './ColumnFilter';

import styled from 'styled-components';

const Styles = styled.div`
padding:10px;
border-radius:8px;
background: #242526;


table {
  color:#fff;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border-radius:8px;
}

table td, table th {
  border: 1px solid #484a4d;
  padding: 10px;
}

table tr:nth-child(odd){
  background-color: #151616;
}

table tr:hover {
  filter:brightness(1.2);
  background: #686868;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #242526;
  color: white;
}

input{
  margin:5px;
  padding:5px;
  background-color:#484a4d;
  border-radius:8px;
}

button{
  margin:5px;
  padding:5px;
  background-color:#484a4d;
}

select{
  margin:5px;
  padding:5px;
  background-color:#484a4d;
  border-radius:8px;
}
`



export default function EventTable() {

    const data = React.useMemo(
        () => [
            {
                title:'Event1',
                created_by:'User1',
                start_date:'date 1',
                end_date:'date2',
                quota:25,
                occupation:20
            },
            {
                title:'Event2',
                created_by:'User1',
                start_date:'date 1',
                end_date:'date2',
                quota:25,
                occupation:20
            },
            {
                title:'Event1',
                created_by:'User1',
                start_date:'date 1',
                end_date:'date2',
                quota:25,
                occupation:20
            },
            {
                title:'Event1',
                created_by:'User1',
                start_date:'date 1',
                end_date:'date2',
                quota:25,
                occupation:20
            }
        ],
        []
      )
    
      const columns = React.useMemo(
        () => [
            {
                Header:'Title',
                accessor:'title',
                Filter:ColumnFilter
            },
            {
                Header:'Created By',
                accessor:'created_by',
                Filter:ColumnFilter
            },
            {
                Header:'Start Date',
                accessor:'start_date',
                Filter:ColumnFilter
            },
            {
                Header:'End Date',
                accessor:'end_date',
                Filter:ColumnFilter
            },
            {
                Header:'Quota',
                accessor:'quota',
                Filter:ColumnFilter
            },
            {
                Header:'Occupation',
                accessor:'occupation',
                Filter:ColumnFilter
            }
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        state,
        setGlobalFilter,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize
      } = useTable({ columns, data },useFilters,useGlobalFilter,useSortBy,usePagination);


      const { globalFilter,pageIndex,pageSize } = state;


    return (
      <>
      <Styles>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    
                  >
                    {column.render('Header')}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <span>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
              {
                [10,25,50].map(pageSize =>(
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))
              }
            </select>
          </span>
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page : {' '}
            <input type='number' defaultValue={pageIndex +1} onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) -1 : 0;
              gotoPage(pageNumber);
            }} style={{width:'50px'}}/>
          </span>

          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
          <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </Styles>
        </>
      )
}

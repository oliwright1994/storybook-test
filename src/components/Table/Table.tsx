import React, { FC, RefObject, useEffect, useRef } from 'react';
import {
  ColumnInstance,
  useResizeColumns,
  UseResizeColumnsColumnProps,
  useTable,
  UseTableCellProps,
} from 'react-table';

import { ITable, TData } from './Table.d';
import { Resizer, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TableWrap } from './Table.styled';

interface TableColumn<D extends object = {}>
  extends ColumnInstance<D>,
    UseResizeColumnsColumnProps<D>,
    UseTableCellProps<D> {}

const useStopPropagationOnClick = (reference: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (reference.current !== null) {
      reference.current.addEventListener('click', (e: MouseEvent) => e.stopPropagation());
    }
  }, [reference]);
};

const ResizerComponent: FC = properties => {
  const reference = useRef<HTMLDivElement>(null);
  useStopPropagationOnClick(reference);
  return <Resizer {...properties} ref={reference} />;
};

const Table: FC<ITable> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<TData>(
    {
      columns,
      data,
    },
    useResizeColumns
  );

  return (
    <TableWrap {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()} borderBottom="1px" borderColor="background.1" pb={4}>
            {headerGroup.headers.map(c => {
              const column = (c as unknown) as TableColumn<TData>;
              return (
                <TableHeadCell {...column.getHeaderProps()} textAlign="left" pb={2} fontWeight="300" fontSize="lg">
                  {column.render('Header')}
                  <ResizerComponent {...column.getResizerProps()} />
                </TableHeadCell>
              );
            })}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} borderBottom="1px" borderColor="background.1" p={1} height="XL">
              {row.cells.map(cell => (
                <TableCell {...cell.getCellProps()} py={2} pr={6} fontSize="md">
                  {cell.render('Cell')}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </TableWrap>
  );
};

export default Table;

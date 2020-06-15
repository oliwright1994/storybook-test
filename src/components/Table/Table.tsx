import React, { FC, useEffect, useRef } from 'react';
import {
  useTable,
  TableInstance,
  ColumnInstance,
  useBlockLayout,
  useResizeColumns,
  UseResizeColumnsColumnProps,
  UseTableCellProps,
} from 'react-table';
import { TableWrap, TableBody, TableRow, TableCell, TableHead, Resizer } from './Table.styled';
import { TData, ITable } from './Table.d';

interface TableColumn<D extends object = {}>
  extends ColumnInstance<D>,
    UseResizeColumnsColumnProps<D>,
    UseTableCellProps<D> {}

const useStopPropagationOnClick = <T extends any>(ref: T) => {
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener('click', (e: MouseEvent) => e.stopPropagation());
    }
  }, []);
};

const ResizerComponent: FC = props => {
  const ref = useRef<HTMLDivElement>(null);
  useStopPropagationOnClick(ref);
  return <Resizer {...props} ref={ref} />;
};

const defaultColumn = {
  minWidth: 20,
  width: 200,
  maxWidth: 500,
};

const Table: FC<ITable> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<TData>(
    {
      columns,
      defaultColumn,
      data,
    },
    useBlockLayout,
    useResizeColumns
  ) as TableInstance<object>;

  return (
    <TableWrap {...getTableProps()} display="inline-block">
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow
            {...headerGroup.getHeaderGroupProps()}
            borderBottom="2px"
            borderColor="background.1"
            fontWeight="bold"
            px={1}
            py={2}
          >
            {headerGroup.headers.map(c => {
              const column = (c as unknown) as TableColumn<TData>;
              return (
                <TableCell {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <ResizerComponent {...column.getResizerProps()} />
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()} borderBottom="2px" borderColor="background.1" p={1}>
              {row.cells.map(cell => {
                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </TableWrap>
  );
};

export default Table;

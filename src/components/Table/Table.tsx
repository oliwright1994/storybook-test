import React, { FC } from 'react'
import {
  Cell,
  ColumnInstance,
  useResizeColumns,
  UseResizeColumnsColumnProps,
  useTable,
  UseTableCellProps,
} from 'react-table'

import { ITable, TData } from './Table.d'
import { STableBody, STableCell, STableHead, STableHeadCell, STableRow, STableWrap } from './Table.styled'

interface ITableColumn<D extends object = {}>
  extends ColumnInstance<D>,
    UseResizeColumnsColumnProps<D>,
    UseTableCellProps<D> {}

const renderTableCell = (cell: Cell): JSX.Element => (
  <STableCell {...cell.getCellProps()} py={2} pr={6} fontSize="md">
    {cell.render('Cell')}
  </STableCell>
)

const renderTableHeaderCell = (column: ColumnInstance): JSX.Element => (
  <STableHeadCell {...column.getHeaderProps()} textAlign="left" pb={2} fontWeight="300" fontSize="lg">
    {column.render('Header')}
  </STableHeadCell>
)

const Table: FC<ITable> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<TData>(
    {
      columns,
      data,
    },
    useResizeColumns
  )

  return (
    <STableWrap {...getTableProps()}>
      <STableHead>
        {headerGroups.map(headerGroup => (
          <STableRow {...headerGroup.getHeaderGroupProps()} borderBottom="1px" borderColor="background.1" pb={4}>
            {headerGroup.headers.map(renderTableHeaderCell)}
          </STableRow>
        ))}
      </STableHead>
      <STableBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <STableRow {...row.getRowProps()} borderBottom="1px" borderColor="background.1" p={1} height="XL">
              {row.cells.map(renderTableCell)}
            </STableRow>
          )
        })}
      </STableBody>
    </STableWrap>
  )
}

export default Table

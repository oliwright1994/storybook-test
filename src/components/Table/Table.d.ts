import { Column } from 'react-table'

export type TData = object

export interface ITable {
  columns: Column<Data>[]
  data: Data[]
}

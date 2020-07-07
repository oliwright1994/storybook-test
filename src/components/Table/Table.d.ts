import { Column } from 'react-table'

export type TData = Record<string, unknown>

export interface ITable {
  columns: Column<Data>[]
  data: Data[]
}

import { ReactElement } from 'react';

type TColumnRenderer = (props: { [key: string]: any }) => ReactElement;

interface IColumn {
  title: string;
  dataIndex: string | string[];
  key: string;
  render?: TColumnRenderer;
}

export interface ITable {
  columns: IColumn[];
  data: { [key: string]: any }[];
  loading?: boolean;
}

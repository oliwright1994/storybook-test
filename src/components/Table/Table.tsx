import React, { FC } from 'react';
import { STable, STr, STd, STh } from './Table.styled';
import { ITable } from './Table.d';

const Table: FC<ITable> = ({ columns, data }) => {
  return (
    <STable>
      <thead>
        <STr borderBottom="2px solid" borderColor="background.1" height={32}>
          {columns.map(col => (
            <STh key={col.key}>{col.title}</STh>
          ))}
        </STr>
      </thead>
      <tbody>
        {data.map(row => (
          <STr key={row.id} borderBottom="2px solid" borderColor="background.1" p={1} height={48}>
            {columns.map(col => (
              <STd pr={3} key={col.key}>
                {col.render ? col.render(row) : row[col.key]}
              </STd>
            ))}
          </STr>
        ))}
      </tbody>
    </STable>
  );
};

export default Table;



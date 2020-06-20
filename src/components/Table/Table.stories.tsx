import { Button } from '@chakra-ui/core';
import React from 'react';
import { CellProps } from 'react-table';

import createStory from '../../utils/createStory';
import Tag from '../Tag';
import Table from '.';

createStory(
  'COMPONENTS | Table',
  [
    {
      label: 'inbox example',
      jsx: () => (
        <Table
          columns={[
            {
              Header: 'Date',
              accessor: 'date',
            },
            {
              Header: 'From',
              accessor: 'sender',
            },
            {
              Header: '',
              accessor: 'tags',
              Cell: ({ row }: CellProps<object>) =>
                row.values.tags.map((tag: any) => (
                  <span style={{ marginRight: 2 }}>
                    <Tag messageType={tag.type} key={tag.label}>
                      {tag.label}
                    </Tag>
                  </span>
                )),
            },
            {
              Header: 'Subject',
              accessor: 'subject',
            },
          ]}
          data={[
            {
              date: '14:20',
              sender: 'Smart',
              tags: [{ type: 'info', label: 'Unread' }],
              subject: "This is the subject of the message you've received",
            },
            {
              date: '15:20',
              sender: 'Smart',
              tags: [
                { type: 'info', label: 'Unread' },
                { type: 'warning', label: 'Important' },
              ],
              subject: "You\'ve got 1 month's income left",
            },
            {
              date: '16:20',
              sender: 'Smart',
              tags: [],
              subject: "Your income is due to run out when you're 76. Here is what to do if you want your blah ",
            },
            {
              date: '17:20',
              sender: 'Smart',
              tags: [],
              subject: 'Mauris henderit suspicit ante',
            },
            {
              date: '18:20',
              sender: 'Smart',
              tags: [{ type: 'warning', label: 'Important' }],
              subject: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
            },
          ]}
        />
      ),
    },
    {
      label: 'transaction history example',
      jsx: () => (
        <Table
          columns={[
            { Header: 'Date', accessor: 'date' },
            {
              Header: 'From',
              accessor: 'from',
            },
            {
              Header: 'To',
              accessor: 'to',
            },
            {
              Header: 'Amount',
              accessor: 'amount',
            },
            {
              Header: '',
              accessor: 'actions',
              Cell: ({ row }: CellProps<object>) =>
                row.values.actions.map((action: string) => <Button height="auto">{action}</Button>),
            },
          ]}
          data={[
            {
              date: '23 Sep 2019',
              from: 'Rainy day pot',
              to: 'Flexible income pot',
              amount: '£2,000.00',
              actions: ['Cancel transaction'],
            },
            {
              date: '23 Sep 2019',
              from: 'Inheritance pot',
              to: 'Later life pot',
              amount: '£2,000.00',
              actions: ['Cancel transaction'],
            },
            {
              date: '23 Sep 2019',
              from: 'Flexible income potpot',
              to: 'Paid out',
              amount: '-£225.00',
              actions: ['Cancel transaction'],
            },
          ]}
        />
      ),
    },
  ],
  {}
);

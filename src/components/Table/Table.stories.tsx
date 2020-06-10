import React from 'react';
import createStory from '../../utils/createStory';
import Table from '.';
import Tag from '../Tag';
import Button from '../Button';

createStory('COMPONENTS | Table', [
  {
    label: 'inbox example',
    jsx: () => (
      <Table
        columns={[
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'From',
            dataIndex: 'sender',
            key: 'sender',
          },
          {
            title: '',
            dataIndex: 'tags',
            key: 'tags',
            render: cols =>
              cols.tags.map((tag: { label: string; type: string }) => (
                <span style={{ marginRight: 2 }}>
                  <Tag messageType={tag.type} key={tag.label}>
                    {tag.label}
                  </Tag>
                </span>
              )),
          },
          {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
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
            subject: "You\ve got 1 month's income left",
          },
          {
            date: '16:20',
            sender: 'Smart',
            tags: [],
            subject: "Your income is due to run out when you're 76. Here is what to do if you want your blah ",
          },
          { date: '17:20', sender: 'Smart', tags: [], subject: 'Mauris henderit suspicit ante' },
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
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
          },
          {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
          },
          {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
          },
          {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            render: cols => cols.actions.map((action: string) => <Button height="auto">{action}</Button>),
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
]);

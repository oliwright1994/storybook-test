import Tag from '@bright/components/Tag'
import { MessageType } from '@bright/constants'
import { Button } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React, { ReactNode } from 'react'
import { CellProps } from 'react-table'

import Table from '.'

const CANCEL_ACTION = 'Cancel transaction'

export default { component: Table, title: 'Components/Table' } as Meta
export const inboxExample = (): JSX.Element => (
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
        Cell: ({ row }: CellProps<Record<string, unknown>>) =>
          row.values.tags.map((tag: { type: MessageType; label: string }) => (
            <span style={{ marginRight: 2 }} key={tag.label}>
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
        tags: [{ type: MessageType.info, label: 'Unread' }],
        subject: "This is the subject of the message you've received",
      },
      {
        date: '15:20',
        sender: 'Smart',
        tags: [
          { type: MessageType.info, label: 'Unread' },
          { type: MessageType.warning, label: 'Important' },
        ],
        subject: "You've got 1 month's income left",
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
        tags: [{ type: MessageType.warning, label: 'Important' }],
        subject: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
      },
    ]}
  />
)
export const transitionHistoryExample = (): JSX.Element => (
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
        Cell: ({ row }: CellProps<Record<string, unknown>>) =>
          row.values.actions.map(
            (action: string): ReactNode => (
              <Button height="auto" key={action}>
                {action}
              </Button>
            )
          ),
      },
    ]}
    data={[
      {
        date: '23 Sep 2019',
        from: 'Rainy day pot',
        to: 'Flexible income pot',
        amount: '£2,000.00',
        actions: [CANCEL_ACTION],
      },
      {
        date: '24 Sep 2019',
        from: 'Inheritance pot',
        to: 'Later life pot',
        amount: '£2,000.00',
        actions: [CANCEL_ACTION],
      },
      {
        date: '25 Sep 2019',
        from: 'Flexible income potpot',
        to: 'Paid out',
        amount: '-£225.00',
        actions: [CANCEL_ACTION],
      },
    ]}
  />
)

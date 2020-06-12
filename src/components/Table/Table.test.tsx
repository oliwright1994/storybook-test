import React from 'react'
import { render } from '@testing-library/react';
import Table from '.'

const props = {
  columns: [
    {
      title: 'Static Column',
      dataIndex: 'col1',
      key: 'col1'
    },
    {
      title: 'Dynamic Render Column',
      dataIndex: 'col2',
      key: 'col2',
      render: ({ col2 }) => <b>{col2}</b>
    }
  ],
  data: [
    {
      col1: 'lorem',
      col2: 'lipsum',
    },
    {
      col1: 'dolor',
      col2: 'sit'
    }
  ]
}

describe('<Table />', () => {
  it('should render as expected', () => {
    const { asFragment } = render(<Table {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

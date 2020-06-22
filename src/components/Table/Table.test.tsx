import { render } from '@testing-library/react'
import React from 'react'
import { CellProps } from 'react-table'

import Table from '.'

const props = {
  columns: [
    {
      Header: 'Static Column',
      accessor: 'col1',
    },
    {
      Header: 'Dynamic Render Column',
      accessor: 'col2',
      Cell: ({ row }: CellProps<object>) => <b>{row.values.col2}</b>,
    },
  ],
  data: [
    {
      col1: 'lorem',
      col2: 'lipsum',
    },
    {
      col1: 'dolor',
      col2: 'sit',
    },
  ],
}

describe('<Table />', () => {
  it('should render as expected', () => {
    const { asFragment } = render(<Table {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Breadcrumb from '.'

describe('<Breadcrumb />', () => {
  const generateDefaultChildren = (): JSX.Element[] =>
    [1, 2, 3].map((value, i, arr) => (
      <Breadcrumb.Item href={`/${value}`} key={value} isCurrentPage={i === arr.length - 1}>
        {value}
      </Breadcrumb.Item>
    ))

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Breadcrumb>{generateDefaultChildren()}</Breadcrumb>)
    expect(container).toMatchSnapshot()
  })
})

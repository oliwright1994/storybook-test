import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Spinner from '.'

describe('<Spinner />', () => {
  const defaultProps = {
    thickness: '3px',
    speed: '0.8s',
    emptyColor: 'gray.200',
    color: 'blue.500',
  }

  it('should render as expected', () => {
    const { asFragment } = renderWithBrightTheme(<Spinner {...defaultProps} />)

    expect(asFragment()).toMatchSnapshot()
  })
})

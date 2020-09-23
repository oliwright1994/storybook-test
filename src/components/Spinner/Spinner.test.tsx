import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Spinner from '.'

describe('<Spinner />', () => {
  it('should render as expected', () => {
    const { asFragment } = renderWithBrightTheme(<Spinner size="md" />)

    expect(asFragment()).toMatchSnapshot()
  })
})

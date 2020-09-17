import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Header from '.'

describe('<Header />', () => {
  const defaultText = 'Test Header'
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Header>{defaultText}</Header>)

    expect(container).toMatchSnapshot()
  })

  it('should render passed children', () => {
    const { getByText } = renderWithBrightTheme(<Header>{defaultText}</Header>)

    const headerEl = getByText(/test header/i)
    expect(headerEl).toBeTruthy()
    expect(headerEl.nodeName).toMatch(/header/i)
  })
})

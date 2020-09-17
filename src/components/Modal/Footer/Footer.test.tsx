import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Footer from '.'

describe('<Footer />', () => {
  const defaultText = 'Test Text'
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Footer>{defaultText}</Footer>)

    expect(container).toMatchSnapshot()
  })

  it('should render passed children in footer tag', () => {
    const { getByText } = renderWithBrightTheme(<Footer>{defaultText}</Footer>)
    const footerEl = getByText(/test text/i)
    expect(footerEl).toBeTruthy()
    expect(footerEl.nodeName).toMatch(/footer/i)
  })
})

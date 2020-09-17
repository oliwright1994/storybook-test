import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Body from '.'

describe('<Body />', () => {
  const defaultText = 'Test Text'
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Body>{defaultText}</Body>)

    expect(container).toMatchSnapshot()
  })

  it('should render passed children', () => {
    const { getByText } = renderWithBrightTheme(<Body>{defaultText}</Body>)

    expect(getByText(/test text/i)).toBeTruthy()
  })
})

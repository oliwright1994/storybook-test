import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Text from '.'

describe('<Text />', () => {
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <>
        <Text>Test One</Text>
        <Text>Test Two</Text>
        <Text>Test Three</Text>
      </>
    )
    const textNodes = screen.getAllByText(/test/i)

    expect(textNodes).toHaveLength(3)
    expect(container).toMatchSnapshot()
  })

  it('should render with the correct element tag', () => {
    const { container } = renderWithBrightTheme(
      <>
        <Text>Paragraph</Text>
        <Text as="i">Italic</Text>
        <Text as="strong">Strong</Text>
        <Text as="span">Span</Text>
      </>
    )
    expect(screen.getByText(/paragraph/i).nodeName).toEqual('P')
    expect(screen.getByText(/i/i).nodeName).toEqual('I')
    expect(screen.getByText(/strong/i).nodeName).toEqual('STRONG')
    expect(screen.getByText(/span/i).nodeName).toEqual('SPAN')
    expect(container).toMatchSnapshot()
  })
})

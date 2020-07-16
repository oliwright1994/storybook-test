import { Text } from '@chakra-ui/core'
import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Card from '.'

describe('<Card />', () => {
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <Card>
        <Text>Test One</Text>
        <Text>Test Two</Text>
        <Text>Test Three</Text>
      </Card>
    )
    const textNodes = screen.getAllByText(/test/i)

    expect(textNodes).toHaveLength(3)
    expect(container).toMatchSnapshot()
  })
})

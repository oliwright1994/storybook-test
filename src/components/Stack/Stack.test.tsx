import { Text } from '@chakra-ui/core'
import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithBrightTheme } from '../../../testing/helpers/themeHelper'
import Stack from '.'

describe('<Stack />', () => {
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <Stack>
        <Text>Test One</Text>
        <Text>Test Two</Text>
        <Text>Test Three</Text>
      </Stack>
    )
    const textNodes = screen.getAllByText(/test/i)

    expect(textNodes).toHaveLength(3)
    expect(container).toMatchSnapshot()
  })
})

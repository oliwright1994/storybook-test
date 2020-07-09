import { Text } from '@chakra-ui/core'
import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithBrightTheme } from '../../../testing/helpers/themeHelper'
import Alert from '.'

describe('<Alert />', () => {
  it('should render as expected with an icon', () => {
    const { container } = renderWithBrightTheme(
      <Alert>
        <Text>This is a test alert</Text>
      </Alert>
    )
    const textNodes = screen.getAllByText(/test/i)
    const icon = screen.getByRole('presentation')

    expect(textNodes).toHaveLength(1)
    expect(icon).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

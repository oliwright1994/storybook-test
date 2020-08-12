import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Heading from '.'

describe('<Heading />', () => {
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <>
        <Heading>Heading One</Heading>
        <Heading as="h2">Heading Two</Heading>
      </>
    )
    const headingNodes = screen.getAllByText(/heading/i)

    expect(headingNodes).toHaveLength(2)
    expect(container).toMatchSnapshot()
  })

  it('should render with the correct element tag', () => {
    const { container } = renderWithBrightTheme(
      <>
        <Heading>H1 Heading</Heading>
        <Heading as="h2">H2 Heading</Heading>
        <Heading as="h3">H3 Heading</Heading>
        <Heading as="h4">H4 Heading</Heading>
        <Heading as="h5">H5 Heading</Heading>
        <Heading as="h6">H6 Heading</Heading>
      </>
    )
    for (let i = 1; i < 7; i += 1) {
      const regExp = new RegExp(`H${i}`, 'g')
      expect(screen.getByText(regExp).nodeName).toEqual(`H${i}`)
    }
    expect(container).toMatchSnapshot()
  })
})

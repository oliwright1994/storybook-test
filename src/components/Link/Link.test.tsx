import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Link from '.'

describe('<Link />', () => {
  const props = {
    href: 'test/url',
    children: 'Link text',
  }

  it('should render as expected', () => {
    const { asFragment } = renderWithBrightTheme(<Link {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should display text', () => {
    const { container } = renderWithBrightTheme(<Link {...props} />)

    expect(container).toHaveTextContent(props.children)
  })

  it('should add disabled attribute', () => {
    const { getByText } = renderWithBrightTheme(<Link {...props} isDisabled />)

    expect(getByText(/link/i)).toHaveAttribute('aria-disabled')
  })

  it('should fire onClick', () => {
    const clickHandler = jest.fn()
    const { getByText } = renderWithBrightTheme(<Link {...props} onClick={clickHandler} />)

    fireEvent.click(getByText(/link/i))
    expect(clickHandler).toHaveBeenCalled()
  })
})

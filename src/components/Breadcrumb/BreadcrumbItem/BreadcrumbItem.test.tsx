import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import BreadcrumbItem from '.'

describe('<BreadcrumbItem />', () => {
  const defaultProps = {
    href: '/home',
    children: 'Link Text',
  }

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<BreadcrumbItem {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('should render an <a> tag with the correct href', () => {
    const { getByText } = renderWithBrightTheme(<BreadcrumbItem {...defaultProps} />)
    const link = getByText(defaultProps.children)

    expect(link.nodeName).toEqual('A')
    expect(link).toHaveAttribute('href', '/home')
  })

  it('should add aria-current attribute when isCurrentPage is true', () => {
    const { getByText } = renderWithBrightTheme(<BreadcrumbItem isCurrentPage {...defaultProps} />)
    const link = getByText(defaultProps.children)

    expect(link).toHaveAttribute('aria-current', 'page')
  })
})

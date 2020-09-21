import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Tabs from '../Tabs'
import Tab from '.'

describe('<Tab />', () => {
  const props = {
    children: 'Tab1',
  }
  const tabsComponent = (
    <Tabs>
      <Tabs.TabList>
        <Tab {...props} />
      </Tabs.TabList>
    </Tabs>
  )

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(tabsComponent)
    expect(container).toMatchSnapshot()
  })

  it('should display text', () => {
    const { container } = renderWithBrightTheme(tabsComponent)
    expect(container).toHaveTextContent(props.children)
  })
})

import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Tabs from '../Tabs'
import TabPanel from '.'

describe('<TabPanel />', () => {
  const defaultProps = {
    id: '1',
    children: 'panel text',
    isSelected: true,
  }

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <Tabs>
        <Tabs.TabPanels>
          <TabPanel {...defaultProps} />
        </Tabs.TabPanels>
      </Tabs>
    )

    expect(container).toMatchSnapshot()
  })

  it('should render children', () => {
    const { container } = renderWithBrightTheme(
      <Tabs>
        <Tabs.TabPanels>
          <TabPanel {...defaultProps} />
        </Tabs.TabPanels>
      </Tabs>
    )

    expect(container).toHaveTextContent(defaultProps.children)
  })

  it('should not have hidden attribute when selected', () => {
    const { getByText } = renderWithBrightTheme(
      <Tabs>
        <Tabs.TabPanels>
          <TabPanel {...defaultProps} />
          <TabPanel id="2">panel test</TabPanel>
        </Tabs.TabPanels>
      </Tabs>
    )

    expect(getByText(defaultProps.children)).not.toHaveAttribute('hidden')
  })
})

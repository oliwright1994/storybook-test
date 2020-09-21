import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Tabs from '.'

describe('<Tabs />', () => {
  const labels = {
    tab: 'Tab',
    panel: 'Panel',
  }
  const tabsArray = ['0', '1', '2']
  const getLabel = (id: string, type: string): string => `${type}${id}`
  const tabs = tabsArray.map(id => <Tabs.Tab key={id}>{getLabel(id, labels.tab)}</Tabs.Tab>)
  const panels = tabsArray.map(id => <Tabs.TabPanel key={id}>{getLabel(id, labels.panel)}</Tabs.TabPanel>)

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <Tabs>
        <Tabs.TabList>{tabs}</Tabs.TabList>
        <Tabs.TabPanels>{panels}</Tabs.TabPanels>
      </Tabs>
    )

    expect(container).toMatchSnapshot()
  })
})

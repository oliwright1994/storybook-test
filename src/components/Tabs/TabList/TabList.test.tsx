import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Tabs from '../Tabs'
import TabList from '.'

describe('<TabList />', () => {
  const getLabel = (id: string): string => `Tab${id}`
  const tabs = ['1', '2'].map(id => <Tabs.Tab key={id}>{getLabel(id)}</Tabs.Tab>)
  const tabsComponent = (
    <Tabs>
      <TabList>{tabs}</TabList>
    </Tabs>
  )

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(tabsComponent)
    expect(container).toMatchSnapshot()
  })

  it('should render child tabs as expected', () => {
    const { getAllByRole, container } = renderWithBrightTheme(tabsComponent)
    expect(getAllByRole('tab')).toHaveLength(2)
    expect(container).toHaveTextContent(getLabel('1'))
    expect(container).toHaveTextContent(getLabel('2'))
  })
})

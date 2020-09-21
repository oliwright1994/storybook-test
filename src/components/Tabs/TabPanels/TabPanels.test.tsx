import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Tabs from '../Tabs'
import TabPanels from '.'

describe('<TabPanels />', () => {
  const getLabel = (id: string): string => `Panel${id}`
  const panels = ['1', '2'].map(id => <Tabs.TabPanel key={id}>{getLabel(id)}</Tabs.TabPanel>)

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(
      <Tabs>
        <TabPanels>{panels}</TabPanels>
      </Tabs>
    )

    expect(container).toMatchSnapshot()
  })

  it('should render child panels as expected', () => {
    const { getByText } = renderWithBrightTheme(
      <Tabs>
        <TabPanels>{panels}</TabPanels>
      </Tabs>
    )

    expect(getByText(getLabel('1'))).toBeTruthy()
    expect(getByText(getLabel('2'))).toBeTruthy()
  })
})

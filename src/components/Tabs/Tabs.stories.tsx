import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Tabs from '.'

export default { component: Tabs, title: 'Components/Tabs' } as Meta
export const Standard = (): JSX.Element => (
  <Tabs>
    <Tabs.TabList>
      <Tabs.Tab>Tab1</Tabs.Tab>
      <Tabs.Tab>Tab2</Tabs.Tab>
      <Tabs.Tab>Tab2</Tabs.Tab>
    </Tabs.TabList>
    <Tabs.TabPanels>
      <Tabs.TabPanel>Panel One</Tabs.TabPanel>
      <Tabs.TabPanel>Panel Two</Tabs.TabPanel>
      <Tabs.TabPanel>Panel Three</Tabs.TabPanel>
    </Tabs.TabPanels>
  </Tabs>
)

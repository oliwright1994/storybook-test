import createStory from '@bright/storybook/createStory'
import React from 'react'

import Tabs from '.'

createStory('COMPONENTS | Tabs', [
  {
    label: 'Tabs',
    jsx: () => {
      return (
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
    },
  },
])

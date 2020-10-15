import { ITabs as IChakraTabs, Tabs as ChakraTabs } from '@chakra-ui/core'
import React, { FC } from 'react'

import Tab from './Tab'
import TabList from './TabList'
import TabPanel from './TabPanel'
import TabPanels from './TabPanels'

interface ITabs extends FC<IChakraTabs> {
  Tab: typeof Tab
  TabList: typeof TabList
  TabPanel: typeof TabPanel
  TabPanels: typeof TabPanels
}

const Tabs: ITabs = ({ children }) => {
  return <ChakraTabs  flexGrow={1}>{children}</ChakraTabs>
}

Tabs.Tab = Tab
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel
Tabs.TabPanels = TabPanels

export default Tabs

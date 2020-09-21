import { TabPanel as ChakraTabPanel, TabPanelProps as IChakraTabPanel } from '@chakra-ui/core'
import React, { FC } from 'react'

const TabPanel: FC<IChakraTabPanel> = ({ children, isSelected }) => {
  return <ChakraTabPanel isSelected={isSelected}>{children}</ChakraTabPanel>
}

export default TabPanel

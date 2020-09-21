import { TabPanels as ChakraTabPanels, TabPanelsProps as IChakraTabPanels } from '@chakra-ui/core'
import React, { FC } from 'react'

const TabPanels: FC<IChakraTabPanels> = ({ children }) => {
  return <ChakraTabPanels>{children}</ChakraTabPanels>
}

export default TabPanels

import { TabPanel as ChakraTabPanel, TabPanelProps as IChakraTabPanel } from '@chakra-ui/core'
import React, { FC } from 'react'

const TabPanel: FC<IChakraTabPanel> = ({ children, isSelected }) => {
  return (
    <ChakraTabPanel mt={2} px={4} isSelected={isSelected} pt={4}
    // overflowY="scroll" height="100%"
    >
      {children}
    </ChakraTabPanel>
  )
}

export default TabPanel

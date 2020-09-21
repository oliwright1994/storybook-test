import { TabList as ChakraTabList } from '@chakra-ui/core'
import React, { FC } from 'react'

const TabList: FC = ({ children }) => {
  return <ChakraTabList>{children}</ChakraTabList>
}

export default TabList

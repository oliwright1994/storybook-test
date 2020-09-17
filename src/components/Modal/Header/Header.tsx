import { ModalHeader as ChakraModalHeader } from '@chakra-ui/core'
import React, { FC } from 'react'

const Header: FC = ({ children }) => {
  return <ChakraModalHeader>{children}</ChakraModalHeader>
}

export default Header

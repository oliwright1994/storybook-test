import { ModalFooter as ChakraModalFooter } from '@chakra-ui/core'
import React, { FC } from 'react'

const Footer: FC = ({ children }) => {
  return <ChakraModalFooter>{children}</ChakraModalFooter>
}

export default Footer

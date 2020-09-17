import { ModalBody as ChakraModalBody } from '@chakra-ui/core'
import React, { FC } from 'react'

const Body: FC = ({ children }) => {
  return <ChakraModalBody>{children}</ChakraModalBody>
}

export default Body

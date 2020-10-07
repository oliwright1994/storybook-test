import { Text as ChakraText } from '@chakra-ui/core'
import React, { FC } from 'react'

export interface IText {
  as?: 'p' | 'span' | 'strong' | 'i'
}

const Text: FC<IText> = ({ children, as = 'p' }) => {
  return <ChakraText as={as}>{children}</ChakraText>
}

export default Text

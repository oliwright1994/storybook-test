import { Heading as ChakraHeading } from '@chakra-ui/core'
import React, { FC } from 'react'

interface IHeading {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading: FC<IHeading> = ({ children, as = 'h1' }) => {
  return <ChakraHeading as={as}>{children}</ChakraHeading>
}

export default Heading

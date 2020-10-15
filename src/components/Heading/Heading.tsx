import { Heading as ChakraHeading } from '@chakra-ui/core'
import React, { FC } from 'react'

interface IHeading {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: string
  py?: number
}

const variantMap: Record<string, string> = {
  h1: '48px',
  h2: '36px',
  h3: '28px',
  h4: '24px',
  h5: '20px',
}

const Heading: FC<IHeading> = ({ children, as = 'h1', color = 'primary.500', py=4 }) => {
  return <ChakraHeading as={as} py={py} fontSize={variantMap[as || 'primary']} color={color}>{children}</ChakraHeading>
}

export default Heading

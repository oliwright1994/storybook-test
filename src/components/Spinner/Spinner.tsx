import { Spinner as ChakraSpinner } from '@chakra-ui/core'
import React, { FC } from 'react'

interface ISpinner {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}

const Spinner: FC<ISpinner> = ({ size = 'md' }) => (
  <ChakraSpinner thickness="2px" speed="0.8s" emptyColor="transparent" color="blackAlpha.500" size={size} />
)

export default Spinner

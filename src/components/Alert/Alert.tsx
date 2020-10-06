import { Alert as ChakraAlert, AlertIcon as ChakraAlertIcon } from '@chakra-ui/core'
import React, { FC } from 'react'

export interface IAlert {
  variant?: 'error' | 'success' | 'warning' | 'info'
}

const Alert: FC<IAlert> = ({ children, variant = 'info' }) => (
  <ChakraAlert status={variant}>
    <ChakraAlertIcon />
    {children}
  </ChakraAlert>
)

export default Alert

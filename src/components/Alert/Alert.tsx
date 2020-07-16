import { AlertVariant } from '@bright/constants'
import { Alert as ChakraAlert, AlertIcon as ChakraAlertIcon } from '@chakra-ui/core'
import React, { FC } from 'react'

interface IAlert {
  variant?: AlertVariant
}

const Alert: FC<IAlert> = ({ children, variant = AlertVariant.info }) => (
  <ChakraAlert status={variant}>
    <ChakraAlertIcon />
    {children}
  </ChakraAlert>
)

export default Alert

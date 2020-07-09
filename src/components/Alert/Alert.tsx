import { Alert as ChakraAlert, AlertIcon as ChakraAlertIcon } from '@chakra-ui/core'
import React, { FC } from 'react'

import { AlertVariant } from '../../constants'

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

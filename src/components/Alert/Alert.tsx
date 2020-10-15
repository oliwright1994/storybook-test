import { Alert as ChakraAlert, AlertIcon as ChakraAlertIcon, AlertTitle, Box, Flex } from '@chakra-ui/core'
import React, { FC } from 'react'

export interface IAlert {
  variant?: 'error' | 'success' | 'warning' | 'info'
  title?: string
}

const Alert: FC<IAlert> = ({ children, variant = 'info', title="" }) => (
  <ChakraAlert status={variant} backgroundColor="#F2F4F6" borderLeft="4px solid #0075C8" >
    <Flex direction="column">
      <Flex mb={2}>
    <ChakraAlertIcon />
    <AlertTitle>{title}</AlertTitle>
    </Flex>
    <Box>
    {children}
    </Box>
    </Flex>
  </ChakraAlert>
)

export default Alert

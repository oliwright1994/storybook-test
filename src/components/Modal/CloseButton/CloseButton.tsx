import { CloseButtonProps as IChakraCloseButton, ModalCloseButton as ChakraModalCloseButton } from '@chakra-ui/core'
import React, { FC } from 'react'

type ICloseButton = Pick<IChakraCloseButton, 'aria-label'>

const CloseButton: FC<ICloseButton> = ({ 'aria-label': ariaLabel }) => {
  return <ChakraModalCloseButton aria-label={ariaLabel} />
}

export default CloseButton

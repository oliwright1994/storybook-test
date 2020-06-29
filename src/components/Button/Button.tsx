import { Button as ChakraButton } from '@chakra-ui/core'
import React from 'react'

import { IButton } from './Button.d'
import { ButtonSize, ButtonVariant } from './constants'

const variantMap: Record<string, string> = {
  [ButtonVariant.primary]: 'blue',
  [ButtonVariant.secondary]: 'gray',
  [ButtonVariant.danger]: 'red',
}

const Button: React.FC<IButton> = ({ children, variant, ...props }) => (
  <ChakraButton {...props} variantColor={variantMap[variant || ButtonVariant.primary]}>
    {children}
  </ChakraButton>
)

Button.defaultProps = {
  size: ButtonSize.lg,
  variant: ButtonVariant.primary,
}

export default Button

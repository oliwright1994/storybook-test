import { Button as ChakraButton } from '@chakra-ui/core'
import React from 'react'

import { IButton } from './Button.d'
import { ButtonStyleType } from './constants'

const variantMap: Record<string, string> = {
  [ButtonStyleType.primary]: 'blue',
  [ButtonStyleType.secondary]: 'gray',
  [ButtonStyleType.danger]: 'red',
}

const Button: React.FC<IButton> = ({ children, style, ...props }) => {
  return (
    <ChakraButton {...props} variantColor={variantMap[style || ButtonStyleType.primary]}>
      {children}
    </ChakraButton>
  )
}

Button.defaultProps = {
  size: 'lg',
  style: ButtonStyleType.primary,
}

export default Button

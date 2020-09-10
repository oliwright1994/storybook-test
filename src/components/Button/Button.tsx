import { Button as ChakraButton, ButtonProps } from '@chakra-ui/core'
import React, { FC } from 'react'

import { ButtonSize, ButtonVariant } from './constants'

interface IButton extends Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'isDisabled'> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantMap: Record<string, string> = {
  [ButtonVariant.primary]: 'blue',
  [ButtonVariant.secondary]: 'gray',
  [ButtonVariant.danger]: 'red',
}

const Button: FC<IButton> = ({
  onClick,
  variant = ButtonVariant.primary,
  size = ButtonSize.lg,
  isDisabled,
  leftIcon,
  rightIcon,
  children,
}) => (
  <ChakraButton
    onClick={onClick}
    variantColor={variantMap[variant || ButtonVariant.primary]}
    size={size}
    isDisabled={isDisabled}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
  >
    {children}
  </ChakraButton>
)

export default Button

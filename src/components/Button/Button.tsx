import { Button as ChakraButton, ButtonProps } from '@chakra-ui/core'
import React, { FC } from 'react'

export interface IButton extends Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'isDisabled'> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'md' | 'sm'
}

const variantMap: Record<string, string> = {
  primary: 'green',
  secondary: 'gray',
  danger: 'red',
}

const Button: FC<IButton> = ({
  onClick,
  variant = 'primary',
  size = 'md',
  isDisabled,
  leftIcon,
  rightIcon,
  children,
}) => (
  <ChakraButton
    onClick={onClick}
    variantColor={variantMap[variant || 'primary']}
    size={size}
    isDisabled={isDisabled}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    padding="100px"
  >
    {children}
  </ChakraButton>
)

export default Button

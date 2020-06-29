import { ButtonProps } from '@chakra-ui/core'

import { ButtonStyleType } from './constants'

export interface IButton extends Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'isDisabled'> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: ButtonStyleType
  size?: 'sm' | 'lg'
}

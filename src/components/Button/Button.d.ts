import { ButtonProps } from '@chakra-ui/core'

import { ButtonSize, ButtonVariant } from './constants'

export interface IButton extends Pick<ButtonProps, 'leftIcon' | 'rightIcon' | 'isDisabled'> {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: ButtonVariant
  size?: ButtonSize
}

import { Tooltip as ChakraTooltip, TooltipProps as IChakraTooltip } from '@chakra-ui/core'
import React, { FC } from 'react'

export type ITooltip = Pick<IChakraTooltip, 'label' | 'aria-label' | 'shouldWrapChildren'>

const Tooltip: FC<ITooltip> = ({ children, label, shouldWrapChildren = true, 'aria-label': ariaLabel }) => {
  return (
    <ChakraTooltip
      hasArrow
      placement="top"
      shouldWrapChildren={shouldWrapChildren}
      label={label}
      aria-label={ariaLabel}
    >
      {children}
    </ChakraTooltip>
  )
}

export default Tooltip

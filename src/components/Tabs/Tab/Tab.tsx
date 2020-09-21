import { Tab as ChakraTab, TabPanelProps as IChakraTab } from '@chakra-ui/core'
import React, { FC } from 'react'

const Tab: FC<IChakraTab> = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <ChakraTab ref={ref} {...restProps}>
      {children}
    </ChakraTab>
  )
})

export default Tab

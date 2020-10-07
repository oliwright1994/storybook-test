import { Link as ChakraLink, LinkProps as IChakraLink } from '@chakra-ui/core'
import React, { FC } from 'react'

export interface ILink extends Pick<IChakraLink, 'isExternal' | 'isDisabled' | 'onClick' | 'as'> {
  href?: string
}

const Link: FC<ILink> = ({ onClick, href, isExternal, isDisabled, children, as }) => (
  <ChakraLink onClick={onClick} href={href} isExternal={isExternal} isDisabled={isDisabled} as={as}>
    {children}
  </ChakraLink>
)

export default Link

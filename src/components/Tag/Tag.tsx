import React, { FC } from 'react'

import { ITag } from './Tag.d'
import { STag } from './Tag.styled'

const Tag: FC<ITag> = ({ children, messageType, ...props }) => (
  <STag
    color='white'
    backgroundColor={`${messageType}.2`}
    px={2}
    py={1}
    mx={2}
    borderRadius="md"
    fontSize="xs"
    fontWeight={4}
    {...props}
  >
    {children}
  </STag>
)

export default Tag

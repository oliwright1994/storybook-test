import React, { FC } from 'react';

import { ITag } from './Tag.d';
import { STag } from './Tag.styled';

const Tag: FC<ITag> = ({ children, messageType, ...properties }) => (
  <STag
    color={`${messageType}.2`}
    border="2px"
    borderColor={`${messageType}.2`}
    backgroundColor={`${messageType}.0`}
    borderRadius="lg"
    px={2}
    py={1}
    fontSize="xs"
    fontWeight={4}
    {...properties}
  >
    {children}
  </STag>
);

export default Tag;

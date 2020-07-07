import { Box } from '@chakra-ui/core'
import React, { FC } from 'react'

import { Space } from '../../constants'

const Card: FC = ({ children }) => {
  return (
    <Box p={Space.l} border="1px" color="grey">
      {children}
    </Box>
  )
}

export default Card

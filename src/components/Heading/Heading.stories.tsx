import { Stack } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Heading from './Heading'

export default { component: Heading, title: 'Components/Heading' } as Meta
export const Standard = (): JSX.Element => (
  <Stack>
    <Heading as="h1">H1 Heading</Heading>
    <Heading as="h2">H2 Heading</Heading>
    <Heading as="h3">H3 Heading</Heading>
    <Heading as="h4">H4 Heading</Heading>
    <Heading as="h5">H5 Heading</Heading>
    <Heading as="h6">H6 Heading</Heading>
  </Stack>
)

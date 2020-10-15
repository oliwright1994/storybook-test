import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import { Heading, Text, Input, Tabs, Alert } from '@bright/components'
import { Flex } from '@chakra-ui/core'
import React, { FC, FormEvent } from 'react'
import { Preview, Canvas } from '@storybook/addon-docs/blocks'

const UI: FC = () => {
  return (
    <>
      <Heading as='h2'>Style Principles</Heading>
      <Alert title="Notes">
        <Text>Placeholder text colour use <Text as='strong'>Content-Tertiary</Text></Text>
        <Text>Active text colour use <Text as='strong'>Content-Secondary</Text></Text>
        <br/>
        <Text>Icon size <Text as='strong'>icon-size-3</Text></Text>
      </Alert>
    </>
  )
}

export default UI

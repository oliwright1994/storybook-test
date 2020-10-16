import Stack from '@bright/components/Stack'
import { Space } from '@bright/constants'
import { Heading, Text, Input, Tabs, Tag, Link } from '@bright/components'
import { Flex, Icon } from '@chakra-ui/core'
import React, { FC, FormEvent } from 'react'
import BrightProvider from '@bright/providers/BrightProvider'
import { defaultBrightTheme }  from '@bright/theme'
import UI from './UI'
import UX from './UX'
import Research from './Research'
import { MessageType } from '@bright/constants'

const InputDocs: FC = () => {
  return (
    <BrightProvider theme={defaultBrightTheme}>
      <Flex px={20} direction="column">
        <Heading as="h1">Input Fields</Heading>
        <Flex mb={5}>
          <Tag messageType={MessageType.success}> <Icon name='check' mr={1} />Healthy</Tag>
          <Link isExternal href="https://github.com/smartpension/bright/tree/master/src/components/Input">
             {'    View on Github'}
          </Link>
        </Flex>
        <Tabs>
          <Tabs.TabList>
            <Tabs.Tab>UX</Tabs.Tab>
            <Tabs.Tab>UI</Tabs.Tab>
            <Tabs.Tab>Research</Tabs.Tab>
            <Tabs.Tab>Code</Tabs.Tab>
          </Tabs.TabList>
          <Tabs.TabPanels>
            <Tabs.TabPanel>
              <UX />
            </Tabs.TabPanel>
            <Tabs.TabPanel>
              <UI />
            </Tabs.TabPanel>
            <Tabs.TabPanel>
              <Research />
            </Tabs.TabPanel>
            <Tabs.TabPanel>
              <Heading>Code content</Heading>
            </Tabs.TabPanel>
          </Tabs.TabPanels>
        </Tabs>
      </Flex>
    </BrightProvider>
  )
}

export default InputDocs

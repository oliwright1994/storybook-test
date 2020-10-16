import { Space } from '@bright/constants'
import { Heading, Text, Input, Tabs, Card, Stack } from '@bright/components'
import { Flex, Box, Icon, Divider } from '@chakra-ui/core'
import React, { FC, FormEvent } from 'react'
import { Preview, Canvas } from '@storybook/addon-docs/blocks'

interface IGuideCard {
  variant?: 'positive' | 'negative'
}

export const GuideCard: FC<IGuideCard> = ({ variant = 'positive', children }) => {
  return (
    <Flex flexDirection="column" flexGrow={1} maxWidth="350px" borderRadius="10px" overflow="hidden" my={10}>
      <Flex
        alignItems="center"
        py="10px"
        px="7%"
        backgroundColor={variant === 'positive' ? 'green.500' : 'red.500'}
        width="100%"
      >
        <Icon name={variant === 'positive' ? 'check-circle' : 'warning-2'} size="24px" color="white" mx="10px" />
        <Heading as="h5" color="white" py={0}>
          {variant === 'positive' ? 'Do' : "Don't"}
        </Heading>
      </Flex>
      <Flex
        flexGrow={1}
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
        border="1px solid #CCCCCC"
        p="20px"
      >
        {children}
      </Flex>
    </Flex>
  )
}

const UI: FC = () => {
  return (
    <Box>
      <Heading as="h2">Basic input field structure</Heading>
      <Canvas>
        <Flex justifyContent="space-around">
        <Input
          id="forename"
          isRequired
          onChange={() => null}
          label="Forename"
          description="As shown in your passport"
          placeholder="e.g. John"
        />
        <Input
          id="middle_name"
          onChange={() => null}
          label="Middle name "
          description="As shown in your passport"
          placeholder="e.g. Andrew"
        />
        <Input
          id="surname"
          isRequired
          onChange={() => null}
          label="Surname"
          description="As shown in your passport"
          isInvalid
          placeholder="e.g. Smith"
          errorMessage="Enter your surname"
        />
        </Flex>
      </Canvas>
      <Heading as="h3">
        Overview
        <Divider borderColor="#CCCCCC" />
      </Heading>
      <Text>
        Input field allow for single line text writting. It can be used accordingly to many types of information
        detailed below.
      </Text>
      Label
      <Text>Each field label should be unique, clear and concise.</Text>
      <br/>
      <Heading as="h3">
        Hint text
        <Divider borderColor="#CCCCCC" />
      </Heading>
      <Text>
        Hint text is optional. Use placeholder text in order to support and give additional context to what information
        needs to be entered.
      </Text>
      <br/>
      <Heading as="h3">
        Field size
        <Divider borderColor="#CCCCCC" />
      </Heading>
      <Text>
        On desktop if the field length in characters is known the field should reflect the information it contains. On
        mobile the field size should be the size of the viewport.
      </Text>
      <Flex justifyContent="space-around" my={15}>
        <GuideCard variant="positive">
          <Stack space="l">
            <Box>
              <Text as="strong">Component usage</Text>
              <Text>Use for a single line text input.</Text>
            </Box>
            <Box>
              <Text as="strong">Label</Text>
              <Text>
                Each field label should be unique. Create labels that are clear and easy to understand. Create concise
                labels for the form fields.
              </Text>
            </Box>
            <Box>
              <Text as="strong">Placeholder text</Text>
              <Text>
                Use placeholder text to give additional context in order to clarify what information needs to be entered
                and the type of information needed e.g a 9 digit number.
              </Text>
            </Box>
            <Box>
              <Text as="strong">Field error</Text>
              <Text>The error must be action oriented e.g. “Enter your Tax code number e.g. 098765432”</Text>
            </Box>
          </Stack>
        </GuideCard>
        <GuideCard variant="negative">
          <Stack space="l">
            <Box>
              <Text as="strong">Component usage</Text>
              <Text>
                Don’t use for the input of multiple lines of text. If using multiple line sof text use a textarea
                component.
              </Text>
            </Box>
            <Box>
              <Text as="strong">Label</Text>
              <Text>
                Don’t use the same label in several parts of the form. Don’t use jargon or abbreviations known only
                internally. Don’t make it too long. they shoul dbe labels and not long descriptions.
              </Text>
            </Box>
            <Box>
              <Text as="strong">Placeholder text</Text>
              <Text> Do not populate placeholder text repeating what the label already achieves to do.</Text>
            </Box>
            <Box>
              <Text as="strong">Field error</Text>
              <Text>Don’t use generic errors e.g “field empty” or “field required”</Text>
            </Box>
          </Stack>
        </GuideCard>
      </Flex>
    </Box>
  )
}

export default UI

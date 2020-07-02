import { Stack } from '@chakra-ui/core'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import createStory from '../../storybook/createStory'
import Input from '.'

createStory(
  'COMPONENTS | Input',
  [
    {
      label: 'standard',
      jsx: () => {
        let errorMessage
        const isDisabled = boolean('Disabled', false)
        const isInvalid = boolean('Invalid', false)
        const isRequired = boolean('Required', false)
        const isFullWidth = boolean('Full width', false)
        const isReadOnly = boolean('Readonly', false)
        const placeholders = []
        if (isDisabled) {
          placeholders.push('Disabled')
        }
        if (isInvalid) {
          placeholders.push('Invalid')
          errorMessage = 'This value is invalid.'
        }
        if (isRequired) {
          placeholders.push('Required')
        }
        if (isFullWidth) {
          placeholders.push('Full width')
        }
        if (isReadOnly) {
          placeholders.push('Readonly')
        }
        return (
          <Stack>
            <Input
              id="amount"
              aria-label="label-amount"
              aria-describedby="label-amount"
              placeholder={(placeholders.length && placeholders.join(' + ')) || 'basic'}
              label="Pot value"
              description="Minimum investment: £5,000.00"
              isDisabled={isDisabled}
              isInvalid={isInvalid}
              isRequired={isRequired}
              isFullWidth={isFullWidth}
              isReadOnly={isReadOnly}
              errorMessage={errorMessage}
              onChange={() => null}
            />
          </Stack>
        )
      },
    },
    {
      label: 'personal details',
      jsx: () => {
        return (
          <Stack>
            <Input
              id="firstname"
              aria-label="label-firstname"
              aria-describedby="label-firstname"
              placeholder="Firstname"
              label="Firstname"
              isRequired
              isFullWidth={false}
              value="Jack"
              onChange={() => null}
            />
            <Input
              id="lastname"
              aria-label="label-lastname"
              aria-describedby="label-lastname"
              placeholder="Lastname"
              label="Lastname"
              isRequired
              isFullWidth={false}
              value="Smith"
              onChange={() => null}
            />
            <Input
              id="nin"
              aria-label="label-nin"
              aria-describedby="label-nin"
              placeholder="NIN"
              label="National Insurance Number"
              description="For example, AA 12 34 56 B"
              isDisabled
              isFullWidth={false}
              value="SR290397D"
              onChange={() => null}
            />
          </Stack>
        )
      },
    },
  ],
  {
    liveEdit: {
      Component: Input,
      render: 'return <Input id="dev" label="Label" description="Description" placeholder="placeholder"/>',
    },
  }
)

import createStory from '@bright/storybook/createStory'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import Select from '.'

createStory('COMPONENTS | Select', [
  {
    label: 'standard',
    jsx: () => {
      const knobsGroups = ['Display', 'Elements']
      const isDisabled = boolean('Disabled', false, knobsGroups[0])
      const isInvalid = boolean('Invalid', false, knobsGroups[0])
      const isRequired = boolean('Required', false, knobsGroups[0])
      const isReadonly = boolean('Readonly', false, knobsGroups[0])
      const withLabel = boolean('With label', true, knobsGroups[1])
      const withDescription = boolean('With description', true, knobsGroups[1])
      const withErrorMessage = boolean('With error message', true, knobsGroups[1])

      return (
        <Select
          id="storybookSelect"
          label={withLabel ? 'Storybook select:' : ''}
          description={withDescription ? 'This is select description' : ''}
          errorMessage={withErrorMessage ? 'This is error message' : ''}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired={isRequired}
          isReadOnly={isReadonly}
        >
          <option value="first">First value</option>
          <option value="second" selected>
            Second value
          </option>
          <option value="third" disabled>
            Third value
          </option>
        </Select>
      )
    },
  },
])

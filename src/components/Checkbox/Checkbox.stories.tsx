import createStory from '@bright/storybook/createStory'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import Checkbox from './Checkbox'

createStory('COMPONENTS | Checkbox', [
  {
    label: 'Checkbox',
    jsx: () => {
      let errorMessage
      let isChecked
      const label = text('Label', 'Annual Management Charge')
      const description = text('Description', 'Charges will be disinvested annually')
      const isDisabled = boolean('Disabled', false)
      const isInvalid = boolean('Invalid', false)
      const isRequired = boolean('Required', false)
      const isReadOnly = boolean('Readonly', false)
      if (isReadOnly) {
        isChecked = boolean('isChecked', false)
      }
      if (isInvalid) {
        errorMessage = text('Error Message', 'You are not eligible for this charge configuration')
      }
      return (
        <Checkbox
          id="regulatory"
          value="regulatory_charge"
          label={label}
          description={description}
          errorMessage={errorMessage}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          isChecked={isChecked}
        />
      )
    },
  },
])

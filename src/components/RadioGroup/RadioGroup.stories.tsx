import createStory from '@bright/storybook/createStory'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import RadioGroup from '.'

createStory('COMPONENTS | RadioGroup', [
  {
    label: 'RadioGroup',
    jsx: () => {
      let errorMessage
      const description = text('Description', 'This is a RadioGroup with three options')
      const isInline = boolean('Inline', false)
      const isRequired = boolean('Required', false)
      const isInvalid = boolean('Invalid', false)
      if (isInvalid) {
        errorMessage = text('Error Message', 'There has been an error')
      }

      return (
        <RadioGroup
          defaultValue="1"
          errorMessage={errorMessage}
          description={description}
          isRequired={isRequired}
          isInline={isInline}
        >
          <RadioGroup.Radio id="1" value="1">
            Value 1
          </RadioGroup.Radio>
          <RadioGroup.Radio id="2" value="2">
            Value 2
          </RadioGroup.Radio>
          <RadioGroup.Radio id="3" value="3">
            Value 3
          </RadioGroup.Radio>
        </RadioGroup>
      )
    },
  },
])

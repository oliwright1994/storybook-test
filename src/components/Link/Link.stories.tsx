import createStory from '@bright/storybook/createStory'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import Link from '.'

createStory('COMPONENTS | Link', [
  {
    label: 'standard',
    jsx: () => {
      const internalLink = '/'
      const externalLink = 'https://www.smart.co/'
      const isDisabled = boolean('Disabled', false)
      const isExternal = boolean('External', false)

      return (
        <Link href={isExternal ? externalLink : internalLink} isDisabled={isDisabled} isExternal={isExternal}>
          {`${isExternal ? 'External' : 'Internal'} ${isDisabled ? 'disabled' : ''} link`}
        </Link>
      )
    },
  },
])

// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryDecorator } from '@storybook/react'
import React from 'react'

import BrightProvider from '../../providers/BrightProvider'
import defaultTheme from '../../theme/default'

export default (): StoryDecorator => (story: () => React.ReactNode): JSX.Element => (
  <BrightProvider theme={defaultTheme}>
    <div style={{ margin: 20 }}>{story()}</div>
  </BrightProvider>
)

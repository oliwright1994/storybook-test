// eslint-disable-next-line import/no-extraneous-dependencies
import BrightProvider from '@bright/providers/BrightProvider'
import defaultTheme from '@bright/theme/default'
import { StoryDecorator } from '@storybook/react'
import React from 'react'

export default (): StoryDecorator => (story: () => React.ReactNode): JSX.Element => (
  <BrightProvider theme={defaultTheme}>
    <div style={{ margin: 20 }}>{story()}</div>
  </BrightProvider>
)

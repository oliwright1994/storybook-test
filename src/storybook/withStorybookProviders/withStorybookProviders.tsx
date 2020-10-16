// eslint-disable-next-line import/no-extraneous-dependencies
import BrightProvider from '@bright/providers/BrightProvider'
import { defaultBrightTheme, darkBrightTheme } from '@bright/theme'
import { StoryDecorator } from '@storybook/react'
import React from 'react'
import { StoryContext, StoryGetter, StoryWrapper, useGlobals } from '@storybook/addons'

export default (): StoryDecorator => (story: () => React.ReactNode): JSX.Element => {
  const [{ theme: themeName }] = useGlobals()
  return (
    <BrightProvider theme={themeName === 'light' ? defaultBrightTheme : darkBrightTheme}>
      <div style={{ margin: 20 }}>{story()}</div>
    </BrightProvider>
  )
}

import { storiesOf } from '@storybook/react'

import withThemeProvider from '@bright/storybook/withStorybookProviders'
import { Story, StoryOptions } from './createStory.d'

export default function createStory(
  name: string,
  stories: Story[],
  { tests = [], readme = '', changes = '' }: StoryOptions = {}
): void {
  const _stories = storiesOf(name, module)
    // @ts-ignore
    .addDecorator(withThemeProvider())

  stories.forEach((story: Story): void => {
    _stories.add(story.label, story.jsx)
  })
}

import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { withLiveEditScope } from 'storybook-addon-react-live-edit';

import withThemeProvider from '../withStorybookProviders';
import { Story, StoryOptions } from './createStory.d';

export default function createStory(
  name: string,
  stories: Story[],
  { tests = [], readme = '', liveEdit = null, changes = '' }: StoryOptions = {}
): void {
  const _stories = storiesOf(name, module)
    // @ts-ignore
    .addDecorator(withThemeProvider());

  if (liveEdit) {
    _stories
    .addDecorator(withLiveEditScope({ React, [liveEdit.Component.displayName]: liveEdit.Component }))
    // @ts-ignore
      .addLiveSource('_dev', liveEdit.render, liveEdit.scope);
  }

  stories.forEach((story: Story): void => {
    _stories.add(story.label, withInfo({ inline: false, header: false })(story.jsx));
  });
}

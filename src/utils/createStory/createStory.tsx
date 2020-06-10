import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withThemeProvider from '../withThemeProvider';
import { Story } from './createStory.d';

export default function createStory(name: string, stories: Story[]): void {
  const _stories = storiesOf(name, module)
    // @ts-ignore
    .addDecorator(withThemeProvider());

  stories.forEach((story: Story): void => {
    _stories.add(story.label, withInfo({ inline: false, header: false })(story.jsx));
  });
}

import { Story, StoryDecorator } from '@storybook/react';

declare module '@storybook/react' {
  export type StoryDecorator = Function;
  export interface Story {
    addLiveSource(storyName: string, source: string, scope?: any): this;
  }
}

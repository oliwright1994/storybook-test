export interface StoryOptions {
  tests?: string[];
  readme?: string;
  /* eslint-disable-next-line */
  liveEdit?: any;
  changes?: string;
}

export interface Story {
  label: string;
  jsx: () => JSX.Element;
}



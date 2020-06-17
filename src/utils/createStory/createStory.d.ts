export interface StoryOptions {
  tests?: string[];
  readme?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  liveEdit?: any;
  changes?: string;
}

export interface Story {
  label: string;
  jsx: () => JSX.Element;
}

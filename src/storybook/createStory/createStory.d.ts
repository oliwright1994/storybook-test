export interface Story {
  label: string
  jsx: () => JSX.Element
}

export interface StoryOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  liveEdit?: { Component: any; render: string } | null
  readme?: string
  tests?: string[]
  changes?: string
}

declare module 'storybook-addon-react-live-edit' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function withLiveEdit(source: string, scope?: any): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function withLiveEditScope(scope: any): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function setOptions(customOptions: $Shape<typeof options>): any
}

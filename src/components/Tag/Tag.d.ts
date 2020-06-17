export type TMessage = 'success' | 'info' | 'warning' | 'danger';

export interface ITag {
  messageType: TMessage;
}

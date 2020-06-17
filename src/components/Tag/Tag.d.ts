import { MessageTypes } from '../../Bright.d';

export type TMessage = 'success' | 'info' | 'warning' | 'danger'

export interface ITag {
  messageType: TMessage
}

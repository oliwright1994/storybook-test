import 'storybook-addon-react-live-edit/dist/register';
import { setAddon } from '@storybook/react';
import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit';

setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);

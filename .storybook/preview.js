import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { setAddon } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit';

addDecorator(withKnobs);
addDecorator(withA11y);
setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);

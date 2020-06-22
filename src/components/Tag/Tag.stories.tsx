import { select } from '@storybook/addon-knobs';
import React from 'react';

import createStory from '../../storybook/createStory';
import Tag from '.';
import { MessageType } from '../../constants';

const options = {
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
};

createStory(
  'COMPONENTS | Tag',
  [
    {
      label: 'success',
      jsx: () => {
        const messageType = select('messageType', options, options.success, 'messageType');
        return <Tag messageType={messageType as MessageType}>{messageType}</Tag>;
      },
    },
  ],
  { liveEdit: { Component: Tag, render: 'return <Tag messageType="info">hi</Tag>' } }
);

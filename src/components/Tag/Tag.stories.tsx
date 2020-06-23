import { select } from '@storybook/addon-knobs';
import React from 'react';

import createStory from '../../storybook/createStory';
import Tag from '.';
import { MessageType } from '../../constants';

createStory(
  'COMPONENTS | Tag',
  [
    {
      label: 'standard',
      jsx: () => {
        const messageType = select('messageType', MessageType, MessageType.success, 'messageType');
        return <Tag messageType={messageType}>{messageType}</Tag>;
      },
    },
  ],
  { liveEdit: { Component: Tag, render: 'return <Tag messageType="info">hi</Tag>' } }
);

import React from 'react';
import { select } from '@storybook/addon-knobs';
import createStory from '../../utils/createStory';
import Tag from '.';

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
        return <Tag messageType={messageType}>{messageType}</Tag>;
      },
    },
  ],
  { liveEdit: { Component: Tag, render: `return <Tag messageType="info">hi</Tag>` } }
);

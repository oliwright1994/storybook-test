import React from 'react';
import createStory from '../../utils/createStory';
import Tag from '.';

createStory('COMPONENTS | Tag', [
  {
    label: 'success',
    jsx: () => <Tag messageType="success">sucess</Tag>,
  },
  {
    label: 'warning',
    jsx: () => <Tag messageType="warning">warning</Tag>,
  },
  {
    label: 'danger',
    jsx: () => <Tag messageType="danger">danger</Tag>,
  },
  {
    label: 'info',
    jsx: () => <Tag messageType="info">info</Tag>,
  },
]);

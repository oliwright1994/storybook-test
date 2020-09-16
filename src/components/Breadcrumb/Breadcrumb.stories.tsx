import createStory from '@bright/storybook/createStory'
import React from 'react'

import Breadcrumb from './Breadcrumb'

createStory('COMPONENTS | Breadcrumb', [
  {
    label: 'Breadcrumb',
    jsx: () => {
      return (
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
          <Breadcrumb.Item href="/contact" isCurrentPage>
            Contact
          </Breadcrumb.Item>
        </Breadcrumb>
      )
    },
  },
])

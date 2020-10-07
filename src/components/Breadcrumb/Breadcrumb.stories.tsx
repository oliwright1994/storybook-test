import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Breadcrumb from './Breadcrumb'

export default { component: Breadcrumb, title: 'Breadcrumb' } as Meta
export const Standard = (): JSX.Element => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/contact" isCurrentPage>
      Contact
    </Breadcrumb.Item>
  </Breadcrumb>
)

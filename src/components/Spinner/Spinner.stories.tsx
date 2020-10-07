import { SpinnerProps } from '@chakra-ui/core'
import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import Spinner from '.'

export default { component: Spinner, title: 'Spinner' } as Meta

export const Standard = (args: SpinnerProps): JSX.Element => <Spinner {...args} />
Standard.args = { size: 'md' }

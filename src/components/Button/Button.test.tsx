import { render } from '@testing-library/react'
import React from 'react'

import BrightProvider from '../../providers/BrightProvider'
import defaultTheme from '../../theme/default'
import Button from '.'
import { ButtonStyleType } from './constants'

describe('<Button />', () => {
  it('should render as expected', () => {
    const { asFragment } = render(
      <BrightProvider theme={defaultTheme}>
        <Button style={ButtonStyleType.primary} onClick={() => {}} />
      </BrightProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

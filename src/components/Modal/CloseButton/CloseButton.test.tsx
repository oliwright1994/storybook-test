import { fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Modal from '../Modal'
import CloseButton from '.'

describe('<CloseButton />', () => {
  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<CloseButton />)

    expect(container).toMatchSnapshot()
  })

  it('should correctly receive aria-label', () => {
    const { getByLabelText } = renderWithBrightTheme(<CloseButton aria-label="Test label" />)

    expect(getByLabelText(/test label/i)).toBeTruthy()
  })

  it('should receive onClose callback passed to parent Modal component', () => {
    const clickHandler = jest.fn()
    const { getByLabelText } = renderWithBrightTheme(
      <Modal onClose={clickHandler} isOpen>
        <CloseButton />
      </Modal>
    )

    const buttonElement = getByLabelText('Close')
    expect(clickHandler).toHaveBeenCalledTimes(0)
    fireEvent.click(buttonElement)
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})

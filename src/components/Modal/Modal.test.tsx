import { act, fireEvent } from '@testing-library/react'
import React from 'react'
import { renderWithBrightTheme } from 'testing/helpers/themeHelper'

import Modal from '.'

describe('<Modal />', () => {
  const defaultText = 'Test Text'

  it('should render as expected', () => {
    const { container } = renderWithBrightTheme(<Modal />)

    expect(container).toMatchSnapshot()
  })

  it('should only be present when isOpen is true', () => {
    let isOpen = false
    const { queryByText, rerender } = renderWithBrightTheme(<Modal isOpen={isOpen}>{defaultText}</Modal>)

    expect(queryByText(defaultText)).toBeNull()

    isOpen = true
    rerender(<Modal isOpen={isOpen}>{defaultText}</Modal>)

    expect(queryByText(defaultText)).toBeTruthy()
  })

  it('should fire onClose handler when closeButton is clicked', () => {
    const onClose = jest.fn()
    const { getByLabelText } = renderWithBrightTheme(
      <Modal isOpen onClose={onClose}>
        <Modal.CloseButton />
        {defaultText}
      </Modal>
    )

    const closeBtn = getByLabelText('Close')
    expect(onClose).toHaveBeenCalledTimes(0)

    act(() => {
      fireEvent.click(closeBtn)
    })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should render namespaced subcomponents correctly', () => {
    const { getAllByText, getByLabelText } = renderWithBrightTheme(
      <Modal isOpen>
        <Modal.CloseButton />
        <Modal.Header>{defaultText}</Modal.Header>
        <Modal.Body>{defaultText}</Modal.Body>
        <Modal.Footer>{defaultText}</Modal.Footer>
      </Modal>
    )

    const closeBtnEl = getByLabelText(/close/i)
    expect(closeBtnEl).toBeTruthy()

    const sectionElements = getAllByText(defaultText)
    expect(sectionElements).toHaveLength(3)
  })

  it('should have proper "aria" attributes', () => {
    const { getByRole, getByText } = renderWithBrightTheme(
      <Modal isOpen>
        <Modal.CloseButton />
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>Modal body</Modal.Body>
        <Modal.Footer>{defaultText}</Modal.Footer>
      </Modal>
    )

    const dialog = getByRole('dialog')

    expect(dialog).toHaveAttribute('aria-modal', 'true')

    expect(getByText(/modal header/i).id).toEqual(dialog.getAttribute('aria-labelledby'))

    expect(getByText(/modal body/i).id).toEqual(dialog.getAttribute('aria-describedby'))
  })
})

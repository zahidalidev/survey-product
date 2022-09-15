import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import TextArea from 'components/TextArea'
import { TestApp } from 'utils/test'

describe('TextArea Component', () => {
  beforeEach(() => act(() => render(<TextArea placeholder='test placeholder' />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have textbox', async () => {
    await waitFor(() => {
      const button = screen.getByRole('textbox')
      expect(button).toBeInTheDocument()
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const button = screen.getByPlaceholderText('test placeholder')
      expect(button).toBeInTheDocument()
    })
  })
})

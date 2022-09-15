import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Input from 'components/Input'
import { TestApp } from 'utils/test'

describe('Input Component', () => {
  beforeEach(() => act(() => render(<Input title='test' type='text' placeholder='test placeholder' />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have textbox', async () => {
    await waitFor(() => {
      const textbox = screen.getByRole('textbox')
      expect(textbox).toBeInTheDocument()
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const heading = screen.getByText('test')
      expect(heading).toBeInTheDocument()
    })
  })
})

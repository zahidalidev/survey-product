import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Button from 'components/Button'
import { TestApp } from 'utils/test'

describe('Button Component', () => {
  beforeEach(() => act(() => render(<Button name='test' />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })
  })

  it('should have button with the name "test"', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'test' })
      expect(button).toBeInTheDocument()
    })
  })
})

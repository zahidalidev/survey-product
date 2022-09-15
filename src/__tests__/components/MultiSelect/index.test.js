import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import MultiSelect from 'components/MultiSelect'
import { TestApp } from 'utils/test'

describe('MultiSelect Component', () => {
  beforeEach(() => act(() => render(<MultiSelect />, { wrapper: TestApp })))

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

  it('should have heading', async () => {
    await waitFor(() => {
      const button = screen.getByText('Select product(s)')
      expect(button).toBeInTheDocument()
    })
  })
})

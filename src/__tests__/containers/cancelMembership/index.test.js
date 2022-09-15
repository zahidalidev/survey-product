import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import CancelMembership from 'containers/cancelMembership'
import { TestApp } from 'utils/test'

describe('CancelMembership Page', () => {
  beforeEach(() => act(() => render(<CancelMembership />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 2 buttons', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(2)
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const heading = screen.getByText('Before You Go...')
      expect(heading).toBeInTheDocument()
    })
  })

  it('should have image', async () => {
    await waitFor(() => {
      const img = screen.getByRole('img')
      expect(img).toBeInTheDocument()
    })
  })
})

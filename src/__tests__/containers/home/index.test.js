import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import Home from 'containers/home'
import { TestApp } from 'utils/test'

describe('Home Page', () => {
  beforeEach(() => act(() => render(<Home />, { wrapper: TestApp })))

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
})

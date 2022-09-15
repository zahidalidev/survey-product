import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import SingleSelect from 'components/SingleSelect'
import { TestApp } from 'utils/test'

describe('SingleSelect Component', () => {
  beforeEach(() => act(() => render(<SingleSelect />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have select tag', async () => {
    await waitFor(() => {
      const button = screen.getByTestId('single-select')
      expect(button).toBeInTheDocument()
    })
  })
})

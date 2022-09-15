import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import CancellationSurvey from 'containers/cancellationSurvey'
import { TestApp } from 'utils/test'

describe('CancellationSurvey Page', () => {
  beforeEach(() => act(() => render(<CancellationSurvey />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 6 buttons', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(3)
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const heading = screen.getByText('Cancellation Survey')
      expect(heading).toBeInTheDocument()
    })
  })
})

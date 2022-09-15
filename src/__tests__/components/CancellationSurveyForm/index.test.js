import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import answers from 'utils/constants/cancellationSurvey'
import CancellationSurveyForm from 'components/CancellationSurveyForm'
import { TestApp } from 'utils/test'

describe('CancellationSurveyForm Component', () => {
  beforeEach(() =>
    act(() => render(<CancellationSurveyForm answers={answers} selectedAnswer='Other' />, { wrapper: TestApp })),
  )

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have radio buttons', async () => {
    await waitFor(() => {
      const radioButton = screen.getAllByRole('radio')
      expect(radioButton).toHaveLength(7)
    })
  })
})

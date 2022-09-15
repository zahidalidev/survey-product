import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import BugsForm from 'components/BugsForm'
import { TestApp } from 'utils/test'

describe('BugsForm Component', () => {
  beforeEach(() => act(() => render(<BugsForm />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have form', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('bugs-form')).toBeInTheDocument()
    })
  })

  it('should have multi-select', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('multi-select')).toBeInTheDocument()
    })
  })

  it('should have 3 buttons', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(3)
    })
  })

  it('should have "One Major Problem" button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'One Major Problem' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have "Various things" button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Various things' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have textbox', async () => {
    await waitFor(() => {
      const textbox = screen.getAllByRole('textbox')
      expect(textbox).toHaveLength(1)
    })
  })
})

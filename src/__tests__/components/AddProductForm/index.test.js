import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import AddProductForm from 'components/AddProductForm'
import { TestApp } from 'utils/test'

describe('AddProductForm Component', () => {
  beforeEach(() => act(() => render(<AddProductForm />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 3 buttons', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(3)
    })
  })

  it('should have recurring button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Recurring' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have "One time" button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'One time' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have "Add Another Plan" button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Add Another Plan' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have textbox', async () => {
    await waitFor(() => {
      const textbox = screen.getByRole('textbox')
      expect(textbox).toBeInTheDocument()
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const textbox = screen.getAllByText('Billing Type')[0]
      expect(textbox).toBeInTheDocument()
    })
  })

  it('should have form', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('product-form')).toBeInTheDocument()
    })
  })
})

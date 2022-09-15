import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import AddProduct from 'containers/addProduct'
import { TestApp } from 'utils/test'

describe('AddProduct Page', () => {
  beforeEach(() => act(() => render(<AddProduct />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have 6 buttons', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(6)
    })
  })

  it('should have plan card', async () => {
    await waitFor(() => {
      const card = screen.getByTestId('plan-card')
      expect(card).toBeInTheDocument()
    })
  })

  it('should have plan card', async () => {
    await waitFor(() => {
      const textbox = screen.getAllByRole('textbox')
      expect(textbox).toHaveLength(3)
    })
  })

  it('should have upload-image component', async () => {
    await waitFor(() => {
      const imageComponent = screen.getByTestId('upload-image')
      expect(imageComponent).toBeInTheDocument()
    })
  })

  it('should have product form', async () => {
    await waitFor(() => {
      const form = screen.getByTestId('product-form')
      expect(form).toBeInTheDocument()
    })
  })
})

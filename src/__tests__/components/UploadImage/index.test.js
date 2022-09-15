import {
  render, screen, waitFor, act,
} from '@testing-library/react'

import { TestApp } from 'utils/test'
import testImage from 'assets/discount-tag.svg'
import UploadImage from 'components/UploadImage'


describe('UploadImage Component', () => {
  beforeEach(() => act(() => render(<UploadImage title='test title' placeholder='test placeholder' image={testImage} />, { wrapper: TestApp })))

  it('should render correctly', () => {
    expect.assertions(1)
    expect(screen).toMatchSnapshot()
  })

  it('should have button', async () => {
    await waitFor(() => {
      const button = screen.getAllByRole('button')
      expect(button).toHaveLength(3)
    })
  })

  it('should have button with name "Remove" button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Remove' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have button with name "Edit" button', async () => {
    await waitFor(() => {
      const button = screen.getByRole('button', { name: 'Edit' })
      expect(button).toBeInTheDocument()
    })
  })

  it('should have heading', async () => {
    await waitFor(() => {
      const textbox = screen.getByText('test title')
      expect(textbox).toBeInTheDocument()
    })
  })

  it('should have input with placeholder', async () => {
    await waitFor(() => {
      const textbox = screen.getByPlaceholderText('test placeholder')
      expect(textbox).toBeInTheDocument()
    })
  })
})

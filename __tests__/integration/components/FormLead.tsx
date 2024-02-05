import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormLead from '@/components/FormLead'

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  }
})

const mockSetFormData = jest.fn()
const mockSetFormError = jest.fn()

jest.mock('@/store/form-lead', () => ({
  useFormLeadStore: jest.fn(() => ({
    formData: null,
    formError: null,
    setFormData: mockSetFormData,
    setFormError: mockSetFormError,
  })),
}))

describe('<FormLead />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the form lead component', () => {
    render(<FormLead />)
    expect(screen.getByTestId('form-lead')).toBeInTheDocument()
  })

  it.skip('submits the form with valid input', async () => {
    render(<FormLead />)

    userEvent.type(screen.getByPlaceholderText('Seu nome'), 'Jane Doe')
    userEvent.type(
      screen.getByPlaceholderText('(00) 00000-0000'),
      '(12) 34567-8901'
    )
    userEvent.type(
      screen.getByPlaceholderText('nome@email.com'),
      'jane.doe@example.com'
    )

    fireEvent.submit(screen.getByTestId('form-lead'))

    await screen.findByRole('button')

    expect(mockSetFormData).toHaveBeenCalledWith({
      name: 'Jane Doe',
      phone: '(12) 34567-8901',
      email: 'jane.doe@example.com',
    })
  })
})

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormLead from '@/components/FormLead'

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}))

const mockSetFormData = jest.fn()
const mockSetFormError = jest.fn()

describe('<FormLead />', () => {
  const FormLeadHandler = jest.fn()

  beforeEach(() => {
    render(<FormLead />)
    FormLeadHandler.mockClear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the form lead component', () => {
    expect(screen.getByTestId('form-lead')).toBeInTheDocument()
  })

  it('should display matching error when email is invalid', async () => {
    const emailInput = screen.getByPlaceholderText('nome@email.com')
    fireEvent.input(emailInput, { target: { value: 'test' } })

    const nameInput = screen.getByPlaceholderText('Seu nome')
    fireEvent.input(nameInput, { target: { value: 'name' } })

    const phoneInput = screen.getByPlaceholderText('(00) 00000-0000')
    fireEvent.input(phoneInput, { target: { value: '(12) 34567-8901' } })

    const loginButton = screen.getByTestId('submit-form-lead')
    fireEvent.submit(loginButton)

    const emaiLErrorMessage = 'E-mail inválido.'
    const spanErrorElements = await screen.findAllByRole('alert')
    expect(spanErrorElements).toHaveLength(1)
    expect(spanErrorElements[0]).toHaveTextContent(emaiLErrorMessage)

    expect(emailInput).toHaveValue('test')
    expect(nameInput).toHaveValue('name')
    expect(phoneInput).toHaveValue('(12) 34567-8901')

    await waitFor(() => expect(FormLeadHandler).not.toHaveBeenCalledTimes(1))
  })

  it('should display matching error when phone is invalid', async () => {
    const phoneInput = screen.getByPlaceholderText('(00) 00000-0000')
    fireEvent.input(phoneInput, { target: { value: '122' } })

    const emailInput = screen.getByPlaceholderText('nome@email.com')
    fireEvent.input(emailInput, { target: { value: 'test@example.com' } })

    const nameInput = screen.getByPlaceholderText('Seu nome')
    fireEvent.input(nameInput, { target: { value: 'name' } })

    const loginButton = screen.getByTestId('submit-form-lead')
    fireEvent.submit(loginButton)

    const phoneErrorMessage = 'Telefone deve ter pelo menos 10 caracteres.'
    const spanErrorElements = await screen.findAllByRole('alert')
    expect(spanErrorElements).toHaveLength(1)
    expect(spanErrorElements[0]).toHaveTextContent(phoneErrorMessage)

    expect(emailInput).toHaveValue('test@example.com')
    expect(nameInput).toHaveValue('name')
    expect(phoneInput).toHaveValue('(12) 2')

    await waitFor(() => expect(FormLeadHandler).not.toHaveBeenCalledTimes(1))
  })

  it('should display matching error when name is invalid', async () => {
    const nameInput = screen.getByPlaceholderText('Seu nome')
    fireEvent.input(nameInput, { target: { value: 'n' } })

    const emailInput = screen.getByPlaceholderText('nome@email.com')
    fireEvent.input(emailInput, { target: { value: 'test@example.com' } })

    const phoneInput = screen.getByPlaceholderText('(00) 00000-0000')
    fireEvent.input(phoneInput, { target: { value: '(12) 34567-8901' } })

    const loginButton = screen.getByTestId('submit-form-lead')
    fireEvent.submit(loginButton)

    const nameErrorMessage = 'Nome deve ter pelo menos 2 caracteres.'
    const spanErrorElements = await screen.findAllByRole('alert')
    expect(spanErrorElements).toHaveLength(1)
    expect(spanErrorElements[0]).toHaveTextContent(nameErrorMessage)

    expect(emailInput).toHaveValue('test@example.com')
    expect(nameInput).toHaveValue('n')
    expect(phoneInput).toHaveValue('(12) 34567-8901')

    await waitFor(() => expect(FormLeadHandler).not.toHaveBeenCalledTimes(1))
  })

  it('submits the form with valid input', async () => {
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
  })
})

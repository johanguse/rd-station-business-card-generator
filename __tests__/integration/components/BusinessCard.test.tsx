import { formDataMock } from '@/__mocks__/form-data'
import { render, screen } from '@testing-library/react'

import BusinessCard from '@/components/BusinessCard'

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
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

jest.mock('@/store/form-lead', () => {
  return {
    useFormLeadStore: jest.fn().mockReturnValue({
      formData: formDataMock,
      setFormData: jest.fn(),
      setFormError: jest.fn(),
    }),
  }
})

describe.skip('BusinessCard', () => {
  beforeEach(() => {
    render(<BusinessCard />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders message and link when there is no URL data', () => {
    expect(
      screen.getByText('Preencha seus dados na primeira pagina')
    ).toBeInTheDocument()
    expect(screen.getByText('Ir para primeira pagina')).toBeInTheDocument()
  })

  it('renders message and link when there is URL data', () => {
    expect(screen.getByText(formDataMock.name)).toBeInTheDocument()
    expect(screen.getByText(formDataMock.email)).toBeInTheDocument()
    expect(screen.getByText(formDataMock.phone)).toBeInTheDocument()
  })

  it('renders message and link when there is URL data', () => {
    expect(screen.getByText('Test Name')).toBeInTheDocument()
    expect(screen.getByText('1234567890')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })
})

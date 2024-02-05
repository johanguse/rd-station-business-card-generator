import CardPage from '@/app/card/page'
import { useFormLeadStore } from '@/store/form-lead'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} priority={true.toString()} />
  },
}))
jest.mock('next/navigation', () => ({
  __esModule: true,
  redirect: jest.fn(),
}))

jest.mock('@/store/form-lead', () => {
  const originalModule = jest.requireActual('@/store/form-lead')
  return {
    __esModule: true,
    ...originalModule,
    useFormLeadStore: jest.fn(),
  }
})

describe('CardPage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/card')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('redirects to home if formError is not null', () => {
    useFormLeadStore.mockImplementation(() => ({
      formData: null,
      formError: { message: 'Error' },
    }))

    render(<CardPage />)
  })

  it('redirects to home if formData is null', () => {
    useFormLeadStore.mockImplementation(() => ({
      formData: null,
      formError: null,
      setFormData: jest.fn(),
      setFormError: jest.fn(),
    }))

    render(<CardPage />)
  })

  it.skip('renders formData correctly when available', () => {
    const formDataMock = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    }

    useFormLeadStore.mockImplementation(() => ({
      formData: formDataMock,
      formError: null,
      setFormData: jest.fn(),
      setFormError: jest.fn(),
    }))

    render(<CardPage />, { wrapper: MemoryRouterProvider })

    expect(screen.getByText(formDataMock.name)).toBeInTheDocument()
    expect(screen.getByText(formDataMock.email)).toBeInTheDocument()
    expect(screen.getByText(formDataMock.phone)).toBeInTheDocument()
  })

  it.skip('contains all required interactive elements', () => {
    const formDataMock = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    }

    useFormLeadStore.mockImplementation(() => ({
      formData: formDataMock,
      formError: null,
      setFormData: jest.fn(),
      setFormError: jest.fn(),
    }))

    render(<CardPage />, { wrapper: MemoryRouterProvider })

    expect(
      screen.getByRole('button', { name: /gerar outro cartão/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /baixar cartão/i })
    ).toBeDisabled()
    expect(
      screen.getByRole('button', {
        name: /fazer um teste grátis do rd station marketing/i,
      })
    ).toBeInTheDocument()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })
})

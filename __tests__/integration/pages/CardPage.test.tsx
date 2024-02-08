import CardPage from '@/app/card/page'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'))

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

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt="mocked image" priority="true" />
  },
}))

jest.mock('@/store/form-lead', () => {
  return {
    useFormLeadStore: jest.fn().mockReturnValue({
      formData: {
        name: 'Test Name',
        email: 'test@example.com',
        phone: '1234567890',
      },
      setFormData: jest.fn(),
      setFormError: jest.fn(),
    }),
  }
})

describe('CardPage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/card')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the card page', () => {
    render(<CardPage />)
    expect(screen.getByAltText('mocked image')).toBeInTheDocument()
  })
})

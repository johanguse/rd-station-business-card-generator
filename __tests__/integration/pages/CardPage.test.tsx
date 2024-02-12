import CardPage from '@/app/card/page'
import { render } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt="mocked image" priority="true" />
  },
}))

describe('CardPage', () => {
  beforeEach(() => {
    mockRouter.query = {
      name: 'mocked',
      email: 'mocked',
      phone: 'mocked',
    }
    mockRouter.push('/card?name=mocked&email=mocked&phone=mocked')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the card page', () => {
    expect(mockRouter).toMatchObject({
      pathname: '/card',
      query: {
        name: 'mocked',
        email: 'mocked',
        phone: 'mocked',
      },
    })

    expect(mockRouter.asPath).toBe(
      '/card?name=mocked&email=mocked&phone=mocked'
    )

    expect(mockRouter.query).toMatchObject({
      name: 'mocked',
      email: 'mocked',
      phone: 'mocked',
    })

    const validSearchParams: CreateFormLeadData = {
      name: Array.isArray(mockRouter.query.name)
        ? mockRouter.query.name[0]
        : mockRouter.query.name || '',
      phone: Array.isArray(mockRouter.query.phone)
        ? mockRouter.query.phone[0]
        : mockRouter.query.phone || '',
      email: Array.isArray(mockRouter.query.email)
        ? mockRouter.query.email[0]
        : mockRouter.query.email || '',
    }
    render(<CardPage searchParams={validSearchParams} />)
  })
})

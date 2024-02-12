import { formDataMock } from '@/__mocks__/form-data'
import { render, screen } from '@testing-library/react'

import BusinessCard from '@/components/BusinessCard'

describe('BusinessCard', () => {
  beforeEach(() => {
    render(
      <BusinessCard
        searchParams={{
          name: formDataMock.name,
          phone: formDataMock.phone,
          email: formDataMock.email,
        }}
      />
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders message and link when there is no URL data', () => {
    render(<BusinessCard searchParams={{ name: '', phone: '', email: '' }} />)

    expect(
      screen.getByText('Preencha seus dados na primeira pagina')
    ).toBeInTheDocument()
    expect(screen.getByText('Ir para primeira pagina')).toBeInTheDocument()
  })

  it('renders the name, email and phone', () => {
    expect(screen.getByText(formDataMock.name)).toBeInTheDocument()
    expect(screen.getByText(formDataMock.email)).toBeInTheDocument()
    expect(screen.getByText(formDataMock.phone)).toBeInTheDocument()
  })
})

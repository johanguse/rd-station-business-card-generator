import NotFoundPage from '@/app/not-found'
import { render, screen } from '@testing-library/react'

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => {
    return children
  }
})

describe('NotFoundPage', () => {
  it('renders the error message', () => {
    render(<NotFoundPage />)

    const errorCode = screen.getByText('404')
    const title = screen.getByText('Página não encontrada')
    const description = screen.getByText(
      'Desculpe, a página que tentou acessar não foi encontrada.'
    )

    expect(errorCode).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders the link to home', () => {
    render(<NotFoundPage />)

    const homeLink = screen.getByText('Ir para Home')

    expect(homeLink).toBeInTheDocument()
  })
})

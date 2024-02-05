import HomePage from '@/app/page'
import { render, screen } from '@testing-library/react'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
  redirect: jest.fn(),
}))

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => 'img',
}))

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { name: /Gerador de Cartão de Visita/i })
    ).toBeInTheDocument()
  })

  it('renders the introduction text', () => {
    render(<HomePage />)
    expect(
      screen.getByText(
        /Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais./i
      )
    ).toBeInTheDocument()
  })

  it('includes the FormLead component', () => {
    render(<HomePage />)
    expect(screen.getByTestId('form-lead')).toBeInTheDocument()
  })
})

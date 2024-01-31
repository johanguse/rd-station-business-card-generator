import { render, screen } from '@testing-library/react'

import Home from '/src/app/page'

describe('Home Page', () => {
  it('renders the home page with all components', () => {
    render(<Home />)

    expect(screen.getByText('Gerador de Cartão de Visita')).toBeInTheDocument()
    expect(
      screen.getByText('Crie grátis seu cartão de visita em passos rápidos!')
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Telefone')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()

    expect(screen.getByText('GERAR CARTÃO GRÁTIS')).toBeInTheDocument()

    expect(screen.getByText('© 2023 Resultados Digitais')).toBeInTheDocument()
    expect(screen.getByText('Política de Privacidade')).toHaveAttribute(
      'href',
      'https://legal.rdstation.com/pt/privacy-policy/'
    )
  })
})

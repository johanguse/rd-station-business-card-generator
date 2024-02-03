import { render, screen } from '@testing-library/react'

import Header from '@/components/Header'

describe('Header', () => {
  it('renders the header component with a logo and title text', () => {
    render(<Header />)
    expect(screen.getByText('Gerador de Cartão de Visita')).toBeInTheDocument()
    expect(screen.getByAltText('Logo RD Station')).toBeInTheDocument()
  })
})

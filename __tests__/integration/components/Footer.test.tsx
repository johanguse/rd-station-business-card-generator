import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders correctly and contains the privacy policy link and copyright text', () => {
    render(<Footer />)

    const privacyLink = screen.getByText('Política de Privacidade')
    expect(privacyLink).toBeInTheDocument()
    expect(privacyLink).toHaveAttribute(
      'href',
      'https://legal.rdstation.com/pt/privacy-policy/'
    )

    const copyrightText = screen.getByText('© 2023 Resultados Digitais')
    expect(copyrightText).toBeInTheDocument()
  })
})

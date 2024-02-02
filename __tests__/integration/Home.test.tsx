import { render } from '@testing-library/react'

import Home from '/src/app/page'

// Assuming the Home component is in pages/index.tsx

describe('Home', () => {
  it('renders the home component without crashing', () => {
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })

  it('renders the correct heading and paragraph', () => {
    const { getByText } = render(<Home />)

    // Check for heading text
    const heading = getByText('Gerador de Cartão de Visita')
    expect(heading).toBeInTheDocument()

    // Check for paragraph text
    const paragraph = getByText(
      /Crie grátis seu cartão de visita em passos rápidos!/i
    )
    expect(paragraph).toBeInTheDocument()
  })

  it('renders the image with correct attributes', () => {
    const { getByAltText } = render(<Home />)

    const image = getByAltText(
      'A cheerful illustrator in headphones paints a geometric pattern on a wall with a roller brush, set against a dynamic background of yellow and purple shapes.'
    )
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/assets/images/board-painting.svg')
    expect(image).toHaveAttribute('width', '268')
    expect(image).toHaveAttribute('height', '198')
  })

  it('renders the FormLead component', () => {
    const { getByTestId } = render(<Home />)

    // Assuming FormLead has a test id set to 'form-lead'
    const formLeadComponent = getByTestId('form-lead')
    expect(formLeadComponent).toBeInTheDocument()
  })
})

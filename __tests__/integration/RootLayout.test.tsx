import { render } from '@testing-library/react'

import RootLayout from '/src/app/layout'

jest.mock('../../src/components/Header', () => {
  const MockHeader = () => <header data-testid="header">Mocked Header</header>
  MockHeader.displayName = 'MockHeader'
  return MockHeader
})

jest.mock('../../src/components/Footer', () => {
  const MockFooter = () => <footer data-testid="footer">Mocked Footer</footer>
  MockFooter.displayName = 'MockFooter'
  return MockFooter
})

describe('RootLayout', () => {
  let container: HTMLElement

  beforeEach(() => {
    ;({ container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    ))
  })

  it('renders without crashing', () => {
    expect(container).toBeInTheDocument()
  })

  it('includes the header', () => {
    const headerElement = container.querySelector('[data-testid="header"]')
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('Mocked Header')
  })

  it('renders children content', () => {
    expect(container).toHaveTextContent('Test Content')
  })

  it('includes the footer', () => {
    const footerElement = container.querySelector('[data-testid="footer"]')
    expect(footerElement).toBeInTheDocument()
    expect(footerElement).toHaveTextContent('Mocked Footer')
  })
})

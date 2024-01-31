import { render } from '@testing-library/react'

import RootLayout from '/src/app/layout'

jest.mock('next/font/google', () => ({
  Inter: jest.fn(() => ({ className: 'inter-font-class' })),
}))

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    )

    expect(getByText('Test Child')).toBeInTheDocument()
  })

  it('applies the Inter font class to body', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    )

    expect(container.querySelector('body')).toHaveClass('inter-font-class')
  })
})

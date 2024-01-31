import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Button from '@/components/Button'

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button text="Click me" />)
    expect(getByText(/Click me/i)).toBeInTheDocument()
  })
})

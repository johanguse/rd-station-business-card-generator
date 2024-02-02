import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '@/components/Button'

// Adjust the import path to where your Button component is located

describe('Button Component', () => {
  // Test default button rendering
  it('renders a default button', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole('button', { name: 'Default Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-secondary text-foreground')
  })

  // Test primary button rendering
  it('renders a primary button', () => {
    render(<Button variant="primary">Primary Button</Button>)
    const button = screen.getByRole('button', { name: 'Primary Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-blue-500 text-white')
  })

  // Test secondary button rendering
  it('renders a secondary button', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button', { name: 'Secondary Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-white text-black')
  })

  // Test link button rendering
  it('renders a link button', () => {
    render(
      <Button href="https://example.com" variant="link">
        Link Button
      </Button>
    )
    const button = screen.getByText('Link Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-transparent text-blue-500 underline')
  })

  // Verify that custom icon is rendered if passed
  it('renders with a custom icon when provided', () => {
    const CustomIcon = () => <span data-testid="custom-icon"></span>
    render(<Button customIcon={<CustomIcon />}>Button with Custom Icon</Button>)
    const icon = screen.getByTestId('custom-icon')
    expect(icon).toBeInTheDocument()
  })

  // Checking if clicking the button calls the event handler
  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByRole('button', { name: 'Clickable Button' })
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // Ensure correct icon placement on left
  it('places the icon on the left when iconPosition is set to "left"', () => {
    render(
      <Button variant="primary" iconPosition="left">
        Primary Button with Left Icon
      </Button>
    )
    const button = screen.getByRole('button', {
      name: 'Primary Button with Left Icon',
    })
    const iconWrapper = button.firstChild
    expect(iconWrapper).toHaveClass('mr-2')
  })

  // Ensure correct icon placement on right
  it('places the icon on the right when iconPosition is set to "right"', () => {
    render(
      <Button variant="primary" iconPosition="right">
        Primary Button with Right Icon
      </Button>
    )
    const button = screen.getByRole('button', {
      name: 'Primary Button with Right Icon',
    })
    const iconWrapper = button.lastChild
    expect(iconWrapper).toHaveClass('ml-2')
  })
})

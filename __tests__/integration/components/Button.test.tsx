import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '@/components/Button'

describe('Button Component', () => {
  it('renders a default button', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole('button', { name: 'Default Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'after:clip-path relative bg-secondary text-foreground hover:bg-secondary-highlight font-Nunito_Sans px-2 py-4 inline-flex items-center w-full justify-center border-2 border-black disabled:border-gray-medium text-center text-xl font-semibold uppercase transition-colors duration-200 ease-in-out after:absolute after:top-[calc(100%_+_2px)] after:left-[calc(0%_-_2px)] after:w-[calc(100%_+_4px)] after:h-0 after:border-t-[5px] after:border-l-[10px] after:border-r-[10px] after:border-black after:disabled:border-gray-medium after:border-l-transparent after:disabled:border-l-transparent after:border-r-transparent after:disabled:border-r-transparent after:content-[""] after:clip-path after:box-border'
    )
  })

  it('renders a primary button', () => {
    render(<Button variant="primary">Primary Button</Button>)
    const button = screen.getByRole('button', { name: 'Primary Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'after:clip-path relative bg-secondary text-foreground hover:bg-secondary-highlight font-Nunito_Sans px-2 py-4 inline-flex items-center w-full justify-center border-2 border-black disabled:border-gray-medium text-center text-xl font-semibold uppercase transition-colors duration-200 ease-in-out after:absolute after:top-[calc(100%_+_2px)] after:left-[calc(0%_-_2px)] after:w-[calc(100%_+_4px)] after:h-0 after:border-t-[5px] after:border-l-[10px] after:border-r-[10px] after:border-black after:disabled:border-gray-medium after:border-l-transparent after:disabled:border-l-transparent after:border-r-transparent after:disabled:border-r-transparent after:content-[""] after:clip-path after:box-border'
    )
  })

  it('renders a secondary button', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button', { name: 'Secondary Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'after:clip-path relative bg-white hover:bg-grayLight-light font-Nunito_Sans px-2 py-4 inline-flex items-center w-full justify-center border-2 border-black disabled:border-gray-medium text-center text-xl font-semibold uppercase transition-colors duration-200 ease-in-out after:absolute after:top-[calc(100%_+_2px)] after:left-[calc(0%_-_2px)] after:w-[calc(100%_+_4px)] after:h-0 after:border-t-[5px] after:border-l-[10px] after:border-r-[10px] after:border-black after:disabled:border-gray-medium after:border-l-transparent after:disabled:border-l-transparent after:border-r-transparent after:disabled:border-r-transparent after:content-[""] after:clip-path after:box-border'
    )
  })

  it('renders a link button correctly', () => {
    render(
      <Button href="https://example.com" variant="link">
        Link Button
      </Button>
    )
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    )
    expect(screen.getByRole('link')).toHaveClass(
      'bg-transparent text-white text-center no-underline inline-flex w-full items-center justify-center hover:underline'
    )
  })

  it('renders a link button with disabled state', () => {
    render(
      <Button variant="primary" disabled>
        Primary Button
      </Button>
    )
    const button = screen.getByRole('button', {
      name: 'Primary Button',
    })
    expect(button).toHaveClass(
      'after:clip-path relative font-Nunito_Sans px-2 py-4 inline-flex items-center w-full justify-center border-2 border-black disabled:border-gray-medium text-center text-xl font-semibold uppercase transition-colors duration-200 ease-in-out after:absolute after:top-[calc(100%_+_2px)] after:left-[calc(0%_-_2px)] after:w-[calc(100%_+_4px)] after:h-0 after:border-t-[5px] after:border-l-[10px] after:border-r-[10px] after:border-black after:disabled:border-gray-medium after:border-l-transparent after:disabled:border-l-transparent after:border-r-transparent after:disabled:border-r-transparent after:content-[""] after:clip-path after:box-border cursor-not-allowed bg-grayLight-medium hover:bg-grayLight-medium text-gray-medium'
    )
  })

  it('renders with a custom icon when provided', () => {
    const CustomIcon = () => <span data-testid="custom-icon"></span>
    render(<Button customIcon={<CustomIcon />}>Button with Custom Icon</Button>)
    const icon = screen.getByTestId('custom-icon')
    expect(icon).toBeInTheDocument()
  })

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
    expect(iconWrapper).toHaveClass('mr-1')
  })

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
    expect(iconWrapper).toHaveClass('ml-1')
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByRole('button', { name: 'Clickable Button' })
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

import ErrorPage from '@/app/error'
import { fireEvent, render, screen } from '@testing-library/react'

describe('ErrorPage Component', () => {
  const mockReset = jest.fn()
  const errorWithDigest = {
    name: 'TestError',
    message: 'Something went wrong',
    digest: '12345',
  }

  const errorWithoutDigest = {
    name: 'TestError',
    message: 'Something went wrong',
  }

  beforeEach(() => {
    mockReset.mockClear()
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays the error message and calls console.error with the error', () => {
    render(<ErrorPage error={errorWithDigest} reset={mockReset} />)

    expect(screen.getByText('Algo não deu certo...')).toBeInTheDocument()
    expect(console.error).toHaveBeenCalledWith(errorWithDigest)
  })

  it('renders the digest if provided', () => {
    render(<ErrorPage error={errorWithDigest} reset={mockReset} />)

    expect(
      screen.getByText(`Digest: ${errorWithDigest.digest}`)
    ).toBeInTheDocument()
  })

  it('does not render the digest if not provided', () => {
    render(<ErrorPage error={errorWithoutDigest} reset={mockReset} />)

    const digestElement = screen.queryByText(/Digest:/)
    expect(digestElement).toBeNull()
  })

  it('calls the reset function when the retry button is clicked', () => {
    render(<ErrorPage error={errorWithDigest} reset={mockReset} />)

    const retryButton = screen.getByText('Tentar novamente')
    fireEvent.click(retryButton)

    expect(mockReset).toHaveBeenCalledTimes(1)
  })

  it('contains a link to the home page', () => {
    render(<ErrorPage error={errorWithDigest} reset={mockReset} />)

    const homeLink = screen.getByText('Ir para Home').closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
  })
})

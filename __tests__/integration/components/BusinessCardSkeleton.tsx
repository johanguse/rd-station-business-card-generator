import { render, screen } from '@testing-library/react'

import BusinessCardSkeleton from '@/components/BusinessCardSkeleton'

describe('BusinessCardSkeleton', () => {
  test('it renders without crashing', () => {
    render(<BusinessCardSkeleton />)
    expect(screen.getByTestId('business-card-skeleton')).toBeInTheDocument()
  })

  test('it contains the rdIcon', () => {
    render(<BusinessCardSkeleton />)
    expect(screen.getByTestId('rd-icon')).toBeInTheDocument()
  })

  test('it displays three Skeleton components', () => {
    render(<BusinessCardSkeleton />)
    const skeletons = screen.getAllByTestId('skeleton')
    expect(skeletons).toHaveLength(3)
  })
})

import { render } from '@testing-library/react'

import FormField from '@/components/FormField'

describe('FormField Component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <FormField
        id="test-field"
        name="test"
        label="Test Label"
        type="text"
        placeholder="Test"
        required={true}
      />
    )

    const input = getByLabelText('Test Label')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toBeRequired()
  })
})

import { render, screen } from '@testing-library/react'
import { FormProvider, useForm } from 'react-hook-form'

import InputField from '@/components/InputField'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    resolver: async (data) => ({ values: data, errors: {} }),
  })
  return <FormProvider {...methods}>{children}</FormProvider>
}

describe('InputField', () => {
  const registerMock = jest.fn().mockReturnValue({
    onChange: jest.fn(),
    onBlur: jest.fn(),
    name: '',
    ref: jest.fn(),
  })

  it('renders without crashing', () => {
    render(
      <Wrapper>
        <InputField
          label="First Name"
          name="name"
          errors={{}}
          register={registerMock}
        />
      </Wrapper>
    )
    expect(screen.getByLabelText(/First Name\*/i)).toBeInTheDocument()
  })

  it('displays error message when there is an error', () => {
    const errorMessage = 'This field is required'
    render(
      <Wrapper>
        <InputField
          label="Email Address"
          name="email"
          errors={{
            email: {
              type: 'required',
              message: errorMessage,
            },
          }}
          register={registerMock}
        />
      </Wrapper>
    )

    expect(screen.getByRole('alert')).toHaveTextContent(errorMessage)
  })

  it('applies the error styling when there is an error', () => {
    const errorMessage = 'Invalid format'
    render(
      <Wrapper>
        <InputField
          label="Phone Number"
          name="phone"
          errors={{
            phone: {
              type: 'pattern',
              message: errorMessage,
            },
          }}
          register={registerMock}
        />
      </Wrapper>
    )

    expect(screen.getByLabelText(/Phone Number\*/i)).toHaveClass(
      'border-rose-500'
    )
  })

  it('calls register function with field name on component mount', () => {
    render(
      <Wrapper>
        <InputField
          label="Name"
          name="name"
          errors={{}}
          register={registerMock}
        />
      </Wrapper>
    )

    expect(registerMock).toHaveBeenCalled()
  })
})

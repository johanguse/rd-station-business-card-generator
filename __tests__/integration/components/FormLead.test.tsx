import { fireEvent, render, screen } from '@testing-library/react'

import FormLead from '@/components/FormLead'

jest.spyOn(console, 'log')

const validData = {
  name: 'Johny Bee Goodman',
  phone: '(11) 12345-6789',
  email: 'john@example.com',
}

describe('FormLead', () => {
  it('should display required error when value is invalid', async () => {
    render(<FormLead onSubmit={() => {}} />)
    fireEvent.submit(
      screen.getByRole('button', { name: /gerar cartão grátis/i })
    )

    expect(await screen.findAllByRole('alert')).toHaveLength(3)
    expect(console.log).not.toHaveBeenCalled()
  })
  /*
  it('should call onSubmit with the correct values', async () => {
    const onSubmitSpy = jest.fn()
    const user = userEvent.setup()

    render(<FormLead onSubmit={onSubmitSpy} />)

    // Using getByPlaceholderText since the inputs are distinguished by placeholders
    await user.type(screen.getByPlaceholderText(/seu nome/i), validData.name)
    await user.type(
      screen.getByPlaceholderText(/\(00\) 00000-0000/i),
      validData.phone
    )
    await user.type(
      screen.getByPlaceholderText(/nome@email.com/i),
      validData.email
    )

    // Using getByText for the button as it has text content
    await user.click(screen.getByText(/gerar cartão grátis/i))

    expect(onSubmitSpy).toHaveBeenCalledWith({
      name: validData.name,
      phone: validData.phone,
      email: validData.email,
    })
  })*/
})

afterAll(() => {
  jest.restoreAllMocks()
})

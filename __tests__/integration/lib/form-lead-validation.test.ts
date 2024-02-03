import { formDataMock } from '@/__mocks__/form-data'

import { FormLeadSchema } from '@/lib/form-lead-validation'

describe('FormLeadSchema', () => {
  it('should validate correct data', () => {
    const result = FormLeadSchema.safeParse(formDataMock)

    expect(result.success).toBe(true)
  })

  it('should require a name with at least 2 characters', () => {
    const result = FormLeadSchema.safeParse({
      name: 'J',
      phone: '1234567890',
      email: 'john@example.com',
    })

    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Nome deve ter pelo menos 2 caracteres.'
      )
    }
  })

  it('should require a phone number with at least 10 characters', () => {
    const result = FormLeadSchema.safeParse(formDataMock)

    if (!result.success) {
      expect(result.error.issues[0].message).toBe(
        'Telefone deve ter pelo menos 10 caracteres.'
      )
    }
  })

  it('should not allow a phone number with more than 14 characters', () => {
    const result = FormLeadSchema.safeParse({
      name: 'John Doe',
      phone: '123456789012345',
      email: 'john@example.com',
    })

    expect(result.success).toBe(false)
  })

  it('should require a valid email', () => {
    const result = FormLeadSchema.safeParse({
      name: 'John Doe',
      phone: '1234567890',
      email: 'not-an-email',
    })

    if (!result.success) {
      expect(result.error.issues[0].message).toBe('E-mail inválido.')
    }
  })
})

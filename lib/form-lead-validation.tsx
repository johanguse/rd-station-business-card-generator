import { z } from 'zod'

export const FormLeadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres.'),
  phone: z
    .string()
    .min(10, 'Telefone deve ter pelo menos 10 caracteres.')
    .max(14),
  email: z
    .string()
    .min(2, 'E-mail deve ter pelo menos 2 caracteres.')
    .email('E-mail inválido.'),
})

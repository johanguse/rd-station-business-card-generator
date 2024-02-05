import { act } from 'react-dom/test-utils'
import { z } from 'zod'
import { create } from 'zustand'

import { FormLeadSchema } from '@/lib/form-lead-validation'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

interface FormError {
  message: string
}

interface FormLeadStore {
  formData: CreateFormLeadData | null
  formError: FormError | null
  setFormData: (data: CreateFormLeadData) => void
  setFormError: (error: FormError | null) => void
}

const createMockStore = () => {
  let store: FormLeadStore = {
    formData: null,
    formError: null,
    setFormData: (data: CreateFormLeadData) =>
      act(() => {
        store.formData = data
      }),
    setFormError: (error: FormError | null) =>
      act(() => {
        store.formError = error
      }),
  }

  return create<FormLeadStore>(() => store)
}

export const useFormLeadStore = createMockStore()

'use client'

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

export const useFormLeadStore = create<FormLeadStore>((set) => ({
  formData: null,
  formError: null,
  setFormData: (data) => set({ formData: data }),
  setFormError: (error) => set({ formError: error }),
}))

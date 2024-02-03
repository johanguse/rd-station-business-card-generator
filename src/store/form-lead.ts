'use client'

import { z } from 'zod'
import { create } from 'zustand'

import { FormLeadSchema } from '@/lib/form-lead-validation'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

interface FormLeadStore {
  formData: CreateFormLeadData | null
  setFormData: (data: CreateFormLeadData) => void
}

export const useFormLeadStore = create<FormLeadStore>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
}))

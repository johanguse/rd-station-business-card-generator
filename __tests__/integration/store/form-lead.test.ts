import { formDataMock, formDataMockEmpty } from '@/__mocks__/form-data'
import { useFormLeadStore } from '@/store/form-lead'
import { act } from 'react-dom/test-utils'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

describe('useFormLeadStore', () => {
  it('initializes with formData as null', () => {
    const store = useFormLeadStore.getState()
    expect(store.formData).toBeNull()
  })

  it('updates formData correctly', () => {
    act(() => {
      useFormLeadStore.getState().setFormData(formDataMock)
    })

    const store = useFormLeadStore.getState()
    expect(store.formData).toEqual(formDataMock)
  })

  it('resets formData to null', () => {
    act(() => {
      useFormLeadStore.getState().setFormData(formDataMockEmpty)
    })

    const store = useFormLeadStore.getState()
    expect(store.formData).toEqual(expect.objectContaining(formDataMockEmpty))
  })
})

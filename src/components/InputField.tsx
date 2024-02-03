import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

type InputFieldProps = {
  label: string
  name: keyof CreateFormLeadData
  errors: FieldErrors<CreateFormLeadData>
  register: UseFormRegister<CreateFormLeadData>
  placeholder?: string
  inputType?: string
}

export default function InputField({
  label,
  name,
  errors,
  register,
  placeholder,
  inputType = 'text',
}: InputFieldProps) {
  const errorClass = errors[name] ? 'border-rose-500' : ''
  const errorMessage = errors[name]?.message

  return (
    <div className="col-span-2 md:col-span-1">
      <label htmlFor={name} className="mb-2 block text-white">
        {label}*
      </label>
      <input
        type={inputType}
        id={name}
        {...register(name)}
        className={`w-full appearance-none rounded border px-3 py-2 leading-tight text-grayLight-placeholder focus:outline-none ${errorClass}`}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className="text-base-xs text-rose-300" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

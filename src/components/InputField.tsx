import { FieldErrors, UseFormRegister } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: keyof CreateFormLeadData
  errors: FieldErrors<CreateFormLeadData>
  mask?: string
  register: UseFormRegister<CreateFormLeadData>
}

function beforeMaskedStateChange({ nextState }: any) {
  let { value } = nextState

  return {
    ...nextState,
    value: value
      .replace(/\D/g, '')
      .replace(/^(\d{2})\B/, '($1) ')
      .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3'),
  }
}

export default function InputField({
  label,
  name,
  errors,
  mask,
  register,
  ...InputFieldProps
}: InputFieldProps) {
  const inputClass =
    'w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-text'
  const errorClass = errors[name] ? 'border-rose-500' : ''
  const errorMessage = errors[name]?.message

  const inputField = mask ? (
    <InputMask
      {...register(name)}
      mask={mask}
      className={`${inputClass} ${errorClass}`}
      {...InputFieldProps}
      maskPlaceholder={null}
      beforeMaskedStateChange={beforeMaskedStateChange}
    />
  ) : (
    <input
      id={name}
      {...register(name)}
      className={`${inputClass} ${errorClass}`}
      {...InputFieldProps}
    />
  )

  return (
    <div className="col-span-2 md:col-span-1">
      <label htmlFor={name} className="mb-2 block text-white">
        {label}*
      </label>
      {inputField}
      {errorMessage && (
        <span className="text-xs text-rose-300" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

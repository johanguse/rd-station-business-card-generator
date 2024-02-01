interface FormFieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  name: string
  errors: any
}

export default function FormField({
  id,
  label,
  type,
  placeholder,
  name,
  errors,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-white">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  )
}

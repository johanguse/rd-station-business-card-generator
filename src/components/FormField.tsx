interface FormFieldProps {
  id: string
  label: string
  type: string
  placeholder: string
  required: boolean
  name: string
}

export default function FormField({
  id,
  label,
  type,
  placeholder,
  required,
  name,
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
        required={required}
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
      />
    </div>
  )
}

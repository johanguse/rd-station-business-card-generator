interface ButtonProps {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button
      type="submit"
      className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
    >
      {text}
    </button>
  )
}

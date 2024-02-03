import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main>
      <div className="mx-auto flex min-h-80 max-w-screen-xl flex-col items-center justify-start px-4 md:px-8">
        <h1 className="my-8 text-3xl">404</h1>
        <p className="mb-2 text-xl font-semibold">Página não encontrada</p>
        <p className="mb-8">
          Desculpe, a página que tentou acessar não foi encontrada.
        </p>
        <Link href="/" className="underline">
          Ir para Home
        </Link>
      </div>
    </main>
  )
}

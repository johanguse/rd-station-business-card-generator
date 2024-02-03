'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { Button } from '@/components/Button'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-80 max-w-screen-xl flex-col items-center justify-start px-4 md:px-8">
      <h1 className="my-8 text-3xl">Algo não deu certo...</h1>
      <Button onClick={() => reset()} className="mb-8 w-fit">
        Tentar novamente
      </Button>
      <Link href="/" className="underline">
        Ir para Home
      </Link>
      {error.digest && (
        <p className="mt-10 text-xs text-gray-500">Digest: {error.digest}</p>
      )}
    </div>
  )
}

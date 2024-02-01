'use client'

import { useEffect } from 'react'

import Link from 'next/link'

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
    <div className="flex flex-col items-center justify-center py-24">
      <h1 className="my-8 text-3xl">Algo não deu certo...</h1>
      <Link href="/">Ir para Home</Link>
      {error.digest && (
        <p className="mt-10 text-xs text-gray-500">Digest: {error.digest}</p>
      )}
    </div>
  )
}

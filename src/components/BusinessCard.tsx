import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'

export default function BusinessCard({
  searchParams,
}: {
  searchParams: {
    name: string
    phone: string
    email: string
  }
}) {
  if (!searchParams.name || !searchParams.phone || !searchParams.email) {
    return (
      <div className="mb-0 rounded-3xl bg-white px-0 py-20 shadow-md">
        <p className="mb-6 text-center">
          Preencha seus dados na primeira pagina
        </p>
        <Button variant="link" href="/">
          Ir para primeira pagina
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-3xl bg-white px-0 py-8 shadow-md md:px-6">
      <div className="flex flex-row px-2 xs:px-6 md:px-8">
        <div className="self-center">
          <Icons.rdIcon className="w-16" />
        </div>
        <div className="mx-4 flex w-1 bg-primary-superLight md:mx-6">
          &nbsp;
        </div>
        <div className="grid grid-rows-1 gap-6 py-4 pl-2 text-sm text-black sm:text-xl-sm">
          <p>{searchParams.name}</p>
          <p>{searchParams.phone}</p>
          <p>{searchParams.email}</p>
        </div>
      </div>
    </div>
  )
}

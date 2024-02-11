'use client'

import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

export default function BusinessCard({
  name,
  phone,
  email,
}: CreateFormLeadData) {
  if (!name || !phone || !email) {
    return (
      <div className="mb-6 rounded-3xl bg-white px-0 py-20 shadow-md">
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
          <p>{name}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

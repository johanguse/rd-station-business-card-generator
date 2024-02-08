'use client'

import { useSearchParams } from 'next/navigation'

import { useFormLeadStore } from '@/store/form-lead'

import { Button } from './Button'
import { Icons } from './Icons'

export default function BusinessCard() {
  const formData = useFormLeadStore((state) => state.formData)
  const urlData = useSearchParams()
  if (!urlData) {
    return (
      <div className="mb-6 rounded-3xl bg-white px-0 py-8 shadow-md md:px-6">
        <p>Preencha seus dados na primeira pagina</p>
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
          <p>{formData?.name || urlData.get('name')}</p>
          <p>{formData?.phone || urlData.get('phone')}</p>
          <p>{formData?.email || urlData.get('email')}</p>
        </div>
      </div>
    </div>
  )
}

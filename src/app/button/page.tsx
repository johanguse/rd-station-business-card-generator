'use client'

import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'

export default function ResultPage() {
  return (
    <main className="flex items-center bg-white bg-gradient-main px-4">
      <div className="container mx-auto space-y-6 py-6">
        <div className="my-20">
          <Button type="submit">GERAR CARTÃO GRÁTIS</Button>
          <Button
            type="submit"
            className="mt-20"
            variant={'primary'}
            iconPosition="right"
          >
            GERAR CARTÃO GRÁTIS
          </Button>
          <Button className="mt-20" variant={'secondary'} disabled>
            GERAR CARTÃO GRÁTIS (secondary)
          </Button>
          <Button
            type="submit"
            className="mt-20"
            variant={'secondary'}
            iconClassName="w-5 bg-transparent"
            iconPosition="right"
            customIcon={<Icons.arrowLeftLong />}
          >
            GERAR CARTÃO GRÁTIS
          </Button>
          <Button
            variant={'link'}
            href="https://app.rdstation.com.br/signup"
            target="_blank"
            iconPosition="right"
            customIcon={<Icons.arrowLeftLong className="text-white" />}
            className="mx-auto mt-20 flex w-full text-balance font-extrabold uppercase text-white"
          >
            Fazer um teste grátis do Rd Station Marketing
          </Button>
          <Button
            type="submit"
            className="mt-20"
            variant={'link'}
            href="https://app.rdstation.com.br/signup"
            target="_blank"
          >
            Voltar
          </Button>
          <Button
            type="submit"
            className="mt-20"
            variant={'link'}
            href="/"
            iconPosition="right"
            iconClassName="h-6 w-5 bg-transparent"
            customIcon={<CheckIcon size={20} />}
          >
            Voltar a home page
          </Button>
        </div>
      </div>
    </main>
  )
}

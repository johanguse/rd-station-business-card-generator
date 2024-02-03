'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useFormLeadStore } from '@/store/form-lead'
import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'

export default function ResultPage() {
  const router = useRouter()
  const formData = useFormLeadStore((state) => state.formData)
  if (!formData) {
    router.push('/')
    return (
      <div className="mx-auto py-20 text-center">
        <Button variant={'link'} href="/">
          Gerar cartão
        </Button>
        <p>Preencha seus dados na home page</p>
      </div>
    )
  }

  return (
    <main className="flex items-center bg-gradient-main px-4">
      <div className="container mx-auto space-y-20 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
          <Image
            priority
            src="/assets/images/board-painting.svg"
            alt="A cheerful illustrator in headphones paints a geometric pattern on a wall with a roller brush, set against a dynamic background of yellow and purple shapes."
            width={268}
            height={198}
            className="mx-auto w-[470px] md:ml-0"
          />
          <div>
            <Button variant={'link'} href="/" className="w-fit justify-start">
              Gerar outro cartão
            </Button>
            <div className="rounded bg-white">
              <div className="flex flex-row p-10">
                <div className="self-center">
                  <Icons.rdIcon className="w-20" />
                </div>
                <div className="mx-10 flex w-1 bg-primary-light">&nbsp;</div>
                <div className="grid grid-rows-1 gap-3 px-6 py-4">
                  <p>{formData.name}</p>
                  <p>{formData.phone}</p>
                  <p>{formData.email}</p>
                </div>
              </div>
            </div>
            <Button variant={'secondary'}>Baixar cartão</Button>
            <Button
              variant={'link'}
              href="/"
              iconPosition="right"
              customIcon={<ChevronRight />}
              className="mx-auto flex w-fit bg-white"
            >
              Fazer um teste grátis do Rd Station Marketing
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

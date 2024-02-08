'use client'

import Image from 'next/image'

import BusinessCard from '@/components/BusinessCard'
import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'

export default function CardPage() {
  return (
    <main className="flex grow items-start bg-gradient-main px-4 lg:items-center">
      <div className="container mx-auto space-y-20 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-20 lg:grid-cols-2">
          <Image
            priority
            src="/assets/images/board-painting.svg"
            alt="A cheerful illustrator in headphones paints a geometric pattern on a wall with a roller brush, set against a dynamic background of yellow and purple shapes."
            width={268}
            height={198}
            className="mx-auto hidden w-[470px] md:ml-0 lg:block"
          />
          <div className="grid grid-rows-1 gap-4">
            <Button
              variant={'link'}
              href="/"
              className="w-fit justify-start text-sm text-white sm:text-lg"
            >
              Gerar outro cartão
            </Button>
            <BusinessCard />
            <Button id="download-card-button" variant={'secondary'} disabled>
              Baixar cartão
            </Button>
            <Button
              id="test-rd-link"
              variant={'link'}
              href="https://app.rdstation.com.br/signup"
              target="_blank"
              iconPosition="right"
              customIcon={<Icons.arrowLeftLong className="ml-2 text-white" />}
              className="mx-auto mt-4 flex w-fit text-balance font-extrabold uppercase text-white"
            >
              <span className="w-56 sm:w-full sm:text-base">
                Fazer um teste grátis do RD Station Marketing
              </span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

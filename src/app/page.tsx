import Image from 'next/image'

import FormLead from '@/components/FormLead'

export default function Home() {
  return (
    <main className="flex items-center bg-gradient-main px-4">
      <div className="container mx-auto space-y-10 py-20">
        <div className="text-white">
          <h1 className="mb-6 text-center text-4xl font-black">
            Gerador de Cartão de Visita
          </h1>
          <p className="mx-auto w-full text-balance text-center text-xl-sm md:max-w-xl md:text-wrap">
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no
            Instagram e demais canais digitais.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Image
            priority
            src="/assets/images/board-painting.svg"
            alt="A cheerful illustrator in headphones paints a geometric pattern on a wall with a roller brush, set against a dynamic background of yellow and purple shapes."
            width={268}
            height={198}
            className="mx-auto w-[470px] md:ml-0"
          />
          <FormLead onSubmit={() => {}} />
        </div>
      </div>
    </main>
  )
}

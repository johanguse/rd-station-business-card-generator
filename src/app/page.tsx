import Image from 'next/image'

import { siteConfig } from '@/config/site'

import Button from '@/components/Button'
import Footer from '@/components/Footer'
import FormField from '@/components/FormField'
import Header from '@/components/Header'

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <main>
      <Header />

      <main className="flex items-center bg-gradient-main">
        <div className="container mx-auto space-y-10">
          <div className="text-white">
            <h1 className="mt-10 text-center">Gerador de Cartão de Visita</h1>
            <p className="text-center">
              Crie grátis seu cartão de visita em passos rápidos! Você o insere
              no Instagram e demais canais digitais.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <Image
              priority
              src="/assets/images/board-painting.svg"
              alt="A cheerful illustrator in headphones paints a geometric pattern on a wall with a roller brush, set against a dynamic background of yellow and purple shapes."
              width={268}
              height={198}
              className="mx-auto"
            />
            <form className="mb-4 w-full p-4">
              <FormField
                id="name"
                name="name"
                label="Nome"
                type="text"
                placeholder="nome@email.com"
                required={true}
              />
              <FormField
                id="phone"
                name="phone"
                label="Telefone"
                type="tel"
                placeholder="(00) 0 0000-0000"
                required={true}
              />
              <FormField
                id="email"
                name="email"
                label="E-mail"
                type="email"
                placeholder="nome@email.com"
                required={true}
              />
              <div className="my-8">
                <ul className="list-disc px-8">
                  <li>
                    Ao preencher o formulário, concordo * em receber
                    comunicações de acordo com meus interesses.
                  </li>
                  <li>
                    Ao informar meus dados, eu concordo com a Política de
                    privacidade.
                  </li>
                </ul>
                <p>
                  * Você pode alterar suas permissões de comunicação a qualquer
                  tempo.
                </p>
              </div>
              <Button text="GERAR CARTÃO GRÁTIS" />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </main>
  )
}

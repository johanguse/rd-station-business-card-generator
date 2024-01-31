import FormField from '@/components//FormField'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="p-24">
      <header className="bg-primary-light p-6 text-center text-white">
        <h1>Gerador de Cartão de Visita</h1>
        <p className="text-sm">
          Crie grátis seu cartão de visita em passos rápidos!
        </p>
      </header>

      <main className="flex h-screen items-center justify-center">
        <form className="mb-4 w-full max-w-lg rounded-lg bg-white px-8 pb-8 pt-6 shadow-md">
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
          <Button text="GERAR CARTÃO GRÁTIS" />
        </form>
      </main>

      <footer className="bg-primary-light p-4 text-center text-white">
        <p>© 2023 Resultados Digitais</p>
        <a
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          className="underline"
        >
          Política de Privacidade
        </a>
      </footer>
    </main>
  )
}

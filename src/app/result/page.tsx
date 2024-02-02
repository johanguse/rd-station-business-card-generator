import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/Button'

export default function ResultPage() {
  return (
    <main className="flex items-center bg-gradient-main px-4">
      <div className="container mx-auto space-y-10 py-20">
        <div className="my-20">
          <Button type="submit">GERAR CARTÃO GRÁTIS</Button>
          <Button
            type="submit"
            className="mt-4"
            variant={'primary'}
            iconPosition="right"
          >
            GERAR CARTÃO GRÁTIS
          </Button>
          <Button type="submit" className="mt-4" variant={'secondary'}>
            GERAR CARTÃO GRÁTIS
          </Button>
          <Button
            type="submit"
            className="mt-4"
            variant={'link'}
            href="https://app.rdstation.com.br/signup"
            target="_blank"
          >
            GERAR CARTÃO GRÁTIS
          </Button>
          <Button
            type="submit"
            className="mt-4"
            variant={'link'}
            href="/"
            iconPosition="right"
            customIcon={<CheckIcon size={20} />}
          >
            GERAR CARTÃO GRÁTIS
          </Button>
        </div>
      </div>
    </main>
  )
}

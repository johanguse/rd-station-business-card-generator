'use client'

import { useFormLeadStore } from '@/store/form-lead'
import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/Button'

export default function ResultPage() {
  const formData = useFormLeadStore((state) => state.formData)
  if (!formData) {
    return <div>No data available</div>
  }
  return (
    <main className="flex items-center bg-gradient-main px-4">
      <div className="container mx-auto space-y-10 py-20">
        <div className="my-20">
          <div>
            <h2>Form Data:</h2>
            <p>Name: {formData.name}</p>
            <p>Phone: {formData.phone}</p>
            <p>Email: {formData.email}</p>
          </div>
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

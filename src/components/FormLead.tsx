'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

import { Button } from '@/components/Button'
import InputField from '@/components/InputField'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

export default function FormLead() {
  const router = useRouter()
  const [formError, setFormError] = useState<FormError | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormLeadData>({
    resolver: zodResolver(FormLeadSchema),
  })

  const onSubmit = async (data: CreateFormLeadData) => {
    try {
      console.log('Form data submitted:', data)
      const dataURL = new URLSearchParams(data).toString()
      router.push(`/card?${dataURL}`)
    } catch (error) {
      if (error instanceof Error) {
        setFormError({ message: error.message })
      }
    }
  }

  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}
      data-testid="form-lead"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        {formError && (
          <p className="col-span-2 border-rose-500">
            Error: {formError.message}
          </p>
        )}
        <div className="col-span-2">
          <InputField
            label="Nome"
            name="name"
            type="text"
            errors={errors}
            register={register}
            placeholder="Seu nome"
          />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <InputField
            label="Telefone"
            name="phone"
            type="tel"
            errors={errors}
            register={register}
            placeholder="(00) 00000-0000"
            mask="(99) 99999-9999"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <InputField
            label="E-mail"
            name="email"
            type="email"
            errors={errors}
            register={register}
            placeholder="nome@email.com"
          />
        </div>
        <div className="col-span-2 my-3 text-xs text-white">
          <ul className="mb-4 list-disc px-5">
            <li>
              Ao preencher o formulário, concordo * em receber comunicações de
              acordo com meus interesses.
            </li>
            <li>
              Ao informar meus dados, eu concordo com a{' '}
              <a
                href="https://legal.rdstation.com/pt/privacy-policy/"
                target="_blank"
                className="underline"
              >
                Política de Privacidade
              </a>
              .
            </li>
          </ul>
          <p>
            * Você pode alterar suas permissões de comunicação a qualquer tempo.
          </p>
        </div>
        <div className="col-span-2">
          <Button
            data-testid="submit-form-lead"
            id="submit-form-lead"
            type="submit"
            className="mt-4"
            variant={'primary'}
            iconPosition="right"
          >
            Gerar cartão grátis
          </Button>
        </div>
      </div>
    </form>
  )
}

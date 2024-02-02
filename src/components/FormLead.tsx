'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

import { Button } from '@/components/Button'

import InputField from './InputField'

type CreateFormLeadData = z.infer<typeof FormLeadSchema>

export default function FormLead() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormLeadData>({
    resolver: zodResolver(FormLeadSchema),
  })

  const onSubmit = (data: CreateFormLeadData) => {
    console.log(data)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        <div className="col-span-2">
          <InputField
            label="Nome"
            name="name"
            errors={errors}
            register={register}
            placeholder="Seu nome"
          />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <InputField
            label="Telefone"
            name="phone"
            errors={errors}
            register={register}
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <InputField
            label="E-mail"
            name="email"
            errors={errors}
            register={register}
            placeholder="nome@email.com"
          />
        </div>
        <div className="col-span-2 my-3 text-base-xs text-white">
          <ul className="mb-4 list-disc px-5">
            <li>
              Ao preencher o formulário, concordo * em receber comunicações de
              acordo com meus interesses.
            </li>
            <li>
              Ao informar meus dados, eu concordo com a Política de privacidade.
            </li>
          </ul>
          <p>
            * Você pode alterar suas permissões de comunicação a qualquer tempo.
          </p>
        </div>
        <div className="col-span-2">
          <Button
            type="submit"
            className="mt-4"
            variant={'primary'}
            iconPosition="right"
          >
            GERAR CARTÃO GRÁTIS
          </Button>
        </div>
      </div>
    </form>
  )
}

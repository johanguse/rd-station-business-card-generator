'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

import { Button } from './Button'
import { Icons } from './Icons'

type createFormLeadData = z.infer<typeof FormLeadSchema>

export default function FormLead() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createFormLeadData>({
    resolver: zodResolver(FormLeadSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-white"
          >
            Nome
          </label>
          <input
            {...register('name')}
            className="text-grayLight-placeholder w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
            placeholder="Seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-bold text-white"
          >
            Telefone
          </label>
          <input
            {...register('phone')}
            className="text-grayLight-placeholder w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none"
            placeholder="(00) 00000-0000"
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-white"
          >
            E-mail
          </label>
          <input
            {...register('email')}
            className="text-grayLight-placeholder w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none"
            placeholder="nome@email.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="text-base-xs col-span-2 my-4 text-white">
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
            Icon={Icons.arrowLeftLong}
            loading={false}
            iconPlacement="right"
            className="w-full"
          >
            GERAR CARTÃO GRÁTIS
          </Button>
        </div>
      </div>
    </form>
  )
}

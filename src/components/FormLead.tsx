'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { FormLeadSchema } from '@/lib/form-lead-validation'

import { Button } from '@/components/Button'

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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
        <div className="col-span-2">
          <label htmlFor="name" className="mb-2 block text-white">
            Nome*
          </label>
          <input
            {...register('name')}
            className={`w-full appearance-none rounded border px-3 py-2 leading-tight text-grayLight-placeholder focus:outline-none ${errors.name ? 'border-rose-500' : ''}`}
            placeholder="Seu nome"
          />
          {errors.name && (
            <span className="text-base-xs text-rose-300">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="col-span-2 lg:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-white">
            Telefone*
          </label>
          <input
            {...register('phone')}
            className={`w-full appearance-none rounded border px-3 py-2 leading-tight text-grayLight-placeholder focus:outline-none ${errors.phone ? 'border-rose-500' : ''}`}
            placeholder="(00) 00000-0000"
          />
          {errors.phone && (
            <span className="text-base-xs text-rose-300">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label htmlFor="email" className="mb-2 block text-white">
            E-mail*
          </label>
          <input
            {...register('email')}
            className={`w-full appearance-none rounded border px-3 py-2 leading-tight text-grayLight-placeholder focus:outline-none ${errors.email ? 'border-rose-500' : ''}`}
            placeholder="nome@email.com"
          />
          {errors.email && (
            <span className="text-base-xs text-rose-300">
              {errors.email.message}
            </span>
          )}
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

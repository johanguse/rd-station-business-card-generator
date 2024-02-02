'use client'

import * as React from 'react'

import Link, { LinkProps } from 'next/link'

import { type VariantProps, cva } from 'class-variance-authority'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Icons } from '@/components/Icons'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'link'

const buttonClass =
  ' font-Nunito_Sans px-6 py-4 inline-flex items-center justify-center border-2 border-black text-center text-xl font-semibold uppercase transition-colors duration-200 ease-in-out after:absolute after:content-[""] after:top-[100%] after:w-full after:box-border after:h-0 after:border-t-4 after:border-black'

const buttonVariants = cva('relative ', {
  variants: {
    variant: {
      default: 'bg-secondary text-foreground' + buttonClass,
      primary: 'bg-blue-500 text-white' + buttonClass,
      secondary: 'bg-white text-black' + buttonClass,
      link: 'bg-transparent text-blue-500 underline',
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  target?: React.HTMLAttributeAnchorTarget
  iconPosition?: 'left' | 'right'
  customIcon?: React.ReactNode
}

const getIconComponent = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return <Icons.arrowLeftLong />
    case 'secondary':
      return <Icons.arrowDownload />
    case 'link':
      return <ChevronLeft />
    default:
      return null
  }
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      asChild = false,
      children,
      href,
      target,
      iconPosition = 'left',
      customIcon,
      ...props
    },
    ref
  ) => {
    const effectiveVariant: ButtonVariant = variant || 'default'
    const IconComponent = customIcon || getIconComponent(effectiveVariant)

    const content = (
      <>
        {iconPosition === 'left' && IconComponent && (
          <span className="mr-2">{IconComponent}</span>
        )}
        {children}
        {iconPosition === 'right' && IconComponent && (
          <span className="ml-2">{IconComponent}</span>
        )}
      </>
    )

    if (href && variant === 'link') {
      return (
        <Link
          {...{ href, target }}
          {...(props as LinkProps)}
          className={cn(
            buttonVariants({ variant: effectiveVariant }),
            className,
            'inline-flex w-full items-center justify-center'
          )}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        className={cn(
          buttonVariants({ variant: effectiveVariant }),
          className,
          'inline-flex w-full items-center justify-center'
        )}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }

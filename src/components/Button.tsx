import * as React from 'react'

import Link, { LinkProps } from 'next/link'

import { type VariantProps, cva } from 'class-variance-authority'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Icons } from '@/components/Icons'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'link'

const buttonClass =
  ' font-Nunito_Sans px-2 py-4 inline-flex items-center w-full justify-center border-2 border-black disabled:border-gray-medium text-center text-xl font-semibold uppercase transition-colors duration-200 ease-in-out'

const disabledButton =
  'cursor-not-allowed bg-grayLight-medium hover:bg-grayLight-medium text-gray-medium'

const afterButtonClass =
  ' after:absolute after:top-[calc(100%_+_2px)] after:left-0 after:left-[calc(0%_-_2px)] after:w-full after:w-[calc(100%_+_4px)] after:h-0 after:border-t-[5px] after:border-l-[10px] after:border-r-[10px] after:border-black after:disabled:border-gray-medium after:border-l-transparent after:disabled:border-l-transparent after:border-r-transparent after:disabled:border-r-transparent after:content-[""] after:clip-path after:box-border'

const buttonVariants = cva('relative ', {
  variants: {
    variant: {
      default:
        'bg-secondary text-foreground hover:bg-secondary-highlight' +
        buttonClass +
        afterButtonClass,
      primary:
        'bg-secondary text-foreground hover:bg-secondary-highlight' +
        buttonClass +
        afterButtonClass,
      secondary:
        'bg-white hover:bg-grayLight-light' + buttonClass + afterButtonClass,
      link: 'bg-transparent text-white text-center no-underline inline-flex w-full items-center justify-center hover:underline',
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
  iconClassName?: string
}

const getIconComponent = (variant: ButtonVariant, iconClassName?: string) => {
  switch (variant) {
    case 'primary':
      return (
        <Icons.arrowLeftLong className={cn(iconClassName, 'ml-2 size-4')} />
      )
    case 'secondary':
      return (
        <Icons.arrowDownload
          className={cn(iconClassName, 'h-7 w-6 text-gray-medium')}
        />
      )
    case 'link':
      return <ChevronLeft className={cn(iconClassName, 'size-4')} />
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
      iconClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const effectiveVariant: ButtonVariant = variant || 'default'
    const IconComponent =
      customIcon || getIconComponent(effectiveVariant, iconClassName)

    const content = (
      <>
        {iconPosition === 'left' && IconComponent && (
          <span className="mr-1">{IconComponent}</span>
        )}
        {children}
        {iconPosition === 'right' && IconComponent && (
          <span className="ml-1">{IconComponent}</span>
        )}
      </>
    )

    const buttonClasses = cn(
      buttonVariants({ variant: effectiveVariant }),
      className,
      disabled ? disabledButton : ''
    )

    if (href && variant === 'link') {
      return (
        <Link
          {...{ href, target }}
          {...(props as LinkProps)}
          className={cn(
            buttonVariants({ variant: effectiveVariant }),
            buttonClasses
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
          buttonClasses
        )}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }

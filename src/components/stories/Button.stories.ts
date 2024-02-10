import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { icons } from 'lucide-react'

import { Button } from '@/components/Button'

const commonArgs = {
  children: 'Button',
}

const meta: Meta<typeof Button> = {
  title: 'Brand/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'link'] },
    href: { control: 'text' },
    iconPosition: { control: 'select', options: ['left', 'right'] },
    iconClassName: { control: 'text' },
    disabled: { control: 'boolean' },
    customIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: Object.keys(icons).map((key) => key),
      },
    },
  },
  args: { onClick: fn() },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...commonArgs,
    children: 'Button Default',
  },
}

export const Primary: Story = {
  args: {
    ...commonArgs,
    variant: 'primary',
    iconPosition: 'right',
  },
}

export const Secondary: Story = {
  args: {
    ...commonArgs,
    variant: 'secondary',
    disabled: true,
  },
}

export const Link: Story = {
  args: {
    ...commonArgs,
    variant: 'link',
    href: 'https://storybook.js.org',
  },
}

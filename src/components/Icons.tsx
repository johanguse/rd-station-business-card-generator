'use client'

import { LucideIcon, LucideProps } from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  arrowLeftLong: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      focusable="false"
      width="17"
      height="9"
      viewBox="0 0 17 9"
      {...props}
    >
      <path
        fill="#100C27"
        d="m12.385.143 3.974 4.013a.49.49 0 0 1 0 .688l-3.974 4.013a.48.48 0 0 1-.822-.344V5.635H.982A.484.484 0 0 1 .5 5.148V3.852c0-.269.216-.487.482-.487h10.581V.487a.48.48 0 0 1 .822-.344Z"
      />
    </svg>
  ),
  arrowDownload: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      focusable="false"
      width="15"
      height="25"
      viewBox="0 0 24 25"
      {...props}
    >
      <path fill="#97A1AC" d="m12 20.5-5-5v-1h3v-10h4v10h3v1l-5 5Z" />
    </svg>
  ),
}

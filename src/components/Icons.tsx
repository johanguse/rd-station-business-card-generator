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
  rdIcon: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 150 128"
      {...props}
    >
      <g clip-path="url(#a)">
        <path
          fill="#806EFF"
          d="m111.571 48.026-34.66 55.935L88.691 128l34.66-55.935-11.78-24.039ZM34.66 0 0 55.934l11.78 24.04 34.66-55.935L34.66 0ZM84.921 48.026l14.87-23.987-9.53-19.378L88.012 0 58.22 48.026l-34.66 55.935L35.34 128 70 72.066l-3.874-7.961-7.906-16.079H84.92Z"
        />
        <path
          fill="#000"
          d="m150 72.065-11.78-24.039h-26.649l11.78 24.04L88.691 128h26.649L150 72.065ZM73.09 24.04 61.31 0H34.66l11.78 24.04-34.66 55.934h26.65l34.66-55.935Z"
        />
        <path
          fill="#000"
          d="m96.702 72.066 29.738-48.027L114.66 0H88.01l11.78 24.04-14.869 23.986H58.22L70 72.066 35.34 128h26.702L91.78 79.974l4.922-7.909Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h150v128H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
}

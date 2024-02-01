'use client'

import { LucideIcon, LucideProps } from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  arrowLeftLong: ({ ...props }: LucideProps) => (
    <svg
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3851 0.143408L16.359 4.15616C16.547 4.34604 16.547 4.65392 16.359 4.84384L12.3851 8.85659C12.0818 9.16293 11.5631 8.94598 11.5631 8.51277V5.63457H0.981533C0.715606 5.63457 0.5 5.41685 0.5 5.14832V3.85164C0.5 3.58311 0.715606 3.36539 0.981533 3.36539H11.5631V0.487188C11.5631 0.0540187 12.0818 -0.162931 12.3851 0.143408Z"
        fill="#100C27"
      />
    </svg>
  ),
}

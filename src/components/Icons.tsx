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
        fill="currentColor"
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
      <path fill="currentColor" d="m12 20.5-5-5v-1h3v-10h4v10h3v1l-5 5Z" />
    </svg>
  ),
  rdIcon: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 150 128"
      {...props}
    >
      <g clipPath="url(#a)">
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
  rdLogo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 416 96"
      {...props}
    >
      <path
        fill="#000"
        d="M135.837 16.056h14.302c6.331 0 10.91 4.404 10.91 9.19 0 2.826-1.469 4.838-2.883 6.089-.791.76-1.752 1.359-2.826 1.794l5.653 9.189h-7.236l-4.975-7.884h-6.161v7.884h-6.784V16.056Zm14.076 12.288c2.713 0 4.07-1.305 4.07-3.045s-1.357-3.044-4.07-3.044h-7.292v6.144h7.292v-.055ZM165.572 16.056h21.312V22.2h-14.529v3.698h11.815v6.143h-11.815v4.187h14.529v6.144h-21.312V16.056ZM197.059 34.216c.226.599.565 1.197 1.074 1.686.848.815 2.374 1.631 5.031 1.631 3.844 0 5.201-1.305 5.201-2.61 0-1.468-1.978-2.12-4.522-2.718l-4.184-.979c-4.409-.924-8.762-2.99-8.762-7.938.057-3.915 4.297-8.101 12.098-8.101 5.314 0 8.366 2.066 10.119 4.077 1.017 1.197 1.696 2.501 2.148 4.024h-7.066c-.17-.435-.509-.816-.905-1.196-.735-.653-1.979-1.25-4.296-1.25-3.618 0-4.749 1.087-4.749 2.174 0 2.12 4.353 2.719 8.762 3.643 4.297 1.033 8.706 3.045 8.706 7.992 0 4.404-4.296 8.537-12.493 8.537-6.049 0-9.384-2.23-11.193-4.459-1.074-1.305-1.809-2.827-2.205-4.513h7.236ZM220.01 16.056h6.784v15.116c0 3.48 2.487 5.926 6.105 5.926 3.618 0 6.105-2.392 6.105-5.926V16.056h6.784v15.116c0 7.177-4.975 12.015-12.946 12.015-7.914 0-12.945-4.838-12.945-12.015V16.056h.113ZM251.498 16.056h6.783v20.118h14.076v6.144h-20.859V16.056ZM269.644 16.056h25.382V22.2h-9.271v20.118h-6.784V22.2H269.7v-6.144h-.056ZM301.866 16.056h13.398l7.914 26.262h-6.784l-1.583-5.274h-12.493l-1.583 5.274h-6.783l7.914-26.262Zm11.136 14.898-2.487-8.754h-3.844l-2.544 8.754h8.875ZM326.343 16.056h11.137c9.44 0 15.432 5.818 15.432 13.158 0 7.395-5.992 13.158-15.376 13.158h-11.193V16.056Zm11.363 20.172c5.031 0 7.914-2.827 7.914-7.014 0-4.186-2.883-7.014-7.914-7.014h-4.523v14.028h4.523ZM371.737 15.187c9.045 0 15.659 6.36 15.659 14.027 0 7.667-6.557 14.028-15.659 14.028-9.044 0-15.658-6.361-15.658-14.028 0-7.666 6.557-14.027 15.658-14.027Zm0 21.911c4.749 0 8.367-3.48 8.367-7.884s-3.618-7.884-8.367-7.884c-4.748 0-8.366 3.48-8.366 7.884 0 4.35 3.618 7.884 8.366 7.884ZM397.345 34.216c.226.599.566 1.197 1.074 1.686.848.815 2.375 1.631 5.031 1.631 3.845 0 5.201-1.305 5.201-2.61 0-1.468-1.978-2.12-4.522-2.718l-4.183-.979c-4.41-.924-8.763-2.99-8.763-7.938 0-3.915 4.24-8.101 12.041-8.101 5.314 0 8.367 2.066 10.119 4.077 1.018 1.197 1.696 2.501 2.148 4.024h-7.009c-.17-.435-.509-.816-.905-1.196-.735-.653-1.978-1.25-4.296-1.25-3.618 0-4.749 1.087-4.749 2.174 0 2.12 4.353 2.719 8.763 3.643 4.296 1.033 8.705 3.045 8.705 7.992 0 4.404-4.296 8.537-12.493 8.537-6.049 0-9.384-2.23-11.193-4.459-1.074-1.305-1.809-2.827-2.205-4.513h7.236ZM135.837 54.17h11.136c9.441 0 15.433 5.818 15.433 13.158 0 7.395-5.992 13.158-15.376 13.158h-11.193V54.17Zm11.362 20.118c5.032 0 7.915-2.828 7.915-7.014 0-4.187-2.883-7.014-7.915-7.014h-4.522v14.028h4.522ZM166.929 54.17h6.783v26.262h-6.783V54.17ZM193.837 53.3c6.049 0 9.78 2.502 11.984 4.948 1.244 1.468 2.205 3.045 2.883 4.894h-7.009c-.396-.707-.961-1.305-1.64-1.849-1.243-.924-3.109-1.903-6.105-1.903-4.749 0-8.367 3.48-8.367 7.884s3.618 7.884 8.367 7.884c2.94 0 4.862-1.088 6.105-2.175.679-.653 1.244-1.36 1.64-2.175h-3.844v-4.839h14.528v4.839h-3.618a15.635 15.635 0 0 1-2.883 5.274c-2.205 2.664-5.992 5.274-11.985 5.274-8.988 0-15.545-6.361-15.545-14.028-.113-7.72 6.501-14.028 15.489-14.028ZM215.431 54.17h6.784v26.262h-6.784V54.17ZM225.664 54.17h25.382v6.144h-9.271v20.118h-6.784V60.314h-9.271V54.17h-.056ZM257.885 54.17h13.398l7.914 26.262h-6.783l-1.583-5.274h-12.493l-1.583 5.274h-6.784l7.914-26.262Zm11.08 14.898-2.487-8.754h-3.844l-2.487 8.754h8.818ZM282.363 54.17h6.783v26.262h-6.783V54.17ZM300.509 72.33c.226.599.566 1.197 1.074 1.686.848.816 2.375 1.631 5.032 1.631 3.844 0 5.2-1.305 5.2-2.61 0-1.468-1.978-2.12-4.522-2.718l-4.183-.979c-4.41-.924-8.762-2.99-8.762-7.938 0-3.915 4.239-8.102 12.04-8.102 5.314 0 8.367 2.067 10.119 4.078 1.018 1.197 1.696 2.501 2.148 4.024h-7.009c-.17-.435-.509-.816-.905-1.196-.735-.653-1.978-1.25-4.296-1.25-3.618 0-4.749 1.086-4.749 2.174 0 2.12 4.353 2.718 8.763 3.643 4.296 1.033 8.705 3.045 8.705 7.992 0 4.404-4.296 8.537-12.493 8.537-6.049 0-9.384-2.23-11.193-4.459-1.074-1.305-1.809-2.827-2.205-4.513h7.236Z"
      />
      <g clipPath="url(#a)">
        <path
          fill="#806EFF"
          d="M87.564 36.02 60.362 77.97 69.608 96 96.81 54.049l-9.246-18.03ZM27.202 0 0 41.95l9.245 18.03 27.203-41.95L27.201 0ZM66.65 36.02l11.669-17.99L70.84 3.495 69.073 0l-23.38 36.02L18.49 77.97 27.736 96l27.202-41.95-3.04-5.971-6.205-12.06h20.956Z"
        />
        <path
          fill="#000"
          d="m117.725 54.049-9.245-18.03H87.565l9.245 18.03-27.202 41.95h20.915l27.202-41.95ZM57.363 18.03 48.118 0H27.201l9.246 18.03L9.246 59.98H30.16l27.202-41.95Z"
        />
        <path
          fill="#000"
          d="m75.895 54.05 23.34-36.02L89.988 0H69.074l9.245 18.03-11.67 17.99H45.693l9.245 18.03L27.736 96h20.957l23.34-36.02 3.862-5.93Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h117.725v96H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
}

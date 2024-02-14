import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font
  const interRegular = fetch(
    new URL('../../../public/assets/fonts/Inter-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 700,
          background: 'white',
        }}
      >
        <div
          style={{
            left: 42,
            top: 160,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            <svg height={90} viewBox="0 0 150 128">
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
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0',
            margin: '0',
            fontSize: 30,
            width: 'auto',
            maxWidth: 800,
            textAlign: 'left',
            color: '#100C27',
            lineHeight: 1.4,
          }}
        >
          <p>Johan Guse</p>
          <p>(47) 9999999</p>
          <p>johanguse@gmail.com</p>
        </div>
      </div>
    ),

    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}

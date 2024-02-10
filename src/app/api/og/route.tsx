import { ImageResponse } from 'next/og'

import { FormLeadSchema } from '@/lib/form-lead-validation'

export const runtime = 'edge'

const getnNunitoRegular = async () => {
  const response = await fetch(
    new URL(
      '../../../../public/assets/fonts/NunitoSans_7pt-Regular.ttf',
      import.meta.url
    )
  )
  const nunitoRegular = await response.arrayBuffer()

  return nunitoRegular
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const values = FormLeadSchema.parse(Object.fromEntries(url.searchParams))

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              alt="Vercel"
              height={200}
              src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
              style={{ margin: '0 30px' }}
              width={232}
            />
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            <p>{values.name}</p>
            <p>{values.phone}</p>
            <p>{values.email}</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Nunito',
            data: await getnNunitoRegular(),
            weight: 500,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

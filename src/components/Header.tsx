import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white px-4 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-28 sm:w-36">
          <Link href="/">
            <Image
              priority
              src="/assets/images/logo-rd-station-default.svg"
              alt="Logo RD Station"
              width={100}
              height={28}
              className="w-28 sm:w-36"
            />
          </Link>
        </div>
        <p className="font-bold">Gerador de Cartão de Visita</p>
      </div>
    </header>
  )
}

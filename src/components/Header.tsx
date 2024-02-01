import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white p-6 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <Image
          priority
          src="/assets/images/logo-rd-station-default.svg"
          alt="Logo RD Station"
          width={147}
          height={36}
        />
        <p>Gerador de Cartão de Visita</p>
      </div>
    </header>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white p-4 text-center text-disabled">
      <div className="container mx-auto flex justify-between">
        <p>© 2023 Resultados Digitais</p>
        <a
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          className="underline"
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  )
}

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-bg px-6 py-6 lg:px-12">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-light">
          <Link href="/" className="hover:text-accent transition-colors">
            Ken D. Putra
          </Link>
        </div>
        <nav className="flex items-center space-x-8">
          <Link href="/" className="text-light hover:text-muted transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="text-accent font-semibold">
            Portfolio
          </Link>
          <Link href="/contact" className="text-light hover:text-muted transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

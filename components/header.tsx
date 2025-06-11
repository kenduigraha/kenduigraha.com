import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12">
      <div className="text-xl font-semibold">
        <Link href="/" className="hover:text-accent transition-colors">
          Ken D. Putra
        </Link>
      </div>
      <nav className="flex items-center space-x-8">
        <Link href="/" className="hover:text-teal transition-colors">
          Home
        </Link>
        <Link href="/portfolio" className="hover:text-teal transition-colors">
          Portfolio
        </Link>
        <Link href="/contact" className="hover:text-teal transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  )
}

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Ken D. Putra</h3>
            <p className="text-sm text-gray-400">Frontend Web Developer</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-teal transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="hover:text-teal transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-teal transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="mb-2">ken.duigraha@gmail.com</p>
            <p>+62 (0123) 456789</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center space-x-6">
          <Link href="https://github.com" className="hover:text-teal transition-colors">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-teal transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="https://twitter.com" className="hover:text-teal transition-colors">
            <Twitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

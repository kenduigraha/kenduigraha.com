import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white px-6 py-4 lg:px-12 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-navy">Ken D. Putra</div>
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-navy hover:text-teal transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-navy hover:text-teal transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-navy hover:text-teal transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
          Hi, my name is
          <br />
          <span className="text-teal">Ken Duigraha Putra</span>
        </h1>
        <p className="text-lg md:text-xl text-darkGray max-w-2xl mb-8 leading-relaxed">
          A Professional Frontend Engineer with 6+ years of experience in building high-performance, scalable, and
          responsive web solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" size="lg" className="bg-white text-navy border-navy hover:bg-gray-50">
            Hire Me
          </Button>
          <Button size="lg" className="bg-teal hover:bg-teal/90 text-white">
            View Portfolio
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-teal py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div>Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div>Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div>Hours Worked</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Stack Section */}
      <section className="py-20 px-6 bg-lightGray">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-navy">My Stack</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-8 text-darkGray">FRONTEND</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Node.js" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="React" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Wave" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Framework" width={64} height={64} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="HTML5" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="CSS3" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="JavaScript" width={64} height={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">My Experience</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-l-4 border-teal pl-6 py-4">
              <h3 className="text-xl font-semibold text-navy">Stockbit</h3>
              <p className="text-lg font-medium text-darkGray">Sr. Web Engineer</p>
              <p className="text-sm text-gray-500">Oct 2020 - Nov 2023</p>
            </div>

            <div className="border-l-4 border-teal pl-6 py-4">
              <h3 className="text-xl font-semibold text-navy">Bizzy</h3>
              <p className="text-lg font-medium text-darkGray">Fullstack Javascript Engineer</p>
              <p className="text-sm text-gray-500">July 2019 - Jan 2020</p>
            </div>

            <div className="border-l-4 border-teal pl-6 py-4">
              <h3 className="text-xl font-semibold text-navy">Bizzy</h3>
              <p className="text-lg font-medium text-darkGray">Software Development Engineer - Frontend</p>
              <p className="text-sm text-gray-500">Jan 2019 - July 2019</p>
            </div>

            <div className="border-l-4 border-teal pl-6 py-4">
              <h3 className="text-xl font-semibold text-navy">Kudo</h3>
              <p className="text-lg font-medium text-darkGray">Software Engineer - Web</p>
              <p className="text-sm text-gray-500">Feb 2017 - Jan 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Have something in mind?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-8">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:ken.duigraha@gmail.com" className="text-gray-300 hover:text-white">
              ken.duigraha@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+62123456789" className="text-gray-300 hover:text-white">
              +62 (0123) 456789
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Socials</h3>
          <div className="flex justify-center space-x-8">
            <Link href="https://github.com" className="hover:text-teal transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="GitHub" width={32} height={32} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-teal transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-teal transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="Twitter" width={32} height={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lightGray py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Ken D. Putra</h3>
              <p className="text-sm text-darkGray">Frontend Web Developer</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-2 text-navy">Quick Links</h3>
              <div className="flex flex-col space-y-1">
                <Link href="/" className="text-darkGray hover:text-teal transition-colors text-sm">
                  Home
                </Link>
                <Link href="/portfolio" className="text-darkGray hover:text-teal transition-colors text-sm">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-darkGray hover:text-teal transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-2 text-navy">Contact</h3>
              <p className="text-sm text-darkGray mb-1">ken.duigraha@gmail.com</p>
              <p className="text-sm text-darkGray">+62 (0123) 456789</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

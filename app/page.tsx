import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header & Hero Section */}
      <section className="bg-bg">
        {/* Header */}
        <header className="px-6 py-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-light">Ken D. Putra</div>
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-light hover:text-muted transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-light hover:text-muted transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-light hover:text-muted transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className="px-6 pb-20 pt-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            {/* Profile Image - Always at Top */}
            <div className="order-1">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-light/20">
                <Image
                  src="/images/kenduigraha.jpg"
                  alt="Ken Duigraha Putra"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content - Always Below Image */}
            <div className="order-2 space-y-6">
              <p className="text-muted text-base">Hi, my name is</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-light leading-tight">
                Ken Duigraha Putra
              </h1>
              <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                A Professional Frontend Engineer with 6+ years of experience in building high-performance, scalable, and
                responsive web solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-light text-bg border-light hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md"
                >
                  Hire Me
                </Button>
                <Button
                  size="lg"
                  className="bg-bluesky hover:bg-bluesky/90 text-light px-8 py-3 text-base font-medium rounded-md"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-bgblue to-bluesky py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-light">
            <div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm">Hours Worked</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Stack Section */}
      <section className="py-20 px-6 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-light">My Stack</h2>
          <div className="mb-12">
            <h3 className="text-sm font-semibold mb-12 text-muted tracking-wider">FRONTEND</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 max-w-2xl mx-auto">
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
                  <Image src="/placeholder.svg?height=64&width=64" alt="Tailwind CSS" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Next.js" width={64} height={64} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-lg mx-auto">
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
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-bg">My Experience</h2>

          <div className="max-w-2xl mx-auto space-y-12 text-center">
            <div>
              <h3 className="text-2xl font-bold text-bg mb-2">Stockbit</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Sr. Web Engineer</p>
              <p className="text-sm text-gray-600">Oct 2020 - Nov 2023</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-bg mb-2">Bizzy</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Fullstack Javascript Engineer</p>
              <p className="text-sm text-gray-600">July 2019 - Jan 2020</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-bg mb-2">Bizzy</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Software Development Engineer - Frontend</p>
              <p className="text-sm text-gray-600">Jan 2019 - July 2019</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-bg mb-2">Kudo</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Software Engineer - Web</p>
              <p className="text-sm text-gray-600">Feb 2017 - Jan 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-black text-light text-center">
        <h2 className="text-2xl font-bold mb-8">Have something in mind?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-12">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:ken.duigraha@gmail.com" className="text-muted hover:text-light">
              ken.duigraha@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+6281234567890" className="text-muted hover:text-light">
              +62 812 3456 7890
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-6">Socials</h3>
          <div className="flex justify-center space-x-8">
            <Link href="https://github.com" className="hover:text-muted transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="GitHub" width={32} height={32} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-muted transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-muted transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="Tumblr" width={32} height={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-light">Ken D. Putra</h3>
              <p className="text-sm text-muted">ken.duigraha@gmail.com</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-light">QUICK LINKS</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-muted hover:text-light transition-colors text-sm">
                  Home
                </Link>
                <Link href="/contact" className="text-muted hover:text-light transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/portfolio" className="text-muted hover:text-light transition-colors text-sm">
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-4 text-light">CONTACT ME</h3>
              <p className="text-sm text-muted mb-2">ken.duigraha@gmail.com</p>
              <p className="text-sm text-muted">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

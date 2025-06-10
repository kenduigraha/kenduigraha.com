import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header & Hero Section */}
      <section className="bg-[#0d0d1f]">
        {/* Header */}
        <header className="px-6 py-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-white">Ken D. Putra</div>
            <nav className="flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-[#cccccc] transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-white hover:text-[#cccccc] transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-white hover:text-[#cccccc] transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className="px-6 pb-20 pt-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            {/* Profile Image */}
            <div className="order-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Ken Duigraha Putra"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 space-y-6">
              <p className="text-[#cccccc] text-base">Hi, my name is</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ken Duigraha Putra
              </h1>
              <p className="text-[#cccccc] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                A Professional Frontend Engineer with 6+ years of experience in building high-performance, scalable, and
                responsive web solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#0d0d1f] border-white hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md"
                >
                  Hire Me
                </Button>
                <Button
                  size="lg"
                  className="bg-[#2298BD] hover:bg-[#2298BD]/90 text-white px-8 py-3 text-base font-medium rounded-md"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#2B71A7] to-[#2298BD] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
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
      <section className="py-20 px-6 bg-[#0d0d1f]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">My Stack</h2>
          <div className="mb-12">
            <h3 className="text-sm font-semibold mb-12 text-[#cccccc] tracking-wider">FRONTEND</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Node.js" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="React" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">React</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Tailwind CSS" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Redux" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">Redux</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-lg mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="HTML5" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="CSS3" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="JavaScript" width={64} height={64} />
                </div>
                <span className="text-[#cccccc] text-sm">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Experience Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-[#0d0d1f]">My Experience</h2>

          <div className="max-w-2xl mx-auto space-y-12 text-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0d0d1f] mb-2">Stockbit</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Sr. Web Engineer</p>
              <p className="text-sm text-gray-600">Oct 2020 - Nov 2023</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0d0d1f] mb-2">Bizzy</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Fullstack Javascript Engineer</p>
              <p className="text-sm text-gray-600">July 2019 - Jan 2020</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0d0d1f] mb-2">Bizzy</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Software Development Engineer - Frontend</p>
              <p className="text-sm text-gray-600">Jan 2019 - July 2019</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0d0d1f] mb-2">Kudo</h3>
              <p className="text-xl font-semibold text-gray-700 mb-1">Software Engineer - Web</p>
              <p className="text-sm text-gray-600">Feb 2017 - Jan 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-black text-white text-center">
        <h2 className="text-2xl font-bold mb-8">Have something in mind?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-12">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:ken.duigraha@gmail.com" className="text-[#cccccc] hover:text-white">
              ken.duigraha@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+6281213858586" className="text-[#cccccc] hover:text-white">
              +62 812 1385 8586
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-6">Socials</h3>
          <div className="flex justify-center space-x-8">
            <Link href="https://github.com" className="hover:text-[#cccccc] transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="GitHub" width={32} height={32} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-[#cccccc] transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link href="https://telegram.org" className="hover:text-[#cccccc] transition-colors">
              <Image src="/placeholder.svg?height=32&width=32" alt="Telegram" width={32} height={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-xl font-semibold">Ken D. Putra</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Portfolio
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, my name is
          <br />
          <span className="text-blue-400">Ken Duigraha Putra</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
          A Professional Frontend Engineer with 6+ years of experience in building high-performance, scalable, and
          responsive web solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
            Hire Me
          </Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            View Portfolio
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-blue-100">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Hours Worked</div>
            </div>
          </div>
        </div>
      </section>

      {/* My Stack Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">My Stack</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-8 text-gray-300">Frontend</h3>
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
                  <Image src="/placeholder.svg?height=64&width=64" alt="Tailwind CSS" width={64} height={64} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Redux" width={64} height={64} />
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
      <section className="py-20 px-6 bg-gray-100 text-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">My Experience</h2>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Freelance Frontend Engineer</h3>
            <p className="text-gray-600 leading-relaxed">
              Specialized in creating modern, responsive web applications using cutting-edge technologies. Experienced
              in working with clients across various industries to deliver high-quality solutions that meet business
              objectives and user needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

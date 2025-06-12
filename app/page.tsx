import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import TechStackIcon from "@/components/tech-stack-icon"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header & Hero Section */}
      <section className="bg-bg">

        {/* Hero Content */}
        <div className="px-6 pb-20 pt-8 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            {/* Profile Image - Always at Top - Half Size */}
            <div className="order-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-light/20">
                <Image
                  src="/images/kenduigraha.jpg"
                  alt="Ken Duigraha Putra"
                  width={160}
                  height={160}
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
                <Link
                  href="https://www.upwork.com/freelancers/~01eed4ee138087d68e?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-light text-bg border-light hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md w-full"
                  >
                    Hire Me
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="bg-bluesky hover:bg-bluesky/90 text-light px-8 py-3 text-base font-medium rounded-md w-full"
                  >
                    View Portfolio
                  </Button>
                </Link>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 max-w-4xl mx-auto">
              <TechStackIcon src="/icons/tech/nodejs.svg" alt="Node.js" name="Node.js" />
              <TechStackIcon src="/icons/tech/reactjs.svg" alt="React" name="React" />
              <TechStackIcon src="/icons/tech/tailwindcss.svg" alt="Tailwind CSS" name="Tailwind CSS" />
              <TechStackIcon src="/icons/tech/redux.svg" alt="Redux" name="Redux" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-lg mx-auto">
              <TechStackIcon src="/icons/tech/html5.svg" alt="HTML5" name="HTML5" />
              <TechStackIcon src="/icons/tech/css3.svg" alt="CSS3" name="CSS3" />
              <TechStackIcon src="/icons/tech/javascript.svg" alt="JavaScript" name="JavaScript" />
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
            <a href="tel:+6281213858586" className="text-muted hover:text-light">
              +62 812 1385 8586
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-6">Socials</h3>
          <div className="flex justify-center space-x-8">
            <Link
              href="https://github.com/kenduigraha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/icons/social/github.svg" alt="GitHub" width={32} height={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kenduigraha/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/icons/social/linkedin.png" alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link
              href="https://t.me/kenduigraha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/icons/social/telegram.svg" alt="Telegram" width={32} height={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}

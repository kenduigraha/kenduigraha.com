import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0d0d1f] py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Ken D. Putra</h3>
            <p className="text-sm text-[#cccccc]">Let's turn your ideas into real</p>
          </div>

          {/* Middle Column - QUICK LINKS */}
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-white">QUICK LINKS</h3>
            <div className="flex justify-center">
              <div className="flex space-x-8">
                <Link href="/" className="text-[#cccccc] hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link href="/portfolio" className="text-[#cccccc] hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-[#cccccc] hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4 text-white">CONTACT ME</h3>
            <p className="text-sm text-[#cccccc] mb-2">ken.duigraha@gmail.com</p>
            <p className="text-sm text-[#cccccc]">+62 812 1385 8586</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

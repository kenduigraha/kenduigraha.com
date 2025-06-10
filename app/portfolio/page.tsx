import Link from "next/link"

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, title: "Title", description: "Name of Portfolio" },
    { id: 2, title: "Title", description: "Name of Portfolio" },
    { id: 3, title: "Title", description: "Name of Portfolio" },
    { id: 4, title: "Title", description: "Name of Portfolio" },
    { id: 5, title: "Title", description: "Name of Portfolio" },
    { id: 6, title: "Title", description: "Name of Portfolio" },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-darkBg px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-white">Ken D. Putra</div>
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-white font-semibold">
              Portfolio
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Portfolio Content */}
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-navy">My Portfolio</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-teal text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="p-8 h-48 flex flex-col justify-center items-center text-center">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-darkBg py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Ken D. Putra</h3>
              <p className="text-sm text-white/70">ken.duigraha@gmail.com</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-white">QUICK LINKS</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/portfolio" className="text-white/70 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-4 text-white">CONTACT ME</h3>
              <p className="text-sm text-white/70 mb-2">ken.duigraha@gmail.com</p>
              <p className="text-sm text-white/70">+62 812 3456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

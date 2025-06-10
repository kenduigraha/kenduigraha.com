import Link from "next/link"
import Footer from "@/components/footer"

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
      <header className="bg-bg px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-light">Ken D. Putra</div>
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

      {/* Portfolio Content */}
      <div className="bg-light py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-bg">My Portfolio</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-bluesky text-light rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
      <Footer />
    </div>
  )
}

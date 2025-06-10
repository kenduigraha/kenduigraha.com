import Link from "next/link"

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, title: "Project 1", description: "Name of Portfolio" },
    { id: 2, title: "Project 2", description: "Name of Portfolio" },
    { id: 3, title: "Project 3", description: "Name of Portfolio" },
    { id: 4, title: "Project 4", description: "Name of Portfolio" },
    { id: 5, title: "Project 5", description: "Name of Portfolio" },
    { id: 6, title: "Project 6", description: "Name of Portfolio" },
  ]

  return (
    <div className="bg-gray-100 py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-navy">My Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="block bg-teal text-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 h-48 flex flex-col justify-center items-center text-center">
                <h2 className="text-xl font-semibold mb-2">Title</h2>
                <p>Name of Portfolio</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

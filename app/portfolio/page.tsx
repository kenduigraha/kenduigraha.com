"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

// Sample portfolio data - replace with your actual projects
const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    year: "2023",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "React Native banking application with biometric authentication",
    image: "/placeholder.svg?height=200&width=300",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux"],
    featured: true,
    demoUrl: "https://demo.example.com",
    year: "2023",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard for business intelligence",
    image: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    featured: false,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    year: "2022",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Social networking platform with real-time messaging",
    image: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
    technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
    featured: false,
    demoUrl: "https://demo.example.com",
    year: "2022",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "Collaborative project management and task tracking application",
    image: "/placeholder.svg?height=200&width=300",
    category: "Web Development",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    featured: false,
    githubUrl: "https://github.com/example",
    year: "2021",
  },
  {
    id: 6,
    title: "Weather Mobile App",
    description: "Cross-platform weather application with location services",
    image: "/placeholder.svg?height=200&width=300",
    category: "Mobile Development",
    technologies: ["Flutter", "OpenWeather API", "SQLite"],
    featured: false,
    demoUrl: "https://demo.example.com",
    year: "2021",
  },
]

const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFeatured = !showFeaturedOnly || item.featured

    return matchesCategory && matchesSearch && matchesFeatured
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-bg px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-light">
            <Link href="/" className="hover:text-accent transition-colors">
              Ken D. Putra
            </Link>
          </div>
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
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-bg">My Portfolio</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my collection of projects showcasing expertise in web development, mobile applications, and user
              interface design.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md mx-auto block px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-bluesky text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Toggle */}
            <div className="flex justify-center">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                  className="w-4 h-4 text-bluesky bg-gray-100 border-gray-300 rounded focus:ring-bluesky"
                />
                <span className="text-gray-700">Show featured projects only</span>
              </label>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-bluesky text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{item.year}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-bluesky text-sm font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-bg mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{item.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {item.demoUrl && (
                      <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full bg-bluesky hover:bg-bluesky/90 text-white text-sm">Live Demo</Button>
                      </a>
                    )}
                    {item.githubUrl && (
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full text-sm">
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                  setShowFeaturedOnly(false)
                }}
                className="mt-4 bg-bluesky hover:bg-bluesky/90 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-bg mb-4">Interested in working together?</h2>
            <p className="text-gray-600 mb-6">I'm always open to discussing new opportunities and exciting projects.</p>
            <Link href="/contact">
              <Button className="bg-bluesky hover:bg-bluesky/90 text-white px-8 py-3 text-lg">Get In Touch</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

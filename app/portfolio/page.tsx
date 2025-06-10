"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { Github, Star, GitFork, Eye } from "lucide-react"

// Sample portfolio data - replace with your actual projects
const portfolioItems = [
  {
    id: 1,
    title: "Pokemon World",
    description:
      "Interactive Pokemon encyclopedia with search, filtering, and detailed Pokemon information. Built with modern React and responsive design.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "JavaScript", "CSS3", "Firebase", "Pokemon API"],
    featured: true,
    demoUrl: "https://pokemon-world.web.app/",
    githubUrl: "https://github.com/kenduigraha/pokemon-world",
    year: "2023",
    type: "Single Page Application",
    status: "Live",
    githubStats: {
      stars: 12,
      forks: 3,
      language: "JavaScript",
    },
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "Full-featured admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    featured: true,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    year: "2023",
    type: "Full Stack Application",
    status: "Live",
    githubStats: {
      stars: 25,
      forks: 8,
      language: "TypeScript",
    },
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB", "Express"],
    featured: false,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    year: "2022",
    type: "Full Stack Application",
    status: "Live",
    githubStats: {
      stars: 18,
      forks: 5,
      language: "Vue",
    },
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    featured: false,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    year: "2022",
    type: "Single Page Application",
    status: "Live",
    githubStats: {
      stars: 15,
      forks: 4,
      language: "TypeScript",
    },
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    featured: false,
    githubUrl: "https://github.com/example",
    year: "2021",
    type: "Static Website",
    status: "Live",
    githubStats: {
      stars: 8,
      forks: 2,
      language: "JavaScript",
    },
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management system.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    featured: false,
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    year: "2021",
    type: "Static Site Generator",
    status: "Live",
    githubStats: {
      stars: 22,
      forks: 7,
      language: "JavaScript",
    },
  },
]

const projectTypes = [
  "All Projects",
  "Full Stack Application",
  "Single Page Application",
  "Static Website",
  "Static Site Generator",
]

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState("All Projects")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = portfolioItems.filter((item) => {
    const matchesType = selectedType === "All Projects" || item.type === selectedType
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesType && matchesSearch
  })

  // Separate featured and regular projects
  const featuredProjects = filteredItems.filter((item) => item.featured)
  const regularProjects = filteredItems.filter((item) => !item.featured)

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
            <h1 className="text-4xl font-bold mb-4 text-bg">My Web Development Portfolio</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of web applications and projects showcasing modern development practices, clean code, and
              user-centered design.
            </p>
          </div>

          {/* Search and Project Type Filter */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md mx-auto block px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bluesky focus:border-transparent"
              />
            </div>

            {/* Project Type Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type ? "bg-bluesky text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && selectedType === "All Projects" && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-bg mb-8 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredProjects.map((item) => (
                  <ProjectCard key={item.id} item={item} featured={true} />
                ))}
              </div>
            </div>
          )}

          {/* All Projects Section */}
          <div>
            {selectedType === "All Projects" && featuredProjects.length > 0 && (
              <h2 className="text-2xl font-bold text-bg mb-8 text-center">All Projects</h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {(selectedType === "All Projects" ? regularProjects : filteredItems).map((item) => (
                <ProjectCard key={item.id} item={item} featured={false} />
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your search.</p>
              <Button
                onClick={() => {
                  setSelectedType("All Projects")
                  setSearchTerm("")
                }}
                className="mt-4 bg-bluesky hover:bg-bluesky/90 text-white"
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-bg mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-gray-600 mb-6">
              I'm passionate about creating exceptional web experiences. Ready to discuss your next project?
            </p>
            <Link href="/contact">
              <Button className="bg-bluesky hover:bg-bluesky/90 text-white px-8 py-3 text-lg">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Project Card Component
function ProjectCard({ item, featured }: { item: any; featured: boolean }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              item.status === "Live" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
            }`}
          >
            {item.status}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{item.year}</span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-bluesky text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-bluesky text-sm font-medium">{item.type}</span>
          {item.githubStats && (
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {item.githubStats.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {item.githubStats.forks}
              </div>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-bg mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {item.technologies.slice(0, 4).map((tech: string) => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
            {item.technologies.length > 4 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                +{item.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {item.demoUrl && (
            <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-bluesky hover:bg-bluesky/90 text-white text-sm flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Live Demo
              </Button>
            </a>
          )}
          {item.githubUrl && (
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full text-sm flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

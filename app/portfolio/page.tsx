"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import GitHubStats from "@/components/github-stats"
import { Github, Star, ExternalLink } from "lucide-react"

// Real portfolio data based on user's projects
const portfolioItems = [
  {
    id: 1,
    title: "Pokemon World",
    description:
      "Interactive Pokemon encyclopedia featuring search functionality, type filtering, and favorites system. Built with React and Redux, this application uses server-side rendering for improved performance and SEO. The clean UI displays Pokemon cards with detailed information and favorite toggling.",
    image: "/images/projects/pokemon-world.jpg",
    mainTechnology: "React.js",
    technologies: ["React.js", "Redux", "Server Side Rendering", "React-Boilerplate"],
    featured: true,
    demoUrl: "https://pokemon-world.web.app/",
    githubUrl: "https://github.com/kenduigraha/pokemon-world",
    year: "2021",
    type: "Web Application",
    status: "Live",
    fallbackStats: {
      stars: 5,
      forks: 2,
      language: "JavaScript",
    },
  },
  {
    id: 2,
    title: "Landing Page HyperHire",
    description:
      "Modern landing page for HyperHire featuring responsive design, smooth animations, and multilingual support. Built with Next.js for optimal performance and SEO, this project showcases clean UI design with a focus on user experience and conversion optimization.",
    image: "/images/projects/landing-page-hyperhire.jpg",
    mainTechnology: "React.js",
    technologies: ["React.js", "Next.js", "Server Side Rendering", "Tailwind CSS"],
    featured: true,
    demoUrl: "https://landing-page-nextjs-rho.vercel.app/",
    githubUrl: "https://github.com/kenduigraha/landing-page-nextjs",
    year: "2025",
    type: "Landing Page",
    status: "Live",
    fallbackStats: {
      stars: 3,
      forks: 1,
      language: "JavaScript",
    },
  },
  {
    id: 3,
    title: "kenduigraha.com",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS. Features a clean, responsive design with dark theme, project showcase, and contact form. Optimized for performance with server-side rendering and static generation for key pages.",
    image: "/images/projects/kenduigraha.com.jpg",
    mainTechnology: "React.js",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    featured: true,
    demoUrl: "https://kenduigraha.com/",
    githubUrl: "https://github.com/kenduigraha/kenduigraha.com",
    year: "2025",
    type: "Portfolio Website",
    status: "Live",
    fallbackStats: {
      stars: 4,
      forks: 1,
      language: "TypeScript",
    },
  },
  {
    id: 4,
    title: "Open Movie",
    description:
      "Movie search application with detailed movie information, built using React Hooks and Redux. Features include search functionality, movie details modal, and responsive design. The application connects to a movie database API to provide up-to-date information.",
    image: "/images/projects/open-movie.jpg",
    mainTechnology: "React.js",
    technologies: ["React.js", "Redux", "React Hooks", "Create React App"],
    featured: false,
    demoUrl: "http://open-movie-react-hooks-redux.vercel.app/",
    githubUrl: "https://github.com/kenduigraha/open-movie-react-hooks-redux",
    year: "2020",
    type: "Single Page Application",
    status: "Live",
    fallbackStats: {
      stars: 7,
      forks: 3,
      language: "JavaScript",
    },
  },
  {
    id: 5,
    title: "Marvel Dictionary",
    description:
      "Interactive Marvel character encyclopedia built with React and Redux. This application allows users to browse and search Marvel characters, view detailed information, and explore related comics. Features a responsive design with Marvel's iconic visual style.",
    image: "/images/projects/marvel-dictionary.jpg",
    mainTechnology: "React.js",
    technologies: ["React.js", "Redux", "Single Page Application", "Create React App"],
    featured: false,
    demoUrl: "https://marvel-directory.firebaseapp.com/",
    githubUrl: "https://github.com/kenduigraha/portofolio-multiple-SPA",
    year: "2018",
    type: "Single Page Application",
    status: "Live",
    fallbackStats: {
      stars: 4,
      forks: 2,
      language: "JavaScript",
    },
  },
  {
    id: 6,
    title: "Searchable Dropdown",
    description:
      "Reusable React component library featuring a customizable searchable dropdown with filtering capabilities. This UI component includes keyboard navigation, custom styling options, and accessibility features. Perfect for forms and data selection interfaces.",
    image: "/images/projects/searchable-dropdown.jpg",
    mainTechnology: "React.js",
    technologies: ["React.js", "TypeScript", "UI Component", "NPM Package"],
    featured: false,
    demoUrl: "https://searchable-dropdown-five.vercel.app/",
    githubUrl: "https://github.com/kenduigraha/searchable-dropdown",
    year: "2025",
    type: "UI Component",
    status: "Live",
    fallbackStats: {
      stars: 6,
      forks: 2,
      language: "TypeScript",
    },
  },
  {
    id: 7,
    title: "Moovie Time",
    description:
      "Modern movie browsing application built with Vue.js and Nuxt.js. Features include movie search, categorization, ratings, and detailed movie information. The dark-themed UI provides an immersive experience for movie enthusiasts with smooth transitions and responsive design.",
    image: "/images/projects/moovie-time.jpg",
    mainTechnology: "Vue.js",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Movie API"],
    featured: false,
    demoUrl: "https://moovie-time-plum.vercel.app",
    githubUrl: "https://github.com/kenduigraha/moovieTime",
    year: "2025",
    type: "Web Application",
    status: "Development",
    fallbackStats: {
      stars: 3,
      forks: 1,
      language: "Vue",
    },
  },
]

const technologyFilters = ["All Technologies", "React.js", "Vue.js", "Node.js"]

export default function Portfolio() {
  const [selectedTech, setSelectedTech] = useState("All Technologies")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = portfolioItems.filter((item) => {
    const matchesTech = selectedTech === "All Technologies" || item.mainTechnology === selectedTech
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesTech && matchesSearch
  })

  // Separate featured and regular projects
  const featuredProjects = filteredItems.filter((item) => item.featured)
  const regularProjects = filteredItems.filter((item) => !item.featured)

  // Get project counts for each technology
  const getProjectCount = (tech: string) => {
    if (tech === "All Technologies") return portfolioItems.length
    return portfolioItems.filter((item) => item.mainTechnology === tech).length
  }

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
              Showcasing expertise in modern web technologies including React.js, Vue.js, and Node.js with a focus on
              scalable, performant applications.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Real-time GitHub stats</span>
            </div>
          </div>

          {/* Technology Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {technologyFilters.map((tech) => (
              <div key={tech} className="text-center p-4 bg-gray-50 rounded-lg">
                {tech !== "All Technologies" && (
                  <div className="w-12 h-12 mx-auto mb-2">
                    <Image
                      src={`/icons/tech/${tech.toLowerCase().replace(".", "")}.svg`}
                      alt={tech}
                      width={48}
                      height={48}
                    />
                  </div>
                )}
                <div className="text-2xl font-bold text-bluesky">{getProjectCount(tech)}</div>
                <div className="text-sm text-gray-600">{tech === "All Technologies" ? "Total Projects" : tech}</div>
              </div>
            ))}
          </div>

          {/* Search and Technology Filter */}
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

            {/* Technology Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {technologyFilters.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedTech === tech ? "bg-bluesky text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tech !== "All Technologies" && (
                    <div className="w-4 h-4 relative">
                      <Image
                        src={`/icons/tech/${tech.toLowerCase().replace(".", "")}.svg`}
                        alt={tech}
                        width={16}
                        height={16}
                      />
                    </div>
                  )}
                  {tech}
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedTech === tech ? "bg-white/20" : "bg-gray-300"
                    }`}
                  >
                    {getProjectCount(tech)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              {selectedTech === "All Technologies" ? (
                <>
                  Showing <span className="font-semibold">{filteredItems.length}</span> projects across all technologies
                </>
              ) : (
                <>
                  Showing <span className="font-semibold">{filteredItems.length}</span> projects built with{" "}
                  <span className="font-semibold text-bluesky">{selectedTech}</span>
                </>
              )}
            </p>
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && selectedTech === "All Technologies" && (
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
            {selectedTech === "All Technologies" && featuredProjects.length > 0 && (
              <h2 className="text-2xl font-bold text-bg mb-8 text-center">All Projects</h2>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {(selectedTech === "All Technologies" ? regularProjects : filteredItems).map((item) => (
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
                  setSelectedTech("All Technologies")
                  setSearchTerm("")
                }}
                className="mt-4 bg-bluesky hover:bg-bluesky/90 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Technology Expertise Section */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-bg mb-8 text-center">Technology Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src="/icons/tech/reactjs.svg" alt="React.js" width={64} height={64} />
                </div>
                <h3 className="font-bold text-lg mb-2">React.js</h3>
                <p className="text-gray-600 text-sm">
                  Modern React development with hooks, context, and state management. Experience with Next.js.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src="/icons/tech/vuejs.svg" alt="Vue.js" width={64} height={64} />
                </div>
                <h3 className="font-bold text-lg mb-2">Vue.js</h3>
                <p className="text-gray-600 text-sm">
                  Vue ecosystem including Vuex, Vue Router, and Nuxt.js. Building reactive and performant user
                  interfaces.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src="/icons/tech/nodejs.svg" alt="Node.js" width={64} height={64} />
                </div>
                <h3 className="font-bold text-lg mb-2">Node.js</h3>
                <p className="text-gray-600 text-sm">
                  Backend development with Express, API design, database integration, and microservices architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-bg mb-4">Ready to Build Your Next Project?</h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how my expertise in React.js, Vue.js, and Node.js can bring your ideas to life.
            </p>
            <Link href="/contact">
              <Button className="bg-bluesky hover:bg-bluesky/90 text-white px-8 py-3 text-lg">Start a Project</Button>
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
  const getTechColor = (tech: string) => {
    switch (tech) {
      case "React.js":
        return "bg-blue-100 text-blue-700"
      case "Vue.js":
        return "bg-green-100 text-green-700"
      case "Node.js":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

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

        {/* Main Technology Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTechColor(item.mainTechnology)}`}>
            {item.mainTechnology}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              item.status === "Live" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
            }`}
          >
            {item.status}
          </span>
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

        {/* Year Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{item.year}</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-gray-500 text-sm font-medium">{item.type}</span>
          {item.githubUrl && <GitHubStats githubUrl={item.githubUrl} fallbackStats={item.fallbackStats} />}
        </div>

        <h3 className="text-xl font-bold text-bg mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{item.description}</p>

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
                <ExternalLink className="w-4 h-4" />
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

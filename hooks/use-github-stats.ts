"use client"

import { useState, useEffect } from "react"
import { fetchGitHubStats } from "@/lib/github"

interface GitHubStats {
  stars: number
  forks: number
  language: string
  openIssues: number
  lastUpdated: string
}

export function useGitHubStats(githubUrl: string | undefined) {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!githubUrl) return

    const fetchStats = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = await fetchGitHubStats(githubUrl)
        setStats(result)
      } catch (err) {
        setError("Failed to fetch GitHub stats")
        console.error("GitHub stats error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [githubUrl])

  return { stats, loading, error }
}

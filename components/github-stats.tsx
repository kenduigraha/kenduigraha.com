"use client"

import { useGitHubStats } from "@/hooks/use-github-stats"
import { Star, GitFork, Loader2 } from "lucide-react"

interface GitHubStatsProps {
  githubUrl: string
  fallbackStats?: {
    stars: number
    forks: number
    language: string
  }
}

export default function GitHubStats({ githubUrl, fallbackStats }: GitHubStatsProps) {
  const { stats, loading, error } = useGitHubStats(githubUrl)

  // Use real-time stats if available, otherwise fallback to static data
  const displayStats = stats || fallbackStats

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-xs text-gray-500">
        <Loader2 className="w-3 h-3 animate-spin" />
        <span>Loading...</span>
      </div>
    )
  }

  // Don't show error for rate limiting, just use fallback data
  if (error && !fallbackStats) {
    return null
  }

  if (!displayStats) return null

  return (
    <div className="flex items-center gap-3 text-xs text-gray-500">
      <div className="flex items-center gap-1" title={`${displayStats.stars} stars`}>
        <Star className="w-3 h-3" />
        {displayStats.stars}
      </div>
      <div className="flex items-center gap-1" title={`${displayStats.forks} forks`}>
        <GitFork className="w-3 h-3" />
        {displayStats.forks}
      </div>
      {/* Only show real-time indicator if we actually got live data */}
      {stats && (
        <div className="text-xs text-green-500" title="Live GitHub data">
          ●
        </div>
      )}
    </div>
  )
}

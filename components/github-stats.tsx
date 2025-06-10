"use client"

import { useGitHubStats } from "@/hooks/use-github-stats"
import { Star, GitFork, AlertCircle, Loader2 } from "lucide-react"

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

  if (error && !fallbackStats) {
    return (
      <div className="flex items-center gap-1 text-xs text-red-500">
        <AlertCircle className="w-3 h-3" />
        <span>Error</span>
      </div>
    )
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
      {stats && (
        <div className="text-xs text-gray-400" title="Real-time data">
          ●
        </div>
      )}
    </div>
  )
}

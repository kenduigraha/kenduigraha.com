interface GitHubStats {
  stars: number
  forks: number
  language: string
  openIssues: number
  lastUpdated: string
}

interface GitHubApiResponse {
  stargazers_count: number
  forks_count: number
  language: string
  open_issues_count: number
  updated_at: string
}

export async function fetchGitHubStats(repoUrl: string): Promise<GitHubStats | null> {
  try {
    // Extract owner and repo from GitHub URL
    const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/)
    if (!match) return null

    const [, owner, repo] = match

    // Remove .git suffix if present
    const cleanRepo = repo.replace(/\.git$/, "")

    const response = await fetch(`https://api.github.com/repos/${owner}/${cleanRepo}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add GitHub token if available for higher rate limits
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        }),
      },
      // Cache for 10 minutes to reduce API calls
      next: { revalidate: 600 },
    })

    // Handle rate limiting gracefully
    if (response.status === 403) {
      const rateLimitReset = response.headers.get("x-ratelimit-reset")
      console.warn(
        `GitHub API rate limit exceeded. Resets at: ${rateLimitReset ? new Date(Number.parseInt(rateLimitReset) * 1000) : "unknown"}`,
      )
      return null
    }

    if (!response.ok) {
      console.warn(`Failed to fetch GitHub stats for ${owner}/${cleanRepo}:`, response.status)
      return null
    }

    const data: GitHubApiResponse = await response.json()

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language || "Unknown",
      openIssues: data.open_issues_count,
      lastUpdated: data.updated_at,
    }
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    return null
  }
}

export async function fetchMultipleGitHubStats(repoUrls: string[]): Promise<(GitHubStats | null)[]> {
  const promises = repoUrls.map((url) => fetchGitHubStats(url))
  return Promise.all(promises)
}

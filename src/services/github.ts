export const fetchWithToken = async (githubApiUrl: string) => {
  const bearerToken = import.meta.env.BEARER_TOKEN
  if (bearerToken) {
    return await fetch(githubApiUrl, {
      headers: {
        // Replace with your GitHub personal access token
        Authorization: `Bearer ${bearerToken}`,
      },
    })
  } else {
    return await fetch(githubApiUrl)
  }
}

export const getSlug = (item: string) => item.substring(item.lastIndexOf('/') + 1).toLowerCase()

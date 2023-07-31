async function getUserPosts (username) {
  try {
    const url = new URL(
      process.env.NEXT_PUBLIC_API_URL + 'User/' + username + '/posts'
    )
    const res = await fetch(url, { cache: 'no-cache' })

    const statusCode = res.status

    if (!res.ok) {
      return { data: await res.text(), status: statusCode }
    }
    return { data: await res.json(), status: statusCode }
  } catch (error) {
    return error.message
  }
}

export default getUserPosts

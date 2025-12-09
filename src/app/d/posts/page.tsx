import Link from 'next/link'

import { getPosts } from '~/server/actions/post'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <>
      <h1>Blog</h1>

      <ul role="list">
        {posts.map(post => (
          <li key={post._id}>
            <Link href={`/d/posts/${post._id}`}>{post._id}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

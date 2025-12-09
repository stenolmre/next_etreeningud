import Link from 'next/link'

import { getAuthors } from '~/server/actions/post/author'

export default async function PostAuthorsPage() {
  const authors = await getAuthors()

  return (
    <>
      <h1>Blog Authors</h1>

      <ul role="list">
        {authors.map(author => (
          <li key={author._id}>
            <Link href={`/d/posts/authors/${author._id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

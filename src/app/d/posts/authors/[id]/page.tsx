import { getAuthor } from '~/server/actions/post/author'

import EditAuthor from '~/app/d/posts/authors/[id]/_components/edit-author'

interface IPostCategoryPageProps {
  params: Promise<{ id: string }>
}

export default async function PostAuthorPage({ params }: IPostCategoryPageProps) {
  const { id } = await params
  const author = await getAuthor(id)

  if (author == null) {
    return (
      <>
        <h1>404</h1>
        <p>Author not found with id: {id}</p>
      </>
    )
  }

  return (
    <>
      <h1>Blog Author</h1>
      <EditAuthor author={author} />
    </>
  )
}

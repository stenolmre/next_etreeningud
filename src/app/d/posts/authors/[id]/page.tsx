import { getAuthor } from '~/server/actions/post/author'

interface IPostCategoryPageProps {
  params: Promise<{ id: string }>
}

export default async function PostAuthorPage({ params }: IPostCategoryPageProps) {
  const { id } = await params
  const author = await getAuthor(id)

  return (
    <>
      <h1>Blog Author</h1>

      <pre>{JSON.stringify(author, null, 2)}</pre>
    </>
  )
}

import { getPost } from '~/server/actions/post'

interface IPostPageProps {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: IPostPageProps) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <>
      <h1>Blog post</h1>

      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  )
}

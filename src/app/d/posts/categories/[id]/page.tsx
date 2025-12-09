import { getPostCategory } from '~/server/actions/post/category'

interface IPostCategoryPageProps {
  params: Promise<{ id: string }>
}

export default async function PostCategoryPage({ params }: IPostCategoryPageProps) {
  const { id } = await params
  const category = await getPostCategory(id)

  return (
    <>
      <h1>Blog category</h1>

      <pre>{JSON.stringify(category, null, 2)}</pre>
    </>
  )
}

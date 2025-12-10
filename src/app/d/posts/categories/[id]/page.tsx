import { getPostCategory } from '~/server/actions/post/category'

import EditPostCategoryPage from '~/app/d/posts/categories/[id]/_components/edit-post-category'

interface IPostCategoryPageProps {
  params: Promise<{ id: string }>
}

export default async function PostCategoryPage({ params }: IPostCategoryPageProps) {
  const { id } = await params
  const category = await getPostCategory(id)

  if (category == null) {
    return (
      <>
        <h1>404</h1>
        <p>Category not found with id: {id}</p>
      </>
    )
  }

  return (
    <>
      <h1>Blog category</h1>
      <EditPostCategoryPage category={category} />
    </>
  )
}

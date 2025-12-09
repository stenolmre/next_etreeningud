import Link from 'next/link'

import { getPostCategories } from '~/server/actions/post/category'

export default async function PostCategoriesPage() {
  const categories = await getPostCategories()

  return (
    <>
      <h1>Blog Categories</h1>

      <Link href="/d/posts/categories/create" className="fs-50 cl-muted">
        + Add new blog category
      </Link>

      <ul role="list" className="mt-100">
        {categories.map(category => (
          <li key={category._id}>
            <Link href={`/d/posts/categories/${category._id}`}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

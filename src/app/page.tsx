import { getSettings, getUsers, getWorkouts } from '~/server/actions'

import * as posts from '~/server/actions/post/index'
import * as authors from '~/server/actions/post/author'
import * as categories from '~/server/actions/post/category'

interface IPageProps {
  searchParams: Promise<{}>
}

export default async function Page({ searchParams }: IPageProps) {
  const settings = await posts.getPosts()

  return (
    <>
      <h1>Welcome to eTreeningud</h1>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
    </>
  )
}

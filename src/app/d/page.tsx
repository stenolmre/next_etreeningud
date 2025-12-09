import { getSessionUser } from '~/server/session'

interface IPageProps {
  searchParams: Promise<{}>
}

export default async function Page({ searchParams }: IPageProps) {
  const me = await getSessionUser()

  return (
    <>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(me, null, 2)}</pre>
    </>
  )
}

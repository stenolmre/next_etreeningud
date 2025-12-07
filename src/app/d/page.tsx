import { getUsers } from '~/server/actions'

interface IPageProps {
  searchParams: Promise<{}>
}

export default async function Page({ searchParams }: IPageProps) {
  const settings = await getUsers()

  return (
    <>
      <h1>admin // Welcome to eTreeningud</h1>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
    </>
  )
}

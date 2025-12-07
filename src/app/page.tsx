import { SignOutBtn } from './_btn'

interface IPageProps {
  searchParams: Promise<{}>
}

export default function Page({ searchParams }: IPageProps) {
  return (
    <>
      <h1>Welcome to eTreeningud</h1>
      <SignOutBtn />
    </>
  )
}

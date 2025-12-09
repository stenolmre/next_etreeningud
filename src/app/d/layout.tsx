import { redirect } from 'next/navigation'

import { checkPermissionToUpdate } from '~/lib/permission'

import Navigation from '~/app/d/_components/navigation'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  try {
    await checkPermissionToUpdate()
  } catch {
    redirect('/auth')
  }

  return (
    <div id="admin" className="py-200 px-100">
      <Navigation />
      {children}
    </div>
  )
}

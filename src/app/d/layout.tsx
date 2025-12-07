import { redirect } from 'next/navigation'

import { checkPermissionToUpdate } from '~/lib/permission'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  try {
    await checkPermissionToUpdate()
  } catch {
    redirect('/auth')
  }

  return (
    <div>
      {/* <Navigation /> */}
      {children}
    </div>
  )
}

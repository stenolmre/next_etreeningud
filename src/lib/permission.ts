import { getSessionUser } from '~/server/session'

const PERMISSIONS = {
  USER: 1 << 0, // 1
  MODERATOR: 1 << 1, // 3
  ADMIN: 1 << 2, // 7
}

function hasPermission(user_permission: number, permission: number): boolean {
  return (user_permission & permission) === permission
}

export function isAdmin(user_permission: number): boolean {
  return hasPermission(user_permission, PERMISSIONS.ADMIN)
}

export function isModerator(user_permission: number): boolean {
  return hasPermission(user_permission, PERMISSIONS.MODERATOR)
}

export async function checkPermissionToUpdate(throwable = true): Promise<boolean> {
  const user = await getSessionUser()
  const can_update = isModerator(user.permissions)

  if (!can_update && throwable) {
    throw new Error('Not authorized')
  }

  return can_update
}

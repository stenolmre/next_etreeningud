'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function AuthButton({ id, name }: Readonly<{ id: string; name: string }>) {
  const [loading, setLoading] = useState(false)
  return (
    <button
      className="fill-w"
      onClick={async () => {
        setLoading(true)
        await signIn(id)
        setLoading(false)
      }}
      disabled={loading}
    >
      {loading ? 'Signing in...' : `w/ ${name}`}
    </button>
  )
}

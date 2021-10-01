import React from 'react'

import { useUserState } from '@context/user'

const Footer = () => {
  const { user } = useUserState()

  return <footer>
    <div>
      <span>Privaatsuspoliitika</span>
      <span>Kasutajatingimused</span>
      <span>{user != null ? 'Minu töölaud' : 'Loo konto'}</span>
    </div>
    <span>Copyright @ {new Date().getFullYear()} by KC Production. All rights reserved.</span>
  </footer>
}

export default Footer

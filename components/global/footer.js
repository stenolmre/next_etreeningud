import React from 'react'

const Footer = () => {
  return <footer>
    <div>
      <span>Privaatsuspoliitika</span>
      <span>Kasutajatingimused</span>
      <span>App</span>
    </div>
    <span>Copyright @ {new Date().getFullYear()} by KC Production. All rights reserved.</span>
  </footer>
}

export default Footer

import React from 'react'
import Link from 'next/link'

const Footbar = () => {
  return <div className="footbar">
    <Link href="/"><a><i className="fas fa-home"/></a></Link>
    <Link href="/fitness"><a><i className="fas fa-heartbeat"/></a></Link>
    <Link href="/posts"><a><i className="fas fa-pen"/></a></Link>
    <Link href="/contact"><a><i className="fas fa-phone"/></a></Link>
  </div>
}

export default Footbar

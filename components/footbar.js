import React from 'react'
import Link from 'next/link'

const Footbar = () => {
  return <div className="footbar">
    <Link href="/"><a>
      <i className="fas fa-home"/>
      <p>Esileht</p>
    </a></Link>
    <Link href="/fitness"><a>
      <i className="fas fa-dumbbell"/>
      <p>Treeningud</p>
    </a></Link>
    <Link href="/posts"><a>
      <i className="fas fa-pen"/>
      <p>Blogi</p>
    </a></Link>
    <Link href="/#contact"><a>
      <i className="fas fa-phone"/>
      <p>Kontakt</p>
    </a></Link>
  </div>
}

export default Footbar

import React from 'react'
import Link from 'next/link'

const Error = () => {
  return <div className="error">
    <div>Ups! Sattusite kogemata vigasele lehele.</div>
    <div>Alloleva nupu kaudu saate tagasi turvalisse keskkonda.</div>
    <Link href="/"><a>
      <i className="fas fa-rocket"/>
      <span>Esileht</span>
    </a></Link>
  </div>
}

export default Error

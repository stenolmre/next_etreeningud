import React from 'react'
import Link from 'next/link'

const Error = ({ statusCode }) => {
  return <div className="error_page">
    <h1>{ statusCode }</h1>
    <p>Ups! Sinu poolt otsitud lehte ei leitud. Kui sulle tundub, et midagi on meie keskkonnaga valesti, siis palun teatage meile probleemist <Link href="/#contact"><a>siin</a></Link>.</p>
    <div>
      <Link href="/"><a>Esileht</a></Link>
      <Link href="/fitness"><a>Treeningud</a></Link>
    </div>
  </div>
}

Error.getInitialProps = ({ response, error }) => {
  const statusCode = response ? response.statusCode : error ? error.statusCode : 404
  return { statusCode }
}

export default Error

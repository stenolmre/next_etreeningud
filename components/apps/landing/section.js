import React from 'react'
import Link from 'next/link'

const Section = ({ children, title, subtitle, link, button, column }) => {
  return <section className={column ? 'landing_section_col' : 'landing_section'}>
    <h2>{title}</h2>
    <span>{subtitle}</span>
    <div className="landing_children">
      {children}
    </div>
    <Link href={link}><a className="btn">{button}</a></Link>
  </section>
}

export default Section

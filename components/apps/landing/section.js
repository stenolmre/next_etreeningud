import React from 'react'
import Link from 'next/link'

const Section = ({ children, title, subtitle, link, button, column, icon }) => {
  return <section className={column ? 'landing_section_col' : 'landing_section'}>
    <h2 dangerouslySetInnerHTML={title}/>
    <span>{subtitle}</span>
    <div className="landing_children">
      {children}
    </div>
    <Link href={link}>
      <a className="btn">
        <i className={icon += ' icon'}/>
        <span>{button}</span>
      </a>
    </Link>
  </section>
}

export default Section

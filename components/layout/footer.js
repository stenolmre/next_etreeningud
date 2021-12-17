import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
  return <footer>
    <A href="/" icon="fas fa-heartbeat">Fitness</A>
    <A href="/posts" icon="fas fa-blog">Blogi</A>
    <A target="_blank" rel="noreferrer" href="https://m.me/coachkeisy" icon="fas fa-mobile-alt">Kontakt</A>
  </footer>
}

const A = ({ children, href, icon, ...props }) => {
  const { asPath } = useRouter()
  const className = asPath === href ? 'active nav' : 'nav'
  return <Link href={href || as}><a className={className} {...props}>
    <i className={icon} />
    <span>{children}</span>
  </a></Link>
}

export default Footer

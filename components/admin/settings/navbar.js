import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  return <div className="admin_settings_navbar">
    <Anchor name="Esileht" link="landing" />
    <Anchor name="Features" link="features" />
    <Anchor name="Sotsiaalmeedia" link="sotsiaalmeedia" />
    <Anchor name="Blogi autorid" link="writers" />
    <Anchor name="Harjutused" link="harjutused" />
    <Anchor name="Treeningute Lisad" link="treeningud" />
  </div>
}

const Anchor = ({ name, link }) => {
  const { query } = useRouter()

  return <Link href={`/private/admin/settings?page=${link}`}><a className={query.page === link ? 'inset_neumorphism' : 'neumorphism'}>
    { name }
  </a></Link>
}

export default Navbar

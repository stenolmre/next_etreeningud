import { Fragment } from 'react'

import NavigationItem from '~/app/d/_components/navigation-item'

const links = [
  { href: '/d', label: 'dashboard' },
  { href: '/d/posts', label: 'blog posts' },
  { href: '/d/posts/authors', label: 'p-authors' },
  { href: '/d/posts/categories', label: 'p-categories' },
]

export default function Navigation() {
  return (
    <nav>
      <ul role="list" className="flex fx-a-center fx-g-x-100 fx-g-y-50 fs-50">
        {links.map(({ href, label }, index) => (
          <Fragment key={href}>
            {index > 0 && <li className="cl-muted">/</li>}
            <NavigationItem href={href} label={label} />
          </Fragment>
        ))}
      </ul>
    </nav>
  )
}

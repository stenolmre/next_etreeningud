'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cx } from '~/lib/cx'

interface NavigationItemProps {
  href: string
  label: string
}

export default function NavigationItem({ href, label }: NavigationItemProps) {
  const pathname = usePathname()

  return (
    <li>
      <Link
        href={href}
        className={cx('h-cl-currentColor', pathname === href ? 'cl-currentColor' : 'cl-muted')}
      >
        {label}
      </Link>
    </li>
  )
}

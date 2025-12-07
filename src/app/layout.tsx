import '~/styles/main.css'

import { Geist } from 'next/font/google'

import type { Metadata } from 'next'

const sans = Geist({
  variable: '--ff-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'eTreeningud',
  description: 'Veebipõhised treeningud igale maitsele',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

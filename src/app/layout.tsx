import '~/styles/main.scss'

import { Geist, Geist_Mono, Jost } from 'next/font/google'

import type { Metadata } from 'next'

const sans = Geist({
  variable: '--ff-sans',
  subsets: ['latin'],
})

const mono = Geist_Mono({
  variable: '--ff-mono',
  subsets: ['latin'],
})

const jost = Jost({
  variable: '--ff-jost',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'eTreeningud',
  description: 'Veebipõhised treeningud igale maitsele',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${jost.variable}`}>
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

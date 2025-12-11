import '~/styles/main.scss'

import { Geist, Geist_Mono, Jost, Lilita_One } from 'next/font/google'

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

const lilita = Lilita_One({
  variable: '--ff-lilita',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'eTreeningud',
  description: 'Veebipõhised treeningud igale maitsele',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${jost.variable} ${lilita.variable}`}
    >
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

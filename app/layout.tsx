import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Panel',
  description: 'Privacy-first AI sidebar on any webpage.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon4-16.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/icon4-48.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/images/icon4-128.png" />
        <link rel="icon" type="image/svg+xml" href="/images/icon4.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

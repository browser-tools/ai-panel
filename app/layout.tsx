import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon4-16.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/icon4-48.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/images/icon4-128.png" />
        <link rel="icon" type="image/svg+xml" href="/images/icon4.svg" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

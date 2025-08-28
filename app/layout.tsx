import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

// See: https://github.com/vercel/next.js/issues/56687#issuecomment-2688979151
export const metadata: Metadata = {
  title: 'AI Panel',
  description: 'Privacy-first AI sidebar on any webpage.',
  icons: [
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/images/icon4-16.png' },
    { rel: 'icon', type: 'image/png', sizes: '48x48', url: '/images/icon4-48.png' },
    { rel: 'icon', type: 'image/png', sizes: '128x128', url: '/images/icon4-128.png' },
    { rel: 'icon', type: 'image/svg+xml', url: '/images/icon4.svg' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import logoIcon from '@/images/icon4.svg'
import FacebookPixel from '@/components/FacebookPixel';
import './globals.css'
import RedditPixel from '@/components/RedditPixel';

const geist = Geist({
  subsets: ['latin'],
})

// See: https://github.com/vercel/next.js/issues/56687#issuecomment-2688979151
export const metadata: Metadata = {
  title: 'AI Panel',
  description: 'Privacy-first AI sidebar on any webpage.',
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: logoIcon.src },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        <FacebookPixel />
        <RedditPixel />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

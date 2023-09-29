import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import clsx from 'clsx'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Irihi',
  description: "Irihi\'s Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className='h-full'>
      <body className={clsx(figtree.className, "h-full")}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { RLayout } from '@/components/RLayout'
import { Suspense } from 'react'


export const metadata: Metadata = {
    title: 'Irihi',
    description: "Irihi\'s Portfolio",
    verification: {
        google: "pSCseIhUeuRezlW0IRv1trmHrHajHPQPaI-n2uCcOX0"
    },
    metadataBase: new URL('https://irihi.pages.dev')
}

export default function RootLayout({
    children,
}: {
        children: React.ReactNode
    }) {
    return (
        <RLayout>
            {children}
        </RLayout>
    )
}

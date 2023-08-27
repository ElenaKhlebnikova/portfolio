import './globals.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
    title: 'Elena Khlebnikova',
    description: 'Portfolio web-site',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="font-primary">
            <Suspense fallback={<Loading />} />
            <body className="text-white">{children}</body>
        </html>
    )
}

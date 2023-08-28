import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Elena Khlebnikova | Frontend developer',
    description: 'Portfolio website | ...',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="font-primary">
            <body className="text-white">{children}</body>
        </html>
    )
}

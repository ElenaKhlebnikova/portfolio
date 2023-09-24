import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Elena Khlebnikova | Frontend developer',
    description:
        'Portfolio web-site of Elena khlebnikova, a web-developer based in Berlin, Germany',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="font-primary">
            <body className="text-white">
                <div className="max-w-screen-2xl mx-auto">{children}</div>
            </body>
        </html>
    )
}

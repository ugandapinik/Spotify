import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Siderbar from '@/components/Siderbar'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Spotify Clone',
    description: 'Created with react and next js',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={figtree.className}>
                <Siderbar>
                    {children}
                </Siderbar>
            </body>
        </html>
    )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          <main className="container mx-auto">
            <div className="flex items-start justify-center min-h-screen">
              <div className="mt-20">
                {children}
              </div> 
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}

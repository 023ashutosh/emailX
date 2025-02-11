"use client";

import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from "next-auth/react";
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import NextAuth from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'SignatureCraft - Professional Email Signatures',
//   description: 'Create beautiful, professional email signatures in minutes.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            {children}
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
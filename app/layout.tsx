"use client";

import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SessionProvider } from "next-auth/react";
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import NextAuth from 'next-auth'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Define the required font weights
  style: ['normal', 'italic'],  // Define the required styles
  subsets: ['latin']
});
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
      <body className={poppins.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            {children}
            <Toaster position="top-right" />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
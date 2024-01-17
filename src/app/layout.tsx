import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { NavigationTop } from '@/components/navigation/navigation-top'
import RecoilProvider from '@/components/providers/recoil-provider'
import ChatContainer from '@/components/chat/chat-container'
import NextSessionProvider from '@/components/providers/session-provider'

import { ChatButton } from '@/components/chat/chat-button'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '::embers::',
  description: 'toyproject',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, flex flex-col items-center bg-white dark:bg-[#121212]`}>
        <RecoilProvider>
          <NextSessionProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem={false}
              storageKey='embers-theme'
            >
              <NavigationTop />
              {children}
              <ChatButton />
              <ChatContainer />
            </ThemeProvider>
          </NextSessionProvider>
        </RecoilProvider>
      </body>
    </html>
  )
}

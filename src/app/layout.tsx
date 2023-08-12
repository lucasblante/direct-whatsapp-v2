import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const interFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Direct Whatsapp by Capy',
  description: 'Envie mensagens diretamente sem adicioanar aos contatos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-Br'>
      <head>
        <link rel='icon' href='/icon.svg' type='image/svg' sizes='32x32' />
      </head>
      <body className={interFont.className}>{children}</body>
    </html>
  )
}

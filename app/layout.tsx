import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ConditionalHeader } from '../src/components/common/ConditionalHeader/ConditionalHeader'
import '../app/globals.css'
import { DataLoader } from '@/components/common/DataLoader/DataLoader'

export const metadata: Metadata = {
  title: 'Asamblea Regional de los Testigos de Jehová',
  description: '',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <ConditionalHeader />
        <DataLoader>
          {children}
        </DataLoader>
      </body>
    </html>
  )
}

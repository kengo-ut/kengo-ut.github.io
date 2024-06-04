import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Kengo Ikeuchi',
  description: "Kengo Ikeuchi's portfolio site",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='jp'>
      <body>
        <Header />
        <main>{children}</main>
        <br />
        <Footer />
      </body>
    </html>
  )
}

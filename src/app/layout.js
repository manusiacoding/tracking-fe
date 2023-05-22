import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tracking Frontend',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header */}
        <Header />

        {/* content */}
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}

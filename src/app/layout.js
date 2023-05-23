import './globals.css'
import { Inter } from 'next/font/google'
import Page from './dashboard/page'
import Footer from './footer/page'
import Header from './header/page'
import Navbar from './navbar/page'

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
        <Navbar />
        <Page />
        {/* content */}
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}

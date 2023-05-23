import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
<<<<<<< HEAD
        <Navbar />
        <Page />
        <Footer />
=======

>>>>>>> 8b06ce9bd9c9daf50cdb9755542de6702b983b24
        {/* content */}
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}

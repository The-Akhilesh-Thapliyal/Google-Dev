import { Inter } from 'next/font/google'
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created by Next js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <body className="relative min-h-screen">
        {children}
        {/* Footer */}

        <Footer />
      </body>
    </html>
  )
}

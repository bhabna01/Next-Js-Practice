import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Hero',
  description: 'Next Hero',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">

      <body className={inter.className}>
        <nav>Home</nav>

        {children}

        <footer>Footer</footer>
      </body>

    </html>
  )
}
export default RootLayout
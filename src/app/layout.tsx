import { Inter } from 'next/font/google'
import { Sidebar } from './components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Colten Portfolio',
  description: "Colten Van Tussenbrook's portfolio and blog",
}

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="flex-auto">
            <Sidebar />
            <div className="flex justify-center items-center min-h-screen pl-40">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

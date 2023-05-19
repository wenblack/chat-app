import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { ContactView } from '@/components/ContactView'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col overflow-hidden bg-[#24243d] ${inter.className}`}
    >
      <Header></Header>
      <ContactView></ContactView>
    </main>
  )
}

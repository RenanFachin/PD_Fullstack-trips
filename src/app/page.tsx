'use client'

import { useSession } from 'next-auth/react'
import { Search } from './components/Search'

export default function Home() {
  const session = useSession()


  return (
    <div>
      <Search />
    </div>
  )
}

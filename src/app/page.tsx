'use client'

import { useSession } from 'next-auth/react'
import { Search } from './components/Search'
import { QuickSearchTags } from './components/QuickSearchTags'

export default function Home() {
  const session = useSession()


  return (
    <div>
      <Search />
      <QuickSearchTags />
    </div>
  )
}

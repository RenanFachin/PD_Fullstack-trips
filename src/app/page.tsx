'use client'
import { signIn, useSession, signOut } from 'next-auth/react'

export default function Home() {
  const session = useSession()


  return (
    <div>
      <button onClick={() => signIn()}>
        Login
      </button>

      <h1>Olá, {session.data?.user?.name}</h1>

      <button onClick={() => signOut()}>
        Sair
      </button>
    </div>
  )
}

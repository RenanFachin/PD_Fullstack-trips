"use client"
import Image from "next/image"

import Logo from '/public/Logo.png'
import { signIn, signOut, useSession } from "next-auth/react"

import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const router = useRouter()
  const session = useSession()


  function handleLogin() {
    signIn()
  }

  function handleLogOut() {
    setIsMenuOpen(!isMenuOpen)

    signOut()
  }

  function handleTogleHamburguerMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function handleToMyTrips() {

    setIsMenuOpen(!isMenuOpen)

    router.push('/my-trips')
  }

  return (
    <div className="container mx-auto px-4 py-0 h-[93px] flex justify-between items-center lg:border-b lg:shadow-sm">
      <Link href="/">
        <div className="h-8 w-[182px]">
          <Image src={Logo} alt="Full Stack Week logo" />
        </div>
      </Link>


      {session.status === "unauthenticated" &&
        (
          <button
            className="text-primary text-sm font-semibold"
            onClick={handleLogin}
          >
            Login
          </button>
        )
      }

      {session.status === "authenticated" && session.data.user &&
        (
          <div className="flex items-center gap-5 p-2 border-gray-50 border rounded-3xl relative shadow-sm">
            <AiOutlineMenu
              size={16}
              onClick={handleTogleHamburguerMenu}
              className="cursor-pointer"
            />

            <Image
              className="rounded-full shadow-md"
              src={session.data.user.image!}
              width={28}
              height={28}
              alt={session.data.user.name!}
            />


            {
              isMenuOpen && (
                <div className="z-10 absolute top-12 left-0 w-full h-full rounded-3xl flex items-center flex-col justify-center shadow-md gap-2">

                  <button
                    className="text-primary text-xs cursor-pointer"
                    onClick={handleToMyTrips}
                  >
                    Minhas viagens
                  </button>


                  <button
                    className="text-primary text-xs cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              )
            }
          </div>
        )
      }



    </div>
  )
}
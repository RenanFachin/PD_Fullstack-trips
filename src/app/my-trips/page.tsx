"use client"

import { TripReservation } from "@prisma/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function MyTrips() {
  const [userReservations, setUserReservation] = useState<TripReservation[]>([])
  const { status, data } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      return router.push('/')
    }


    const fetchReservation = async () => {
      const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations`);
      const trips = await response.json()


      setUserReservation(trips)

      console.log(trips)
    }

    fetchReservation()

  }, [status])

  return (
    <div>minhas viagens</div>
  )
}
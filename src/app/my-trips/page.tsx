"use client"

import { Prisma, TripReservation } from "@prisma/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserReservationItem } from "./components/UserReservationItem"

export default function MyTrips() {
  const [userReservations, setUserReservation] = useState<Prisma.TripReservationGetPayload<{
    include: { trip: true }
  }>[]>([])
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
    <div className="container mx-auto p-5">
      <h2 className="font-semibold text-secondary text-xl">Minhas viagens</h2>

      {userReservations.map(reservation => (
        <UserReservationItem
          key={reservation.id}
          reservation={reservation}
        />
      ))}
    </div>
  )
}
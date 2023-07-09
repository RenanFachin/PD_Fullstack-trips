"use client"

import { Prisma, TripReservation } from "@prisma/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { UserReservationItem } from "./components/UserReservationItem"
import { Button } from "@/components/Button"
import Link from "next/link"

export default function MyTrips() {
  const [userReservations, setUserReservation] = useState<Prisma.TripReservationGetPayload<{
    include: { trip: true }
  }>[]>([])
  const { status, data } = useSession()

  const router = useRouter()

  const fetchReservation = async () => {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations`);
    const trips = await response.json()
    setUserReservation(trips)
  }


  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      return router.push('/')
    }

    fetchReservation()

  }, [status])

  return (
    <div className="container mx-auto p-5">
      <h2 className="font-semibold text-secondary text-xl lg:mb-3">Minhas viagens</h2>

      {userReservations.length > 0 ? (userReservations.map(reservation => (
        <div
          key={reservation.id}
          className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-10"
        >
          <UserReservationItem
            reservation={reservation}
            fetchReservation={fetchReservation}
          />
        </div>
      ))) : (
        <div className="flex flex-col gap-5">
          <p className="text-secondary mt-3">Você ainda não possui nenhuma viagem</p>

          <Link href={'/'}>
            <Button className="w-full">
              Fazer reserva
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
import { prisma } from "@/lib/prisma"
import { TripHeader } from "./components/TripHeader"
import { TripReservation } from "./components/TripReservation"
import { TripDescription } from "./components/TripDescription"


async function getTripDetails(tripId: string) {
  const tripDetails = await prisma.trip.findUniqueOrThrow({
    where: {
      id: tripId
    }
  })

  return tripDetails
}

export default async function Trips({ params }: { params: { tripId: string } }) {
  const details = await getTripDetails(params.tripId)

  return (
    <div className="container mx-auto">
      <TripHeader details={details} />

      {/* Inputs */}
      <TripReservation trip={details} />

      {/* Details */}
      <TripDescription trip={details} />
    </div>
  )
}
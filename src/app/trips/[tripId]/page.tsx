import { prisma } from "@/lib/prisma"
import { TripHeader } from "./components/TripHeader"
import { TripReservation } from "./components/TripReservation"
import { TripDescription } from "./components/TripDescription"
import { TripHighlights } from "./components/TripHighlights"
import { TripLocation } from "./components/TripLocation"


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
    <div className="container mx-auto lg:px-40">
      <TripHeader details={details} />

      <div className="flex flex-col lg:flex-row lg:mt-5 lg:gap-20">
        <div className="lg:order-2">
          {/* Inputs */}
          <TripReservation trip={details} />
        </div>

        <div className="lg:order-1">
          {/* Details */}
          <TripDescription description={details.description} />

          <TripHighlights highlights={details.highlights} />
        </div>
      </div>

      <TripLocation
        location={details.location}
        locationDescription={details.locationDescription}
      />
    </div>
  )
}
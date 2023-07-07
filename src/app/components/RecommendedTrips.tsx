import { Separator } from "@/components/Separator";
import { TripItem } from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";


async function getTrips() {
  const trips = await prisma.trip.findMany({})

  return trips
}

const RecommendadedTrips = async () => {
  const data = await getTrips()

  return (
    <div className="container mx-auto px-5 py-2">
      <div className="flex items-center">
        <Separator />
        <h3 className="font-medium text-gray-100 whitespace-nowrap px-3">
          Destinos recomandados
        </h3>
        <Separator />
      </div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>


    </div>
  )
}

export default RecommendadedTrips
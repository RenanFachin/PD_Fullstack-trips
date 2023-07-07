import { Decimal } from "@prisma/client/runtime"
import Image from "next/image"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"


interface TripItemProps {
  trip: {
    id: string
    name: string
    coverImage: string
    countryCode: string
    location: string
    pricePerDay: Decimal
  }
}

export function TripItem({ trip }: TripItemProps) {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col">
        <div className="relative h-[280px] w-[280px]">
          <Image
            src={trip.coverImage}
            className="rounded-lg shadow-md"
            fill
            style={{
              objectFit: "cover"
            }}
            alt={trip.name}
          />
        </div>

        <strong className="text-secondary font-medium text-sm mt-2">
          {trip.name}
        </strong>

        <div className="flex items-center gap-2 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />

          <span className="text-xs text-gray-100">
            {trip.location}
          </span>
        </div>

        <p className="text-xs text-gray-100">
          <span className="text-primary">
            {trip.pricePerDay.toString()}
          </span>
          por dia
        </p>
      </div>
    </Link>
  )
}
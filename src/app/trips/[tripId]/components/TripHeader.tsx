import { Trip } from "@prisma/client"
import Image from "next/image"
import ReactCountryFlag from "react-country-flag"

interface TripHeaderProps {
  details: Trip
}

export function TripHeader({ details }: TripHeaderProps) {
  return (
    <section className="flex flex-col">
      {/* Foto */}
      <div className="relative h-[300px] w-full">
        <Image
          src={details.coverImage}
          fill
          alt={details.name}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Nome, Localidade e preço */}
      <div className="flex flex-col p-5">
        <strong className="font-semibold text-xl text-secondary">
          {details.name}
        </strong>

        <div className="flex items-center gap-2 my-1">
          <ReactCountryFlag countryCode={details.countryCode} svg />

          <span className="text-xs text-gray-100 underline">
            {details.location}
          </span>
        </div>

        <p className="text-xs text-gray-100">
          <span className="text-primary font-bold">R$ {details.pricePerDay.toString()}</span> por noite
        </p>
      </div>
    </section>
  )
}
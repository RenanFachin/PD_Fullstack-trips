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
      <div className="relative h-[300px] w-full lg:hidden">
        <Image
          src={details.coverImage}
          fill
          alt={details.name}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="hidden lg:grid grid-cols-[2fr,1fr,1fr] gap-2 grid-rows-2 lg:order-2">
        <div className="relative row-span-2">
          <Image
            src={details.coverImage}
            fill
            style={{
              objectFit: "cover",
            }}
            alt={details.name}
            className="rounded-tl-lg rounded-bl-lg shadow-md"
          />
        </div>

        <div className="relative h-[200px] w-full">
          <Image
            src={details.imagesUrl[0]}
            fill
            style={{
              objectFit: "cover",
            }}
            alt={details.name}
            className="shadow-md"
          />
        </div>

        <div className="relative h-[200px] w-full">
          <Image
            src={details.imagesUrl[1]}
            fill
            style={{
              objectFit: "cover",
            }}
            alt={details.name}
            className="shadow-md  rounded-tr-lg"
          />
        </div>

        <div className="relative h-[200px] w-full">
          <Image
            src={details.imagesUrl[2]}
            fill
            style={{
              objectFit: "cover",
            }}
            alt={details.name}
            className="shadow-md"
          />
        </div>

        <div className="relative h-[200px] w-full">
          <Image
            src={details.coverImage}
            fill
            style={{
              objectFit: "cover",
            }}
            alt={details.name}
            className="shadow-md  rounded-br-lg"
          />
        </div>
      </div>


      {/* Nome, Localidade e preço */}
      <div className="flex flex-col p-5 lg:p-0 mb-8">
        <strong className="font-semibold text-xl text-secondary lg:text-3xl">
          {details.name}
        </strong>

        <div className="flex items-center gap-2 my-1">
          <ReactCountryFlag countryCode={details.countryCode} svg />

          <span className="text-xs text-gray-100 underline lg:text-sm">
            {details.location}
          </span>
        </div>

        <p className="text-xs text-gray-100 lg:hidden">
          <span className="text-primary font-bold">R$ {details.pricePerDay.toString()}</span> por noite
        </p>
      </div>
    </section>
  )
}
import Image from "next/image";

import exampleMapImage from '../../../../../public/map-mobile.png'
import { Button } from "@/components/Button";

interface TripLocationProps {
  location: string
  locationDescription: string
}

export function TripLocation({ location, locationDescription }: TripLocationProps) {
  return (
    <div className="flex flex-col p-5">
      <strong className="font-semibold text-secondary text-lg mb-5">
        Localização
      </strong>

      <div className="relative h-[280px] w-full">
        <Image
          src={exampleMapImage}
          alt={location}
          fill
          style={{ objectFit: "cover" }}
          className="shadow-lg rounded-lg"
        />
      </div>

      <span className="text-secondary text-sm font-semibold mt-3">
        {location}
      </span>

      <p className="text-xs text-secondary mt-3 leading-5">
        {locationDescription}
      </p>

      <Button className="w-full mt-5" variant="secondary">
        Ver no Google Maps
      </Button>
    </div>
  )
}
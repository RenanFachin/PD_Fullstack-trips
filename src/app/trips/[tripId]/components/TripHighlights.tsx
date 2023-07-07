import Image from "next/image"

import checkImage from '../../../../../public/check-icon.png'

interface TripHighlightsProps {
  trip: {
    highlights: string[]
  }
}

export function TripHighlights({ trip }: TripHighlightsProps) {
  return (
    <div className="flex flex-col p-5">
      <strong className="font-semibold text-secondary text-lg mb-3">
        Destaques
      </strong>

      <div className="flex flex-wrap gap-y-3">
        {
          trip.highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-2 w-1/2">
              <Image src={checkImage} width={20} height={20} alt={highlight} />

              <span className="text-gray-100 text-xs">
                {highlight}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )

}
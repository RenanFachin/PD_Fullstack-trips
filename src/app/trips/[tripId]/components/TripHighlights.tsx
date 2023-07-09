import Image from "next/image"

import checkImage from '../../../../../public/check-icon.png'

interface TripHighlightsProps {
  highlights: string[]
}

export function TripHighlights({ highlights }: TripHighlightsProps) {
  return (
    <div className="flex flex-col p-5 lg:p-0 lg:mt-12">
      <strong className="font-semibold text-secondary text-lg mb-3 lg:text-xl">
        Destaques
      </strong>

      <div className="flex flex-wrap gap-y-3 lg:mt-5">
        {
          highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-2 lg:gap-3 w-1/2">
              <Image src={checkImage} width={20} height={20} alt={highlight} />

              <span className="text-gray-100 text-xs lg:text-base">
                {highlight}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )

}
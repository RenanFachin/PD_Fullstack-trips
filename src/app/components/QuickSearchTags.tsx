import { Separator } from "@/components/Separator";

import Image from "next/image";
import HotelImage from '../../../public/hotel-icon.png'
import CottageImage from '../../../public/cottage-icon.png'
import FarmImage from '../../../public/farm-icon.png'
import InnImage from '../../../public/inn-icon.png'

export function QuickSearchTags() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <Separator />
        <h3 className="font-medium text-gray-100 whitespace-nowrap px-3">
          Tente pesquisar por
        </h3>
        <Separator />
      </div>

      <div className="flex w-full justify-between mt-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <Image width={32} height={32} src={HotelImage} alt="Hotel" />

          <span className="text-sm text-gray-100">Hotel</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <Image width={32} height={32} src={CottageImage} alt="Hotel" />

          <span className="text-sm text-gray-100">Chalé</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <Image width={32} height={32} src={InnImage} alt="Hotel" />

          <span className="text-sm text-gray-100">Pousada</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <Image width={32} height={32} src={FarmImage} alt="Hotel" />

          <span className="text-sm text-gray-100">Fazenda</span>
        </div>
      </div>
    </div>
  )
}
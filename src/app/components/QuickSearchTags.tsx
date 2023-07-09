import { Separator } from "@/components/Separator";

import Image from "next/image";
import HotelImage from '../../../public/hotel-icon.png'
import CottageImage from '../../../public/cottage-icon.png'
import FarmImage from '../../../public/farm-icon.png'
import InnImage from '../../../public/inn-icon.png'
import Link from "next/link";

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

      <div className="flex w-full justify-between mt-4 lg:mt-10 lg:justify-center lg:gap-40">
        <div className="flex flex-col items-center justify-center gap-1 lg:hover:scale-110">
          <Link href={'/trips/search?text=hotel'}>
            <Image width={32} height={32} src={HotelImage} alt="Hotel" />
          </Link>
          <span className="text-sm text-gray-100 lg:text-base">Hotel</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 lg:hover:scale-110">
          <Link href={'/trips/search?text=chale'}>
            <Image width={32} height={32} src={CottageImage} alt="Chalé" />
          </Link>

          <span className="text-sm text-gray-100 lg:text-base">Chalé</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 lg:hover:scale-110">
          <Link href={'/trips/search?text=pousada'}>
            <Image width={32} height={32} src={InnImage} alt="Pousada" />
          </Link>

          <span className="text-sm text-gray-100 lg:text-base">Pousada</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 lg:hover:scale-110">
          <Link href={'/trips/search?text=fazenda'}>
            <Image width={32} height={32} src={FarmImage} alt="Fazenda" />
          </Link>

          <span className="text-sm text-gray-100 lg:text-base">Fazenda</span>
        </div>
      </div>
    </div>
  )
}
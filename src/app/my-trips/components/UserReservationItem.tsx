import { Button } from "@/components/Button"
import { Prisma } from "@prisma/client"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import Image from 'next/image'
import ReactCountryFlag from "react-country-flag"

interface UserReservationItemProp {
  reservation: Prisma.TripReservationGetPayload<{
    include: { trip: true }
  }>
}

export function UserReservationItem({ reservation }: UserReservationItemProp) {
  return (
    <div>
      <div className="flex flex-col p-5 mt-5 border-gray-50 border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-gray-50">
          <div className="relative h-[106px] w-[124px]">
            <Image
              className="rounded-lg"
              src={reservation.trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              alt={reservation.trip.name}
            />
          </div>

          <div className="flex flex-col">
            <strong className="text-lg text-secondary font-semibold">
              {reservation.trip.name}
            </strong>

            <div className="flex items-center gap-2 ">
              <ReactCountryFlag countryCode={reservation.trip.countryCode} svg />

              <span className="text-xs text-gray-100 underline">
                {reservation.trip.location}
              </span>
            </div>

          </div>
        </div>

        <div className="flex flex-col mt-4 text-secondary pb-5 border-b border-gray-50">
          <h3 className="font-semibold">Data</h3>
          <div className="flex items-center gap-1 mt-1">
            <p className="text-sm">
              {format(new Date(reservation.startDate), "dd 'de' MMMM", { locale: ptBR })}
            </p>
            {"   -   "}
            <p className="text-sm">
              {format(new Date(reservation.endDate), "dd 'de' MMMM", { locale: ptBR })}
            </p>
          </div>


          <h3 className="font-semibold mt-5">Hóspedes</h3>
          <div className="flex items-center gap-1 mt-1">
            <p className="text-sm">
              {reservation.guests} hóspedes
            </p>
          </div>
        </div>


        <div className="flex items-center justify-between gap-1 my-5 pb-5 border-b border-gray-50">
          <h3 className="font-semibold">Total Pago: </h3>
          <p className="text-base font-semibold text-primary">
            R$ {Number(reservation.totalPaid)}
          </p>
        </div>

        <Button variant="danger">
          Cancelar
        </Button>
      </div>
    </div>
  )
}
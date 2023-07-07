"use client"
import { Button } from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip
}

export function TripReservation({ trip }: TripReservationProps) {
  return (
    <div className="flex flex-col px-5 gap-2">
      <div className="flex gap-3">
        <DatePicker
          className="w-full"
          placeholderText="Data de Início"
          onChange={() => { }} />

        <DatePicker
          className="w-full"
          placeholderText="Data Final"
          onChange={() => { }}
        />
      </div>

      <Input placeholder={`Número de hóspedes (máx: ${trip.maxGuests})`} />

      <div className="flex justify-between">
        <p className="font-medium text-sm text-secondary">Total: </p>

        <span>R$ 2500</span>
      </div>

      <div className="pb-10 border-b border-gray-50">
        <Button className="w-full">
          Reservar agora
        </Button>
      </div>


    </div>
  )
}
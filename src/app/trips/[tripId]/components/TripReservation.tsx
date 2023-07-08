"use client"

import { Button } from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip
}

interface TripReservationForm {
  guests: number
  startDate: Date | null
  endData: Date | null
}

export function TripReservation({ trip }: TripReservationProps) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<TripReservationForm>()

  async function handleNewReservation(data: any) {
    console.log(data)
  }

  return (
    <form className="flex flex-col px-5 gap-2" onSubmit={handleSubmit(handleNewReservation)}>
      <div className="flex gap-3">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: 'Data inicial é obrigatória'
            }
          }}
          control={control}
          render={({ field }) =>
            <DatePicker
              className="w-full"
              placeholderText="Data de Início"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors.startDate}
              errorMessage={errors.startDate?.message}
            />}
        />

        <Controller
          name="endData"
          rules={{
            required: {
              value: true,
              message: 'Data inicial é obrigatória'
            }
          }}
          control={control}
          render={({ field }) =>
            <DatePicker
              className="w-full"
              placeholderText="Data Final"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors.startDate}
              errorMessage={errors.endData?.message}
            />}
        />
      </div>

      <Input
        placeholder={`Número de hóspedes (máx: ${trip.maxGuests})`}
        {...register('guests', { required: { value: true, message: 'Número de hóspedes é obrigatório' } })}
        error={!!errors.guests}
        errorMessage={errors.guests?.message}
      />

      <div className="flex justify-between">
        <p className="font-medium text-sm text-secondary">Total: </p>

        <span>R$ 2500</span>
      </div>

      <div className="pb-10 border-b border-gray-50">
        <Button className="w-full">
          Reservar agora
        </Button>
      </div>


    </form>
  )
}
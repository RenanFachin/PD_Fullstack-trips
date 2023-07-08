"use client"

import { Button } from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip
}

interface TripReservationForm {
  guests: number
  startDate: Date | null
  endDate: Date | null
}

export function TripReservation({ trip }: TripReservationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError
  } = useForm<TripReservationForm>()

  const router = useRouter()

  async function handleNewReservation(data: TripReservationForm) {
    const response = await fetch('http://localhost:3000/api/trips/check', {
      method: 'POST',
      body: Buffer.from(JSON.stringify({
        startDate: data.startDate,
        endDate: data.endDate,
        tripId: trip.id
      }))
    })

    const res = await response.json()

    if (res?.error?.code === 'TRIP_ALREADY_RESERVED') {
      setError("startDate", {
        type: "manual",
        message: 'Esta data já está em uso.'
      })

      return setError("endDate", {
        type: "manual",
        message: 'Esta data já está em uso.'
      })
    }

    if (res?.error?.code === 'INVALID_START_DATE') {
      return setError("startDate", {
        type: "manual",
        message: 'Data inválida'
      })
    }

    if (res?.error?.code === 'INVALID_END_DATE') {
      return setError("endDate", {
        type: "manual",
        message: 'Data inválida'
      })
    }

    router.push(`/trips/${trip.id}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${data.guests}`)

  }

  const startDate = watch("startDate")
  const endDate = watch("endDate")

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
              minDate={trip.startDate}
            />}
        />

        <Controller
          name="endDate"
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
              errorMessage={errors.endDate?.message}
              maxDate={trip.endDate}
              minDate={startDate ?? trip.startDate}
            />}
        />
      </div>

      <Input
        placeholder={`Número de hóspedes (máx: ${trip.maxGuests})`}
        {...register('guests', {
          required: { value: true, message: 'Número de hóspedes é obrigatório' },
          max: {
            value: trip.maxGuests,
            message: `O número de hóspedes não pode ser mais que ${trip.maxGuests}`
          }
        })}
        error={!!errors.guests}
        errorMessage={errors.guests?.message}
        type="number"
      />

      <div className="flex justify-between">
        <p className="font-medium text-sm text-secondary">Total: </p>

        <span>
          {startDate && endDate ?
            `R$ ${(differenceInDays(endDate, startDate) * (trip.pricePerDay as any))}`
            :
            'R$ -'
          }
        </span>
      </div>

      <div className="pb-10 border-b border-gray-50">
        <Button className="w-full">
          Reservar agora
        </Button>
      </div>


    </form>
  )
}
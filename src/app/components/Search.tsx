"use client"

import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

interface TripSearchForm {
  text: string
  startDate: Date | null
  budget: number
}

export function Search() {
  const { control, register, handleSubmit, formState: { errors } } = useForm<TripSearchForm>()

  const router = useRouter()

  function onSubmit(data: TripSearchForm) {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`)
  }

  return (
    <section className="container mx-auto p-2 mt-4 bg-search-background bg-cover bg-no-repeat bg-center lg:py-28">
      <h2
        className="font-semibold text-2xl text-secondary text-center lg:text-3xl">
        Encontre sua próxima <span className="text-primary">viagem</span>!
      </h2>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:p-4 lg:bg-primary lg:bg-opacity-25 lg:rounded-xl lg:mt-15">
        <Input
          placeholder="Onde você quer ir?"
          {...register("text", {
            required: {
              value: true,
              message: 'Texto é obrigatório'
            }
          })}
          error={!!errors.text}
        />

        <div className="flex gap-4 lg:w-full">
          {/* <DatePicker placeholderText="Data de ida" onChange={() => { }} className="w-full" /> */}

          <Controller
            name="startDate"
            control={control}
            render={({ field }) =>
              <DatePicker
                className="w-full"
                placeholderText="Data Final"
                onChange={field.onChange}
                selected={field.value}
                minDate={new Date()}
              />}
          />


          <Controller
            name="budget"
            control={control}
            render={({ field }) =>
              <CurrencyInput
                allowDecimals
                placeholder="Orçamento"
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
              />
            }
          />


        </div>

        <Button onClick={() => handleSubmit(onSubmit)()} className="lg:w-1/2">
          Buscar
        </Button>
      </div>

    </section>
  )
}
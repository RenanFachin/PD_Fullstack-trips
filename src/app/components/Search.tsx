'use-client'

import { CurrencyInput } from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";

export function Search() {
  return (
    <section className="container mx-auto p-2 mt-4">
      <h2
        className="font-semibold text-2xl text-secondary text-center">
        Encontre sua próxima <span className="text-primary">viagem</span>!
      </h2>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker placeholderText="Data de ida" onChange={() => { }} className="w-full" />
          <CurrencyInput placeholder="Orçamento" />
        </div>
      </div>

    </section>
  )
}
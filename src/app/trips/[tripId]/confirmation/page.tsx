"use client"

import { Trip } from "@prisma/client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import ReactCountryFlag from "react-country-flag"
import { format } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import { Button } from "@/components/Button"
import { useSession } from "next-auth/react"
import { toast } from 'react-toastify';
import { loadStripe } from "@stripe/stripe-js"

export default function Trips({ params }: { params: { tripId: string } }) {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();

  const { status, data } = useSession();

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trips/check`, {
        method: "POST",
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        }),
      });

      const res = await response.json();

      if (res?.error) {
        return router.push("/");
      }

      setTrip(res.trip);
      setTotalPrice(res.totalPrice);
    };

    if (status === "unauthenticated") {
      router.push("/");
    }

    fetchTrip();
  }, [status, searchParams, params, router]);

  if (!trip) return null;

  const handleBuyClick = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
          guests: Number(searchParams.get("guests")),
          totalPrice,
          coverImage: trip.coverImage,
          name: trip.name,
          description: trip.description,
        })
      ),
    });

    if (!res.ok) {
      return toast.error("Ocorreu um erro ao realizar a reserva!", { position: "bottom-center" });
    }

    const { sessionId } = await res.json();

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);

    await stripe?.redirectToCheckout({ sessionId });

    toast.success("Reserva realizada com sucesso!", { position: "bottom-center" });
  };

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests");
  return (
    <div className="container mx-auto p-5">
      <h2 className="font-semibold text-xl text-secondary">Sua viagem</h2>

      <div className="flex flex-col p-5 mt-5 border-gray-50 border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-gray-50">
          <div className="relative h-[106px] w-[124px]">
            <Image
              className="rounded-lg"
              src={trip.coverImage}
              fill
              style={{ objectFit: "cover" }}
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <strong className="text-lg text-secondary font-semibold">
              {trip.name}
            </strong>

            <div className="flex items-center gap-2 ">
              <ReactCountryFlag countryCode={trip.countryCode} svg />

              <span className="text-xs text-gray-100 underline">
                {trip.location}
              </span>
            </div>

          </div>
        </div>

        <h3 className="font-semibold text-lg text-secondary mt-2">
          Informações sobre o preço
        </h3>

        <div className="flex justify-between mt-1">
          <p className="text-secondary">Total: </p>
          <span className="font-medium">R$ {totalPrice}</span>
        </div>
      </div>

      <div className="flex flex-col mt-4 text-secondary">
        <h3 className="font-semibold">Data</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>
            {format(startDate, "dd 'de' MMMM", { locale: ptBR })}
          </p>
          {"   -   "}
          <p>
            {format(endDate, "dd 'de' MMMM", { locale: ptBR })}
          </p>
        </div>


        <h3 className="font-semibold mt-5">Hóspedes</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>
            {guests} hóspedes
          </p>
        </div>


        <Button className="mt-7" onClick={handleBuyClick}>
          Finalizar compra
        </Button>
      </div>
    </div>
  )
}
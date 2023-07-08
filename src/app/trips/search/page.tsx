"use client"

import { TripItem } from "@/components/TripItem"
import { prisma } from "@/lib/prisma"
import { Trip } from "@prisma/client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface getTripsParams {
  text: string
  startDate: Date | null
  budget?: number
}


export default function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await fetch(
        `/api/trips/search?text=${searchParams.get("text") ?? ""}&startDate=${searchParams.get("startDate")}&budget=${searchParams.get("budget")}`
      );

      const data = await response.json();

      setTrips(data);
    };

    fetchTrips();
  }, []);


  return (
    <div className="container mx-auto flex flex-col items-center p-5 gap-3">
      <h2 className="text-secondary font-semibold text-xl">Hospedagens encontradas</h2>
      {trips.map(trip => <TripItem key={trip.id} trip={trip} />)}
    </div>
  )
}
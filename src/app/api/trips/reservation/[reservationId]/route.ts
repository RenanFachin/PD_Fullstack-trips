import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(_request: Request, { params: { reservationId } }: { params: { reservationId: string } }) {

  if (!reservationId) {
    return
  }

  const deletedReservation = await prisma.tripReservation.delete({
    where: {
      id: reservationId
    }
  })


  return new NextResponse(JSON.stringify(deletedReservation), { status: 200 })
}
interface TripDescriptionProps {
  trip: {
    description: string
  }
}

export function TripDescription({ trip }: TripDescriptionProps) {
  return (
    <div className="flex flex-col p-5">
      <strong className="font-semibold text-secondary text-lg">
        Sobre a viagem
      </strong>

      <p className="text-xs leading-6 text-secondary mt-3">
        {trip.description}
      </p>
    </div>
  )
}